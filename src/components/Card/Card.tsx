import React, { forwardRef } from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Visual variant */
    variant?: 'raised' | 'inset' | 'flat' | 'glass';
    /** Size of the card */
    size?: 'sm' | 'md' | 'lg';
    /** Whether the card is interactive (clickable) */
    interactive?: boolean;
    /** Whether to apply texture overlay */
    textured?: boolean;
    /** Whether to use compact padding */
    compact?: boolean;
}

/**
 * Smartisan Skeuomorphic Card
 * 
 * A container component with raised, inset, flat, and
 * glass morphism variants.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            variant = 'raised',
            size = 'md',
            interactive = false,
            textured = false,
            compact = false,
            className = '',
            children,
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-card',
            `smt-card--${variant}`,
            size !== 'md' && `smt-card--${size}`,
            interactive && 'smt-card--interactive',
            textured && 'smt-card--textured',
            compact && 'smt-card--compact',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div ref={ref} className={classNames} {...props}>
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

/* Card Header */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    actions?: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ title, subtitle, actions, className = '', children, ...props }, ref) => {
        return (
            <div ref={ref} className={`smt-card-header ${className}`} {...props}>
                {(title || subtitle) ? (
                    <div className="smt-card-header-content">
                        {title && <h3 className="smt-card-title">{title}</h3>}
                        {subtitle && <p className="smt-card-subtitle">{subtitle}</p>}
                    </div>
                ) : children}
                {actions && <div className="smt-card-header-actions">{actions}</div>}
            </div>
        );
    }
);

CardHeader.displayName = 'CardHeader';

/* Card Body */
export const CardBody = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
    <div ref={ref} className={`smt-card-body ${className}`} {...props} />
));

CardBody.displayName = 'CardBody';

/* Card Footer */
export const CardFooter = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
    <div ref={ref} className={`smt-card-footer ${className}`} {...props} />
));

CardFooter.displayName = 'CardFooter';

/* Card Media */
export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    position?: 'top' | 'bottom';
}

export const CardMedia = forwardRef<HTMLDivElement, CardMediaProps>(
    ({ src, alt = '', position = 'top', className = '', children, ...props }, ref) => {
        const classNames = [
            'smt-card-media',
            `smt-card-media--${position}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div ref={ref} className={classNames} {...props}>
                {src ? <img src={src} alt={alt} /> : children}
            </div>
        );
    }
);

CardMedia.displayName = 'CardMedia';

export default Card;
