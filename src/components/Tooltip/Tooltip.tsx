import React, { forwardRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import './Tooltip.css';

/* ==========================================
   Tooltip Provider
   ========================================== */

export const TooltipProvider = TooltipPrimitive.Provider;

/* ==========================================
   Tooltip Root
   ========================================== */

export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

/* ==========================================
   Tooltip Content
   ========================================== */

export interface TooltipContentProps
    extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
    /** Visual variant */
    variant?: 'default' | 'dark' | 'accent';
    /** Size of the tooltip */
    size?: 'sm' | 'md' | 'lg';
    /** Whether to show arrow */
    showArrow?: boolean;
}

export const TooltipContent = forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    TooltipContentProps
>(
    (
        {
            variant = 'default',
            size = 'md',
            showArrow = true,
            className = '',
            sideOffset = 6,
            children,
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-tooltip-content',
            variant !== 'default' && `smt-tooltip-content--${variant}`,
            size !== 'md' && `smt-tooltip-content--${size}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                    ref={ref}
                    className={classNames}
                    sideOffset={sideOffset}
                    {...props}
                >
                    {children}
                    {showArrow && (
                        <TooltipPrimitive.Arrow className="smt-tooltip-arrow" />
                    )}
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
        );
    }
);

TooltipContent.displayName = 'TooltipContent';

/* ==========================================
   Simple Tooltip Wrapper
   ========================================== */

export interface SimpleTooltipProps {
    /** Content to display in the tooltip */
    content: React.ReactNode;
    /** Visual variant */
    variant?: 'default' | 'dark' | 'accent';
    /** Size of the tooltip */
    size?: 'sm' | 'md' | 'lg';
    /** Side to display the tooltip */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** The trigger element */
    children: React.ReactNode;
    /** Delay before showing */
    delayDuration?: number;
}

export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
    content,
    variant = 'default',
    size = 'md',
    side = 'top',
    children,
    delayDuration = 200,
}) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={delayDuration}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent variant={variant} size={size} side={side}>
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default Tooltip;
