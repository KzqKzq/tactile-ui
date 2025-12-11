import React, { forwardRef } from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style variant */
    variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'danger';
    /** Size of the button */
    size?: 'sm' | 'md' | 'lg';
    /** Whether the button is in a loading state */
    loading?: boolean;
    /** Icon element to display before the label */
    iconLeft?: React.ReactNode;
    /** Icon element to display after the label */
    iconRight?: React.ReactNode;
    /** Whether the button only contains an icon */
    iconOnly?: boolean;
}

/**
 * Smartisan Skeuomorphic Button
 * 
 * A beautiful button component with 3D pressed effects,
 * gradient surfaces, and multiple variants.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'default',
            size = 'md',
            loading = false,
            iconLeft,
            iconRight,
            iconOnly = false,
            className = '',
            disabled,
            children,
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-button',
            variant !== 'default' && `smt-button--${variant}`,
            size !== 'md' && `smt-button--${size}`,
            loading && 'smt-button--loading',
            iconOnly && 'smt-button--icon-only',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <button
                ref={ref}
                className={classNames}
                disabled={disabled || loading}
                {...props}
            >
                {loading && <span className="smt-button__spinner" />}
                {iconLeft && <span className="smt-button__icon">{iconLeft}</span>}
                {children}
                {iconRight && <span className="smt-button__icon">{iconRight}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
