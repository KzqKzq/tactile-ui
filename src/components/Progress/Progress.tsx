import React, { forwardRef } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import './Progress.css';

export interface ProgressProps
    extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    /** Current value (0-100) */
    value?: number;
    /** Size of the progress bar */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Visual variant */
    variant?: 'default' | 'success' | 'warning' | 'info';
    /** Whether to show indeterminate animation */
    indeterminate?: boolean;
    /** Label text */
    label?: string;
    /** Whether to show the value percentage */
    showValue?: boolean;
}

/**
 * Smartisan Skeuomorphic Progress
 * 
 * A beautiful progress bar with recessed track,
 * glossy indicator, and shimmer animation.
 */
export const Progress = forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    ProgressProps
>(
    (
        {
            value = 0,
            size = 'md',
            variant = 'default',
            indeterminate = false,
            label,
            showValue = false,
            className = '',
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-progress',
            size !== 'md' && `smt-progress--${size}`,
            variant !== 'default' && `smt-progress--${variant}`,
            indeterminate && 'smt-progress--indeterminate',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const progressBar = (
            <ProgressPrimitive.Root
                ref={ref}
                className={classNames}
                value={indeterminate ? undefined : value}
                {...props}
            >
                <ProgressPrimitive.Indicator
                    className="smt-progress-indicator"
                    style={{ width: indeterminate ? undefined : `${value}%` }}
                />
            </ProgressPrimitive.Root>
        );

        if (label || showValue) {
            return (
                <div className="smt-progress-wrapper">
                    {(label || showValue) && (
                        <div className="smt-progress-header">
                            {label && <span className="smt-progress-label">{label}</span>}
                            {showValue && !indeterminate && (
                                <span className="smt-progress-value">{Math.round(value)}%</span>
                            )}
                        </div>
                    )}
                    {progressBar}
                </div>
            );
        }

        return progressBar;
    }
);

Progress.displayName = 'Progress';

/* ==========================================
   Circular Progress
   ========================================== */

export interface CircularProgressProps {
    /** Current value (0-100) */
    value?: number;
    /** Size of the circle in pixels */
    size?: number;
    /** Stroke width */
    strokeWidth?: number;
    /** Whether to show the value */
    showValue?: boolean;
    /** Additional class name */
    className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
    value = 0,
    size = 80,
    strokeWidth = 8,
    showValue = true,
    className = '',
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div
            className={`smt-progress-circular ${className}`}
            style={{ width: size, height: size }}
        >
            <svg width={size} height={size}>
                <circle
                    className="smt-progress-circular-track"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                />
                <circle
                    className="smt-progress-circular-indicator"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            {showValue && (
                <span className="smt-progress-circular-value">
                    {Math.round(value)}%
                </span>
            )}
        </div>
    );
};

export default Progress;
