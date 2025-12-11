import React, { forwardRef, createContext, useContext } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import './Drawer.css';

// Close Icon
const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

/* ==========================================
   Drawer Context
   ========================================== */

interface DrawerContextValue {
    position: 'left' | 'right' | 'top' | 'bottom';
    size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const DrawerContext = createContext<DrawerContextValue>({
    position: 'right',
    size: 'md',
});

/* ==========================================
   Drawer Root
   ========================================== */

export interface DrawerProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
    /** Position of the drawer */
    position?: 'left' | 'right' | 'top' | 'bottom';
    /** Size of the drawer */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Drawer: React.FC<DrawerProps> = ({
    position = 'right',
    size = 'md',
    children,
    ...props
}) => {
    return (
        <DrawerContext.Provider value={{ position, size }}>
            <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
        </DrawerContext.Provider>
    );
};

export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;

/* ==========================================
   Drawer Content
   ========================================== */

export interface DrawerContentProps
    extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    /** Title of the drawer */
    title?: string;
    /** Description of the drawer */
    description?: string;
    /** Whether to show close button */
    showClose?: boolean;
}

export const DrawerContent = forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    DrawerContentProps
>(({ title, description, showClose = true, className = '', children, ...props }, ref) => {
    const { position, size } = useContext(DrawerContext);

    const classNames = [
        'smt-drawer-content',
        `smt-drawer-content--${position}`,
        size !== 'md' && `smt-drawer-content--${size}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="smt-drawer-overlay" />
            <DialogPrimitive.Content ref={ref} className={classNames} {...props}>
                {position === 'bottom' && (
                    <div className="smt-drawer-handle">
                        <div className="smt-drawer-handle-bar" />
                    </div>
                )}
                {(title || showClose) && (
                    <div className="smt-drawer-header">
                        <div>
                            {title && (
                                <DialogPrimitive.Title className="smt-drawer-title">
                                    {title}
                                </DialogPrimitive.Title>
                            )}
                            {description && (
                                <DialogPrimitive.Description className="smt-drawer-description">
                                    {description}
                                </DialogPrimitive.Description>
                            )}
                        </div>
                        {showClose && (
                            <DialogPrimitive.Close className="smt-drawer-close">
                                <CloseIcon />
                            </DialogPrimitive.Close>
                        )}
                    </div>
                )}
                {children}
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    );
});

DrawerContent.displayName = 'DrawerContent';

/* ==========================================
   Drawer Body
   ========================================== */

export const DrawerBody = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
    <div ref={ref} className={`smt-drawer-body ${className}`} {...props} />
));

DrawerBody.displayName = 'DrawerBody';

/* ==========================================
   Drawer Footer
   ========================================== */

export const DrawerFooter = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
    <div ref={ref} className={`smt-drawer-footer ${className}`} {...props} />
));

DrawerFooter.displayName = 'DrawerFooter';

export default Drawer;
