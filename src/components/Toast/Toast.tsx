import React, { forwardRef, createContext, useContext, useState, useCallback } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import './Toast.css';

// Icons
const SuccessIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

const ErrorIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
);

const WarningIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
);

const InfoIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const iconMap = {
    success: SuccessIcon,
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoIcon,
};

/* ==========================================
   Toast Context for imperative API
   ========================================== */

interface ToastData {
    id: string;
    title?: string;
    description?: string;
    variant?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    action?: React.ReactNode;
}

interface ToastContextValue {
    toasts: ToastData[];
    addToast: (toast: Omit<ToastData, 'id'>) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

/* ==========================================
   Toast Provider
   ========================================== */

export interface ToastProviderProps {
    children: React.ReactNode;
    /** Duration in milliseconds */
    duration?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
    children,
    duration = 5000,
}) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const addToast = useCallback((toast: Omit<ToastData, 'id'>) => {
        const id = Math.random().toString(36).slice(2);
        setToasts(prev => [...prev, { ...toast, id }]);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            <ToastPrimitive.Provider duration={duration}>
                {children}
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        open={true}
                        onOpenChange={(open) => {
                            if (!open) removeToast(toast.id);
                        }}
                        variant={toast.variant}
                        title={toast.title}
                        description={toast.description}
                        action={toast.action}
                    />
                ))}
                <ToastViewport />
            </ToastPrimitive.Provider>
        </ToastContext.Provider>
    );
};

/* ==========================================
   Toast Viewport
   ========================================== */

export const ToastViewport = forwardRef<
    React.ElementRef<typeof ToastPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className = '', ...props }, ref) => (
    <ToastPrimitive.Viewport
        ref={ref}
        className={`smt-toast-viewport ${className}`}
        {...props}
    />
));

ToastViewport.displayName = 'ToastViewport';

/* ==========================================
   Toast Component
   ========================================== */

export interface ToastProps
    extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
    /** Visual variant */
    variant?: 'success' | 'error' | 'warning' | 'info';
    /** Title text */
    title?: string;
    /** Description text */
    description?: string;
    /** Action element */
    action?: React.ReactNode;
}

export const Toast = forwardRef<
    React.ElementRef<typeof ToastPrimitive.Root>,
    ToastProps
>(({ variant = 'info', title, description, action, className = '', ...props }, ref) => {
    const IconComponent = iconMap[variant];

    return (
        <ToastPrimitive.Root
            ref={ref}
            className={`smt-toast smt-toast--${variant} ${className}`}
            {...props}
        >
            <span className="smt-toast-icon">
                <IconComponent />
            </span>
            <div className="smt-toast-content">
                {title && (
                    <ToastPrimitive.Title className="smt-toast-title">
                        {title}
                    </ToastPrimitive.Title>
                )}
                {description && (
                    <ToastPrimitive.Description className="smt-toast-description">
                        {description}
                    </ToastPrimitive.Description>
                )}
                {action && (
                    <ToastPrimitive.Action className="smt-toast-action" asChild altText="action">
                        {action}
                    </ToastPrimitive.Action>
                )}
            </div>
            <ToastPrimitive.Close className="smt-toast-close">
                <CloseIcon />
            </ToastPrimitive.Close>
        </ToastPrimitive.Root>
    );
});

Toast.displayName = 'Toast';

/* ==========================================
   Helper functions
   ========================================== */

export const toast = {
    success: (title: string, description?: string) => {
        // This will be used with the context
        return { title, description, variant: 'success' as const };
    },
    error: (title: string, description?: string) => {
        return { title, description, variant: 'error' as const };
    },
    warning: (title: string, description?: string) => {
        return { title, description, variant: 'warning' as const };
    },
    info: (title: string, description?: string) => {
        return { title, description, variant: 'info' as const };
    },
};

export default Toast;
