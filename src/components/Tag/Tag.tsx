import React, { forwardRef } from 'react';
import './Tag.css';

// Icons
const HashIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="10" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="14" y2="21" />
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Visual variant */
    variant?: 'default' | 'primary' | 'solid';
    /** Size of the tag */
    size?: 'sm' | 'md' | 'lg';
    /** Whether to show hash icon */
    showIcon?: boolean;
    /** Count to display */
    count?: number;
    /** Whether the tag is removable */
    removable?: boolean;
    /** Callback when remove is clicked */
    onRemove?: () => void;
    /** Link href (renders as anchor) */
    href?: string;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
    (
        {
            variant = 'default',
            size = 'md',
            showIcon = false,
            count,
            removable = false,
            onRemove,
            href,
            className = '',
            children,
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-tag',
            variant !== 'default' && `smt-tag--${variant}`,
            size !== 'md' && `smt-tag--${size}`,
            removable && 'smt-tag--removable',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const content = (
            <>
                {showIcon && (
                    <span className="smt-tag-icon">
                        <HashIcon />
                    </span>
                )}
                {children}
                {count !== undefined && (
                    <span className="smt-tag-count">({count})</span>
                )}
                {removable && (
                    <button
                        type="button"
                        className="smt-tag-remove"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove?.();
                        }}
                    >
                        <CloseIcon />
                    </button>
                )}
            </>
        );

        if (href) {
            return (
                <a href={href} className={classNames} {...(props as any)}>
                    {content}
                </a>
            );
        }

        return (
            <span ref={ref} className={classNames} {...props}>
                {content}
            </span>
        );
    }
);

Tag.displayName = 'Tag';

/* ==========================================
   Tag Group
   ========================================== */

export interface TagGroupProps extends React.HTMLAttributes<HTMLDivElement> { }

export const TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`smt-tag-group ${className}`} {...props} />
    )
);

TagGroup.displayName = 'TagGroup';

export default Tag;
