import React, { forwardRef } from 'react';
import './Alert.css';

// Icons
const InfoIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
);

const SuccessIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

const WarningIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
);

const ErrorIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const iconMap = {
    info: InfoIcon,
    success: SuccessIcon,
    warning: WarningIcon,
    error: ErrorIcon,
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Type/variant of the alert */
    variant?: 'info' | 'success' | 'warning' | 'error';
    /** Whether to use solid background style */
    solid?: boolean;
    /** Title of the alert */
    title?: string;
    /** Whether to show close button */
    closable?: boolean;
    /** Callback when close button is clicked */
    onClose?: () => void;
    /** Custom icon */
    icon?: React.ReactNode;
    /** Actions to display at the bottom */
    actions?: React.ReactNode;
}

/**
 * Smartisan Skeuomorphic Alert
 * 
 * A notification/message component with gradient backgrounds,
 * icons, and optional close button.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
    (
        {
            variant = 'info',
            solid = false,
            title,
            closable = false,
            onClose,
            icon,
            actions,
            className = '',
            children,
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-alert',
            solid ? `smt-alert--solid-${variant}` : `smt-alert--${variant}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const IconComponent = iconMap[variant];

        return (
            <div ref={ref} className={classNames} role="alert" {...props}>
                <span className="smt-alert-icon">
                    {icon || <IconComponent />}
                </span>
                <div className="smt-alert-content">
                    {title && <p className="smt-alert-title">{title}</p>}
                    {children && <p className="smt-alert-description">{children}</p>}
                    {actions && <div className="smt-alert-actions">{actions}</div>}
                </div>
                {closable && (
                    <button
                        type="button"
                        className="smt-alert-close"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <CloseIcon />
                    </button>
                )}
            </div>
        );
    }
);

Alert.displayName = 'Alert';

export default Alert;
