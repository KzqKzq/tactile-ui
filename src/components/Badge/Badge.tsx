import React, { forwardRef } from 'react';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Visual variant */
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'outline-primary';
    /** Size of the badge */
    size?: 'sm' | 'md' | 'lg';
    /** Whether to show as a dot only */
    dot?: boolean;
    /** Whether to show pulsing animation */
    pulse?: boolean;
    /** Icon to display before text */
    icon?: React.ReactNode;
}

/**
 * Smartisan Skeuomorphic Badge
 * 
 * A label component for status, notifications, and tags
 * with gradient backgrounds and subtle glow effects.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    (
        {
            variant = 'default',
            size = 'md',
            dot = false,
            pulse = false,
            icon,
            className = '',
            children,
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-badge',
            `smt-badge--${variant}`,
            size !== 'md' && `smt-badge--${size}`,
            dot && 'smt-badge--dot',
            pulse && 'smt-badge--pulse',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <span ref={ref} className={classNames} {...props}>
                {!dot && icon && <span className="smt-badge__icon">{icon}</span>}
                {!dot && children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

/* ==========================================
   Badge Container (for positioned badges)
   ========================================== */

export interface BadgeContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The badge to position */
    badge: React.ReactNode;
    /** Position of the badge */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const BadgeContainer = forwardRef<HTMLDivElement, BadgeContainerProps>(
    ({ badge, position = 'top-right', className = '', children, ...props }, ref) => {
        return (
            <div ref={ref} className={`smt-badge-container ${className}`} {...props}>
                {children}
                {React.isValidElement(badge) &&
                    React.cloneElement(badge as React.ReactElement<BadgeProps>, {
                        className: `${(badge as React.ReactElement<BadgeProps>).props.className || ''} smt-badge--positioned`,
                    })}
            </div>
        );
    }
);

BadgeContainer.displayName = 'BadgeContainer';

export default Badge;
