import React, { forwardRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import './Radio.css';

/* ==========================================
   Radio Group
   ========================================== */

export interface RadioGroupProps
    extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
    /** Layout orientation */
    orientation?: 'vertical' | 'horizontal';
}

export const RadioGroup = forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    RadioGroupProps
>(({ orientation = 'vertical', className = '', ...props }, ref) => {
    const classNames = [
        'smt-radio-group',
        orientation === 'horizontal' && 'smt-radio-group--horizontal',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <RadioGroupPrimitive.Root
            ref={ref}
            className={classNames}
            {...props}
        />
    );
});

RadioGroup.displayName = 'RadioGroup';

/* ==========================================
   Radio Item
   ========================================== */

export interface RadioItemProps
    extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    /** Size of the radio button */
    size?: 'sm' | 'md' | 'lg';
    /** Optional label text */
    label?: string;
    /** Optional description text */
    description?: string;
}

export const RadioItem = forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    RadioItemProps
>(
    (
        { size = 'md', label, description, className = '', disabled, id, ...props },
        ref
    ) => {
        const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

        const classNames = [
            'smt-radio',
            size !== 'md' && `smt-radio--${size}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const radioElement = (
            <RadioGroupPrimitive.Item
                ref={ref}
                id={radioId}
                className={classNames}
                disabled={disabled}
                {...props}
            >
                <RadioGroupPrimitive.Indicator className="smt-radio-indicator" />
            </RadioGroupPrimitive.Item>
        );

        if (label) {
            return (
                <div className="smt-radio-wrapper">
                    {radioElement}
                    <div>
                        <label
                            htmlFor={radioId}
                            className={`smt-radio-label ${disabled ? 'smt-radio-label--disabled' : ''}`}
                        >
                            {label}
                        </label>
                        {description && (
                            <p className="smt-radio-description">{description}</p>
                        )}
                    </div>
                </div>
            );
        }

        return radioElement;
    }
);

RadioItem.displayName = 'RadioItem';

export default RadioGroup;
