import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
    /** Size of the spinner */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color variant */
    variant?: 'default' | 'primary' | 'white' | 'success';
    /** Stroke width of the spinner circle */
    strokeWidth?: number;
    /** Additional class name */
    className?: string;
}

/**
 * Smartisan Skeuomorphic Spinner
 * 
 * A loading spinner with smooth rotation animation.
 */
export const Spinner: React.FC<SpinnerProps> = ({
    size = 'md',
    variant = 'default',
    strokeWidth = 3,
    className = '',
}) => {
    const sizeMap = {
        xs: 16,
        sm: 20,
        md: 32,
        lg: 48,
        xl: 64,
    };

    const svgSize = sizeMap[size];
    const radius = (svgSize - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;

    return (
        <div className={`smt-spinner smt-spinner--${size} smt-spinner--${variant} ${className}`}>
            <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
                <circle
                    className="smt-spinner-track"
                    cx={svgSize / 2}
                    cy={svgSize / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="smt-spinner-indicator"
                    cx={svgSize / 2}
                    cy={svgSize / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
                />
            </svg>
        </div>
    );
};

/* ==========================================
   Dots Spinner
   ========================================== */

export interface DotsSpinnerProps {
    /** Size of the dots */
    size?: 'sm' | 'md' | 'lg';
    /** Additional class name */
    className?: string;
}

export const DotsSpinner: React.FC<DotsSpinnerProps> = ({
    size = 'md',
    className = '',
}) => {
    return (
        <div className={`smt-spinner-dots ${size !== 'md' ? `smt-spinner-dots--${size}` : ''} ${className}`}>
            <span className="smt-spinner-dot" />
            <span className="smt-spinner-dot" />
            <span className="smt-spinner-dot" />
        </div>
    );
};

/* ==========================================
   Full-page Spinner Overlay
   ========================================== */

export interface SpinnerOverlayProps {
    /** Whether the overlay is visible */
    visible?: boolean;
    /** Loading text */
    text?: string;
    /** Spinner size */
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SpinnerOverlay: React.FC<SpinnerOverlayProps> = ({
    visible = true,
    text,
    size = 'lg',
}) => {
    if (!visible) return null;

    return (
        <div className="smt-spinner-overlay">
            <Spinner size={size} />
            {text && <span className="smt-spinner-overlay-text">{text}</span>}
        </div>
    );
};

/* ==========================================
   Inline Spinner with Label
   ========================================== */

export interface InlineSpinnerProps extends SpinnerProps {
    /** Label text */
    label?: string;
}

export const InlineSpinner: React.FC<InlineSpinnerProps> = ({
    label,
    size = 'sm',
    ...props
}) => {
    return (
        <div className="smt-spinner-inline">
            <Spinner size={size} {...props} />
            {label && <span className="smt-spinner-label">{label}</span>}
        </div>
    );
};

export default Spinner;
