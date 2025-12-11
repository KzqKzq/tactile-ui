import React, { forwardRef } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import './ScrollArea.css';

export interface ScrollAreaProps
    extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
    /** Orientation of scrollbars to show */
    orientation?: 'vertical' | 'horizontal' | 'both';
}

export const ScrollArea = forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.Root>,
    ScrollAreaProps
>(({ orientation = 'vertical', className = '', children, ...props }, ref) => (
    <ScrollAreaPrimitive.Root
        ref={ref}
        className={`smt-scroll-area ${className}`}
        {...props}
    >
        <ScrollAreaPrimitive.Viewport className="smt-scroll-area-viewport">
            {children}
        </ScrollAreaPrimitive.Viewport>
        {(orientation === 'vertical' || orientation === 'both') && (
            <ScrollAreaPrimitive.Scrollbar
                className="smt-scrollbar"
                orientation="vertical"
            >
                <ScrollAreaPrimitive.Thumb className="smt-scrollbar-thumb" />
            </ScrollAreaPrimitive.Scrollbar>
        )}
        {(orientation === 'horizontal' || orientation === 'both') && (
            <ScrollAreaPrimitive.Scrollbar
                className="smt-scrollbar"
                orientation="horizontal"
            >
                <ScrollAreaPrimitive.Thumb className="smt-scrollbar-thumb" />
            </ScrollAreaPrimitive.Scrollbar>
        )}
        <ScrollAreaPrimitive.Corner className="smt-scroll-area-corner" />
    </ScrollAreaPrimitive.Root>
));

ScrollArea.displayName = 'ScrollArea';

export default ScrollArea;
