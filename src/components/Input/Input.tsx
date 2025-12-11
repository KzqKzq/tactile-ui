import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Size of the input */
    size?: 'sm' | 'md' | 'lg';
    /** Visual state */
    state?: 'default' | 'error' | 'success';
    /** Label text above the input */
    label?: string;
    /** Helper text below the input */
    helperText?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Icon element on the left */
    iconLeft?: React.ReactNode;
    /** Icon element on the right */
    iconRight?: React.ReactNode;
    /** Click handler for right icon */
    onIconRightClick?: () => void;
}

/**
 * Smartisan Skeuomorphic Input
 * 
 * A beautiful text input with inset field effect,
 * paper-like texture, and glowing focus state.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            size = 'md',
            state = 'default',
            label,
            helperText,
            required,
            iconLeft,
            iconRight,
            onIconRightClick,
            className = '',
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

        const inputClassNames = [
            'smt-input',
            size !== 'md' && `smt-input--${size}`,
            state !== 'default' && `smt-input--${state}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const containerClassNames = [
            'smt-input-container',
            iconLeft && 'smt-input-container--with-icon-left',
            iconRight && 'smt-input-container--with-icon-right',
        ]
            .filter(Boolean)
            .join(' ');

        const helperClassNames = [
            'smt-input-helper',
            state === 'error' && 'smt-input-helper--error',
            state === 'success' && 'smt-input-helper--success',
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div className="smt-input-wrapper">
                {label && (
                    <label
                        htmlFor={inputId}
                        className={`smt-input-label ${required ? 'smt-input-label--required' : ''}`}
                    >
                        {label}
                    </label>
                )}
                <div className={containerClassNames}>
                    {iconLeft && (
                        <span className="smt-input-icon smt-input-icon--left">
                            {iconLeft}
                        </span>
                    )}
                    <input
                        ref={ref}
                        id={inputId}
                        className={inputClassNames}
                        {...props}
                    />
                    {iconRight && (
                        <span
                            className={`smt-input-icon smt-input-icon--right ${onIconRightClick ? 'smt-input-icon--clickable' : ''}`}
                            onClick={onIconRightClick}
                        >
                            {iconRight}
                        </span>
                    )}
                </div>
                {helperText && <span className={helperClassNames}>{helperText}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';

/* ==========================================
   Textarea Component
   ========================================== */

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Size of the textarea */
    size?: 'sm' | 'md' | 'lg';
    /** Visual state */
    state?: 'default' | 'error' | 'success';
    /** Label text above the textarea */
    label?: string;
    /** Helper text below the textarea */
    helperText?: string;
    /** Whether the field is required */
    required?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            size = 'md',
            state = 'default',
            label,
            helperText,
            required,
            className = '',
            id,
            ...props
        },
        ref
    ) => {
        const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

        const textareaClassNames = [
            'smt-input',
            'smt-textarea',
            size !== 'md' && `smt-input--${size}`,
            state !== 'default' && `smt-input--${state}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const helperClassNames = [
            'smt-input-helper',
            state === 'error' && 'smt-input-helper--error',
            state === 'success' && 'smt-input-helper--success',
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div className="smt-input-wrapper">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className={`smt-input-label ${required ? 'smt-input-label--required' : ''}`}
                    >
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={textareaId}
                    className={textareaClassNames}
                    {...props}
                />
                {helperText && <span className={helperClassNames}>{helperText}</span>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Input;
