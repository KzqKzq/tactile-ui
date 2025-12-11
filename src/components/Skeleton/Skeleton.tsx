import React, { forwardRef } from 'react';
import './Skeleton.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Shape variant */
    variant?: 'text' | 'circle' | 'rect' | 'button';
    /** Size of the skeleton */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Custom width */
    width?: string | number;
    /** Custom height */
    height?: string | number;
    /** Whether to show animation */
    animated?: boolean;
}

/**
 * Smartisan Skeuomorphic Skeleton
 * 
 * A loading placeholder with shimmer animation
 * for content that is loading.
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
    (
        {
            variant = 'text',
            size = 'md',
            width,
            height,
            animated = true,
            className = '',
            style,
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-skeleton',
            `smt-skeleton--${variant}`,
            size !== 'md' && `smt-skeleton--${size}`,
            !animated && 'smt-skeleton--static',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const customStyle: React.CSSProperties = {
            ...style,
            width: width !== undefined ? (typeof width === 'number' ? `${width}px` : width) : undefined,
            height: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
        };

        return (
            <div
                ref={ref}
                className={classNames}
                style={customStyle}
                aria-busy="true"
                aria-live="polite"
                {...props}
            />
        );
    }
);

Skeleton.displayName = 'Skeleton';

/* ==========================================
   Preset Skeleton Layouts
   ========================================== */

export interface SkeletonTextProps {
    /** Number of lines */
    lines?: number;
    /** Width of the last line (percentage) */
    lastLineWidth?: string;
    className?: string;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({
    lines = 3,
    lastLineWidth = '60%',
    className = '',
}) => {
    return (
        <div className={`smt-skeleton-paragraph ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="text"
                    style={i === lines - 1 ? { width: lastLineWidth } : undefined}
                />
            ))}
        </div>
    );
};

export interface SkeletonUserProps {
    className?: string;
    avatarSize?: 'sm' | 'md' | 'lg';
}

export const SkeletonUser: React.FC<SkeletonUserProps> = ({
    className = '',
    avatarSize = 'md',
}) => {
    return (
        <div className={`smt-skeleton-user ${className}`}>
            <Skeleton variant="circle" size={avatarSize} />
            <div className="smt-skeleton-user-info">
                <Skeleton variant="text" width="120px" />
                <Skeleton variant="text" size="sm" width="80px" />
            </div>
        </div>
    );
};

export interface SkeletonCardProps {
    className?: string;
    showImage?: boolean;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
    className = '',
    showImage = true,
}) => {
    return (
        <div className={`smt-skeleton-card ${className}`}>
            {showImage && <Skeleton variant="rect" height={160} style={{ marginBottom: 16 }} />}
            <Skeleton variant="text" size="lg" width="70%" />
            <div style={{ marginTop: 12 }}>
                <SkeletonText lines={2} />
            </div>
        </div>
    );
};

export default Skeleton;
