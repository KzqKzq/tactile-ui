import React, { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import './Select.css';

// Icons
const ChevronIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

/* ==========================================
   Select Root
   ========================================== */

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectGroup = SelectPrimitive.Group;

/* ==========================================
   Select Trigger
   ========================================== */

export interface SelectTriggerProps
    extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
    /** Size of the select */
    size?: 'sm' | 'md' | 'lg';
    /** Label text */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Placeholder text */
    placeholder?: string;
}

export const SelectTrigger = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    SelectTriggerProps
>(({ size = 'md', label, required, placeholder, className = '', children, ...props }, ref) => {
    const classNames = [
        'smt-select-trigger',
        size !== 'md' && `smt-select-trigger--${size}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const trigger = (
        <SelectPrimitive.Trigger ref={ref} className={classNames} {...props}>
            <SelectPrimitive.Value className="smt-select-value" placeholder={placeholder}>
                {children}
            </SelectPrimitive.Value>
            <SelectPrimitive.Icon className="smt-select-icon">
                <ChevronIcon />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );

    if (label) {
        return (
            <div className="smt-select-wrapper">
                <label className={`smt-select-label-text ${required ? 'smt-select-label-text--required' : ''}`}>
                    {label}
                </label>
                {trigger}
            </div>
        );
    }

    return trigger;
});

SelectTrigger.displayName = 'SelectTrigger';

/* ==========================================
   Select Content
   ========================================== */

export interface SelectContentProps
    extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
    /** Position of the content */
    position?: 'item-aligned' | 'popper';
}

export const SelectContent = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    SelectContentProps
>(({ position = 'popper', className = '', children, ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={`smt-select-content ${className}`}
            position={position}
            sideOffset={4}
            {...props}
        >
            <SelectPrimitive.ScrollUpButton className="smt-select-scroll-button">
                <ChevronIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="smt-select-viewport">
                {children}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="smt-select-scroll-button smt-select-scroll-button--down">
                <ChevronIcon />
            </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));

SelectContent.displayName = 'SelectContent';

/* ==========================================
   Select Item
   ========================================== */

export const SelectItem = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className = '', children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={`smt-select-item ${className}`}
        {...props}
    >
        <SelectPrimitive.ItemIndicator className="smt-select-item-indicator">
            <CheckIcon />
        </SelectPrimitive.ItemIndicator>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));

SelectItem.displayName = 'SelectItem';

/* ==========================================
   Select Label & Separator
   ========================================== */

export const SelectLabel = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className = '', ...props }, ref) => (
    <SelectPrimitive.Label
        ref={ref}
        className={`smt-select-label ${className}`}
        {...props}
    />
));

SelectLabel.displayName = 'SelectLabel';

export const SelectSeparator = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className = '', ...props }, ref) => (
    <SelectPrimitive.Separator
        ref={ref}
        className={`smt-select-separator ${className}`}
        {...props}
    />
));

SelectSeparator.displayName = 'SelectSeparator';

export default Select;
