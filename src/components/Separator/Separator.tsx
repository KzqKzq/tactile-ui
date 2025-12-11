import React, { forwardRef } from 'react';
import './Separator.css';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Orientation of the separator */
    orientation?: 'horizontal' | 'vertical';
    /** Visual variant */
    variant?: 'default' | 'solid' | 'dashed' | 'thick';
    /** Spacing around the separator */
    spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    /** Decorative or semantic */
    decorative?: boolean;
    /** Label to display in the middle */
    label?: string;
}

/**
 * Smartisan Skeuomorphic Separator
 * 
 * A visual divider with 3D groove effect,
 * supporting horizontal and vertical orientations.
 */
export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
    (
        {
            orientation = 'horizontal',
            variant = 'default',
            spacing = 'none',
            decorative = true,
            label,
            className = '',
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-separator',
            variant !== 'default' && `smt-separator--${variant}`,
            spacing !== 'none' && `smt-separator-spacing-${spacing}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const separatorElement = (
            <div
                ref={ref}
                className={classNames}
                data-orientation={orientation}
                role={decorative ? 'none' : 'separator'}
                aria-orientation={decorative ? undefined : orientation}
                {...props}
            />
        );

        if (label && orientation === 'horizontal') {
            return (
                <div className="smt-separator-wrapper">
                    {separatorElement}
                    <span className="smt-separator-label">{label}</span>
                    <div
                        className={classNames}
                        data-orientation={orientation}
                        role="none"
                    />
                </div>
            );
        }

        return separatorElement;
    }
);

Separator.displayName = 'Separator';

export default Separator;
