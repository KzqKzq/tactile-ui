import React, { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import './Tabs.css';

/* ==========================================
   Tabs Root
   ========================================== */

export interface TabsProps
    extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
    /** Visual variant */
    variant?: 'default' | 'pills' | 'underline';
    /** Size of the tabs */
    size?: 'sm' | 'md' | 'lg';
    /** Orientation */
    orientation?: 'horizontal' | 'vertical';
}

export const Tabs = forwardRef<
    React.ElementRef<typeof TabsPrimitive.Root>,
    TabsProps
>(
    (
        {
            variant = 'default',
            size = 'md',
            orientation = 'horizontal',
            className = '',
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-tabs',
            variant !== 'default' && `smt-tabs--${variant}`,
            size !== 'md' && `smt-tabs--${size}`,
            orientation === 'vertical' && 'smt-tabs--vertical',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <TabsPrimitive.Root
                ref={ref}
                className={classNames}
                orientation={orientation}
                {...props}
            />
        );
    }
);

Tabs.displayName = 'Tabs';

/* ==========================================
   Tabs List
   ========================================== */

export const TabsList = forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className = '', ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={`smt-tabs-list ${className}`}
        {...props}
    />
));

TabsList.displayName = 'TabsList';

/* ==========================================
   Tabs Trigger
   ========================================== */

export interface TabsTriggerProps
    extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
    /** Icon to display before the label */
    icon?: React.ReactNode;
}

export const TabsTrigger = forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    TabsTriggerProps
>(({ icon, className = '', children, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={`smt-tabs-trigger ${className}`}
        {...props}
    >
        {icon && <span className="smt-tabs-trigger-icon">{icon}</span>}
        {children}
    </TabsPrimitive.Trigger>
));

TabsTrigger.displayName = 'TabsTrigger';

/* ==========================================
   Tabs Content
   ========================================== */

export const TabsContent = forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className = '', ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={`smt-tabs-content ${className}`}
        {...props}
    />
));

TabsContent.displayName = 'TabsContent';

export default Tabs;
