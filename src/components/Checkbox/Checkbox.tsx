import React, { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import './Checkbox.css';

// Checkmark SVG Icon
const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

// Minus Icon for indeterminate
const MinusIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

export interface CheckboxProps
    extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    /** Size of the checkbox */
    size?: 'sm' | 'md' | 'lg';
    /** Optional label text */
    label?: string;
    /** Optional description text */
    description?: string;
}

/**
 * Smartisan Skeuomorphic Checkbox
 * 
 * A beautiful checkbox with inset unchecked state,
 * raised checked state with accent glow, and embossed checkmark.
 */
export const Checkbox = forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(
    (
        { size = 'md', label, description, className = '', disabled, id, ...props },
        ref
    ) => {
        const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

        const classNames = [
            'smt-checkbox',
            size !== 'md' && `smt-checkbox--${size}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const checkboxElement = (
            <CheckboxPrimitive.Root
                ref={ref}
                id={checkboxId}
                className={classNames}
                disabled={disabled}
                {...props}
            >
                <CheckboxPrimitive.Indicator className="smt-checkbox-indicator">
                    {props.checked === 'indeterminate' ? <MinusIcon /> : <CheckIcon />}
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
        );

        if (label) {
            return (
                <div className="smt-checkbox-wrapper">
                    {checkboxElement}
                    <div>
                        <label
                            htmlFor={checkboxId}
                            className={`smt-checkbox-label ${disabled ? 'smt-checkbox-label--disabled' : ''}`}
                        >
                            {label}
                        </label>
                        {description && (
                            <p className="smt-checkbox-description">{description}</p>
                        )}
                    </div>
                </div>
            );
        }

        return checkboxElement;
    }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
