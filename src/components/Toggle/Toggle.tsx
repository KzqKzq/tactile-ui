import React, { forwardRef, useState } from 'react';
import './Toggle.css';

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    /** Size of the toggle */
    size?: 'sm' | 'md' | 'lg';
    /** Whether the toggle is pressed */
    pressed?: boolean;
    /** Default pressed state */
    defaultPressed?: boolean;
    /** Callback when pressed state changes */
    onPressedChange?: (pressed: boolean) => void;
    /** Icon to display */
    icon?: React.ReactNode;
    /** Label text */
    label?: string;
}

/**
 * Smartisan Skeuomorphic Toggle
 * 
 * A two-state button that can be either on or off,
 * with 3D pressed effects.
 */
export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
    (
        {
            size = 'md',
            pressed,
            defaultPressed = false,
            onPressedChange,
            icon,
            label,
            className = '',
            disabled,
            onClick,
            ...props
        },
        ref
    ) => {
        const [internalPressed, setInternalPressed] = useState(defaultPressed);
        const isPressed = pressed !== undefined ? pressed : internalPressed;

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!disabled) {
                const newPressed = !isPressed;
                setInternalPressed(newPressed);
                onPressedChange?.(newPressed);
            }
            onClick?.(e);
        };

        const classNames = [
            'smt-toggle',
            size !== 'md' && `smt-toggle--${size}`,
            label && 'smt-toggle-with-label',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <button
                ref={ref}
                type="button"
                className={classNames}
                data-state={isPressed ? 'on' : 'off'}
                aria-pressed={isPressed}
                disabled={disabled}
                onClick={handleClick}
                {...props}
            >
                {icon && <span className="smt-toggle-icon">{icon}</span>}
                {label && <span className="smt-toggle-label">{label}</span>}
            </button>
        );
    }
);

Toggle.displayName = 'Toggle';

/* ==========================================
   Toggle Group
   ========================================== */

export interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Type of selection */
    type?: 'single' | 'multiple';
    /** Value for controlled component */
    value?: string | string[];
    /** Default value */
    defaultValue?: string | string[];
    /** Callback when value changes */
    onValueChange?: (value: string | string[]) => void;
}

interface ToggleGroupContextValue {
    type: 'single' | 'multiple';
    value: string[];
    onItemClick: (itemValue: string) => void;
}

const ToggleGroupContext = React.createContext<ToggleGroupContextValue | null>(null);

export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
    (
        {
            type = 'single',
            value,
            defaultValue,
            onValueChange,
            className = '',
            children,
            ...props
        },
        ref
    ) => {
        const [internalValue, setInternalValue] = useState<string[]>(() => {
            if (defaultValue) {
                return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
            }
            return [];
        });

        const currentValue = value !== undefined
            ? (Array.isArray(value) ? value : [value])
            : internalValue;

        const onItemClick = (itemValue: string) => {
            let newValue: string[];

            if (type === 'single') {
                newValue = currentValue.includes(itemValue) ? [] : [itemValue];
            } else {
                newValue = currentValue.includes(itemValue)
                    ? currentValue.filter(v => v !== itemValue)
                    : [...currentValue, itemValue];
            }

            setInternalValue(newValue);
            onValueChange?.(type === 'single' ? newValue[0] || '' : newValue);
        };

        return (
            <ToggleGroupContext.Provider value={{ type, value: currentValue, onItemClick }}>
                <div
                    ref={ref}
                    className={`smt-toggle-group ${className}`}
                    role="group"
                    {...props}
                >
                    {children}
                </div>
            </ToggleGroupContext.Provider>
        );
    }
);

ToggleGroup.displayName = 'ToggleGroup';

/* ==========================================
   Toggle Group Item
   ========================================== */

export interface ToggleGroupItemProps extends Omit<ToggleProps, 'pressed' | 'defaultPressed' | 'onPressedChange'> {
    /** Unique value for this item */
    value: string;
}

export const ToggleGroupItem = forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
    ({ value, onClick, ...props }, ref) => {
        const context = React.useContext(ToggleGroupContext);

        if (!context) {
            throw new Error('ToggleGroupItem must be used within a ToggleGroup');
        }

        const isPressed = context.value.includes(value);

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            context.onItemClick(value);
            onClick?.(e);
        };

        return (
            <Toggle
                ref={ref}
                pressed={isPressed}
                onClick={handleClick}
                {...props}
            />
        );
    }
);

ToggleGroupItem.displayName = 'ToggleGroupItem';

export default Toggle;
