import React, { forwardRef } from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import './AspectRatio.css';

export interface AspectRatioProps
    extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
    /** Whether to apply rounded corners */
    rounded?: boolean | 'lg';
    /** Whether to apply shadow */
    shadow?: boolean;
    /** Whether to apply border */
    border?: boolean;
}

export const AspectRatio = forwardRef<
    React.ElementRef<typeof AspectRatioPrimitive.Root>,
    AspectRatioProps
>(({ ratio = 16 / 9, rounded, shadow, border, className = '', ...props }, ref) => {
    const classNames = [
        'smt-aspect-ratio',
        rounded === true && 'smt-aspect-ratio--rounded',
        rounded === 'lg' && 'smt-aspect-ratio--rounded-lg',
        shadow && 'smt-aspect-ratio--shadow',
        border && 'smt-aspect-ratio--border',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={classNames}>
            <AspectRatioPrimitive.Root ref={ref} ratio={ratio} {...props} />
        </div>
    );
});

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
