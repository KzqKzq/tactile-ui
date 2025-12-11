import React, { forwardRef } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import './Slider.css';

export interface SliderProps
    extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    /** Size of the slider */
    size?: 'sm' | 'md' | 'lg';
    /** Visual variant */
    variant?: 'default' | 'success';
    /** Optional label text */
    label?: string;
    /** Whether to show the current value */
    showValue?: boolean;
    /** Format function for the displayed value */
    formatValue?: (value: number) => string;
}

/**
 * Smartisan Skeuomorphic Slider
 * 
 * A beautiful range slider with metal track,
 * gradient fill, and 3D metallic thumb knob.
 */
export const Slider = forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    SliderProps
>(
    (
        {
            size = 'md',
            variant = 'default',
            label,
            showValue = false,
            formatValue = (v) => String(v),
            className = '',
            value,
            defaultValue,
            ...props
        },
        ref
    ) => {
        const [internalValue, setInternalValue] = React.useState(
            defaultValue || [50]
        );
        const displayValue = value || internalValue;

        const classNames = [
            'smt-slider',
            size !== 'md' && `smt-slider--${size}`,
            variant !== 'default' && `smt-slider--${variant}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const sliderElement = (
            <SliderPrimitive.Root
                ref={ref}
                className={classNames}
                value={value}
                defaultValue={defaultValue}
                onValueChange={(newValue) => {
                    setInternalValue(newValue);
                    props.onValueChange?.(newValue);
                }}
                {...props}
            >
                <SliderPrimitive.Track className="smt-slider-track">
                    <SliderPrimitive.Range className="smt-slider-range" />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className="smt-slider-thumb" />
            </SliderPrimitive.Root>
        );

        if (label || showValue) {
            return (
                <div className="smt-slider-wrapper">
                    {(label || showValue) && (
                        <div className="smt-slider-header">
                            {label && <span className="smt-slider-label">{label}</span>}
                            {showValue && (
                                <span className="smt-slider-value">
                                    {formatValue(displayValue[0])}
                                </span>
                            )}
                        </div>
                    )}
                    {sliderElement}
                </div>
            );
        }

        return sliderElement;
    }
);

Slider.displayName = 'Slider';

export default Slider;
