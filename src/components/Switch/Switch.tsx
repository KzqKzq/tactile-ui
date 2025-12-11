import React, { forwardRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import './Switch.css';

export interface SwitchProps
    extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
    /** Size of the switch */
    size?: 'sm' | 'md' | 'lg';
    /** Optional label text */
    label?: string;
}

/**
 * Smartisan Skeuomorphic Switch
 * 
 * A beautiful toggle switch with realistic on/off states,
 * LED-style glow when active, and glossy thumb.
 */
export const Switch = forwardRef<
    React.ElementRef<typeof SwitchPrimitive.Root>,
    SwitchProps
>(({ size = 'md', label, className = '', disabled, id, ...props }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    const classNames = [
        'smt-switch',
        size !== 'md' && `smt-switch--${size}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const switchElement = (
        <SwitchPrimitive.Root
            ref={ref}
            id={switchId}
            className={classNames}
            disabled={disabled}
            {...props}
        >
            <SwitchPrimitive.Thumb className="smt-switch-thumb" />
        </SwitchPrimitive.Root>
    );

    if (label) {
        return (
            <div className="smt-switch-wrapper">
                {switchElement}
                <label
                    htmlFor={switchId}
                    className={`smt-switch-label ${disabled ? 'smt-switch-label--disabled' : ''}`}
                >
                    {label}
                </label>
            </div>
        );
    }

    return switchElement;
});

Switch.displayName = 'Switch';

export default Switch;
