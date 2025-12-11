import React, { forwardRef } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import './Collapsible.css';

// Chevron Icon
const ChevronIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

/* ==========================================
   Collapsible Root
   ========================================== */

export interface CollapsibleProps
    extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {
    /** Visual variant */
    variant?: 'default' | 'minimal';
}

export const Collapsible = forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.Root>,
    CollapsibleProps
>(({ variant = 'default', className = '', ...props }, ref) => {
    const classNames = [
        'smt-collapsible',
        variant !== 'default' && `smt-collapsible--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <CollapsiblePrimitive.Root ref={ref} className={classNames} {...props} />
    );
});

Collapsible.displayName = 'Collapsible';

/* ==========================================
   Collapsible Trigger
   ========================================== */

export interface CollapsibleTriggerProps
    extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger> {
    /** Whether to show chevron icon */
    showIcon?: boolean;
}

export const CollapsibleTrigger = forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
    CollapsibleTriggerProps
>(({ showIcon = true, className = '', children, ...props }, ref) => (
    <CollapsiblePrimitive.Trigger
        ref={ref}
        className={`smt-collapsible-trigger ${className}`}
        {...props}
    >
        {children}
        {showIcon && (
            <span className="smt-collapsible-icon">
                <ChevronIcon />
            </span>
        )}
    </CollapsiblePrimitive.Trigger>
));

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

/* ==========================================
   Collapsible Content
   ========================================== */

export const CollapsibleContent = forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className = '', children, ...props }, ref) => (
    <CollapsiblePrimitive.Content
        ref={ref}
        className={`smt-collapsible-content ${className}`}
        {...props}
    >
        <div className="smt-collapsible-content-inner">{children}</div>
    </CollapsiblePrimitive.Content>
));

CollapsibleContent.displayName = 'CollapsibleContent';

export default Collapsible;
