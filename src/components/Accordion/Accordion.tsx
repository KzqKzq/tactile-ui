import React, { forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import './Accordion.css';

// Chevron Icon
const ChevronIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

/* ==========================================
   Accordion Root
   ========================================== */

type AccordionSingleProps = {
    type: 'single';
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    collapsible?: boolean;
};

type AccordionMultipleProps = {
    type: 'multiple';
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
};

export type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) & {
    /** Visual variant */
    variant?: 'default' | 'separated' | 'flush';
    /** Size of the accordion */
    size?: 'sm' | 'md' | 'lg';
    /** Additional class name */
    className?: string;
    /** Children elements */
    children?: React.ReactNode;
    /** Disabled state */
    disabled?: boolean;
};

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    ({ variant = 'default', size = 'md', className = '', ...props }, ref) => {
        const classNames = [
            'smt-accordion',
            variant !== 'default' && `smt-accordion--${variant}`,
            size !== 'md' && `smt-accordion--${size}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <AccordionPrimitive.Root
                ref={ref}
                className={classNames}
                {...(props as any)}
            />
        );
    }
);

Accordion.displayName = 'Accordion';

/* ==========================================
   Accordion Item
   ========================================== */

export const AccordionItem = forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className = '', ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={`smt-accordion-item ${className}`}
        {...props}
    />
));

AccordionItem.displayName = 'AccordionItem';

/* ==========================================
   Accordion Trigger (Header)
   ========================================== */

export interface AccordionTriggerProps
    extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
    /** Icon to display before the title */
    icon?: React.ReactNode;
}

export const AccordionTrigger = forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    AccordionTriggerProps
>(({ icon, className = '', children, ...props }, ref) => (
    <AccordionPrimitive.Header className="smt-accordion-header">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={`smt-accordion-trigger ${className}`}
            {...props}
        >
            <div className="smt-accordion-trigger-content">
                {icon && <span className="smt-accordion-trigger-icon">{icon}</span>}
                {children}
            </div>
            <span className="smt-accordion-chevron">
                <ChevronIcon />
            </span>
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

/* ==========================================
   Accordion Content
   ========================================== */

export const AccordionContent = forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className = '', children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={`smt-accordion-content ${className}`}
        {...props}
    >
        <div className="smt-accordion-content-inner">{children}</div>
    </AccordionPrimitive.Content>
));

AccordionContent.displayName = 'AccordionContent';

export default Accordion;
