import React, { forwardRef, useState } from 'react';
import './Avatar.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Image source URL */
    src?: string;
    /** Alt text for the image */
    alt?: string;
    /** Fallback text (usually initials) */
    fallback?: string;
    /** Size of the avatar */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Shape of the avatar */
    shape?: 'circle' | 'square' | 'rounded';
    /** Status indicator */
    status?: 'online' | 'offline' | 'busy' | 'away';
}

/**
 * Smartisan Skeuomorphic Avatar
 * 
 * A user avatar component with metallic ring effect,
 * fallback initials, and optional status indicator.
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
    (
        {
            src,
            alt = '',
            fallback,
            size = 'md',
            shape = 'circle',
            status,
            className = '',
            ...props
        },
        ref
    ) => {
        const [imageError, setImageError] = useState(false);

        const classNames = [
            'smt-avatar',
            size !== 'md' && `smt-avatar--${size}`,
            shape !== 'circle' && `smt-avatar--${shape}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const showImage = src && !imageError;
        const showFallback = !showImage;

        const avatarContent = (
            <div ref={ref} className={classNames} {...props}>
                {showImage && (
                    <img
                        src={src}
                        alt={alt}
                        className="smt-avatar-image"
                        onError={() => setImageError(true)}
                    />
                )}
                {showFallback && (
                    <span className="smt-avatar-fallback">
                        {fallback || alt?.charAt(0) || '?'}
                    </span>
                )}
            </div>
        );

        if (status) {
            return (
                <div className={`smt-avatar-container smt-avatar-container--${size}`}>
                    {avatarContent}
                    <span className={`smt-avatar-status smt-avatar-status--${status}`} />
                </div>
            );
        }

        return avatarContent;
    }
);

Avatar.displayName = 'Avatar';

/* ==========================================
   Avatar Group
   ========================================== */

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Maximum number of avatars to show */
    max?: number;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
    ({ max, className = '', children, ...props }, ref) => {
        const childArray = React.Children.toArray(children);
        const excess = max ? childArray.length - max : 0;
        const visibleChildren = max ? childArray.slice(0, max) : childArray;

        return (
            <div ref={ref} className={`smt-avatar-group ${className}`} {...props}>
                {visibleChildren}
                {excess > 0 && (
                    <span className="smt-avatar-group-count">+{excess}</span>
                )}
            </div>
        );
    }
);

AvatarGroup.displayName = 'AvatarGroup';

export default Avatar;
