import React, { forwardRef } from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import './HoverCard.css';

/* ==========================================
   HoverCard Root & Trigger
   ========================================== */

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

/* ==========================================
   HoverCard Content
   ========================================== */

export interface HoverCardContentProps
    extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> {
    /** Whether to show arrow */
    showArrow?: boolean;
}

export const HoverCardContent = forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Content>,
    HoverCardContentProps
>(({ showArrow = true, className = '', children, ...props }, ref) => (
    <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
            ref={ref}
            className={`smt-hover-card ${className}`}
            sideOffset={8}
            {...props}
        >
            {children}
            {showArrow && (
                <HoverCardPrimitive.Arrow className="smt-hover-card-arrow" />
            )}
        </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
));

HoverCardContent.displayName = 'HoverCardContent';

/* ==========================================
   Author HoverCard (preset layout)
   ========================================== */

export interface AuthorHoverCardProps {
    /** Author name */
    name: string;
    /** Author bio */
    bio?: string;
    /** Avatar element */
    avatar?: React.ReactNode;
    /** Stats to display */
    stats?: Array<{ label: string; value: string | number }>;
    /** Children (trigger element) */
    children: React.ReactNode;
}

export const AuthorHoverCard: React.FC<AuthorHoverCardProps> = ({
    name,
    bio,
    avatar,
    stats,
    children,
}) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>{children}</HoverCardTrigger>
            <HoverCardContent>
                <div className="smt-hover-card-author">
                    {avatar && (
                        <div className="smt-hover-card-author-avatar">{avatar}</div>
                    )}
                    <div className="smt-hover-card-author-info">
                        <h4 className="smt-hover-card-author-name">{name}</h4>
                        {bio && <p className="smt-hover-card-author-bio">{bio}</p>}
                    </div>
                </div>
                {stats && stats.length > 0 && (
                    <div className="smt-hover-card-author-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="smt-hover-card-stat">
                                <div className="smt-hover-card-stat-value">{stat.value}</div>
                                <div className="smt-hover-card-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                )}
            </HoverCardContent>
        </HoverCard>
    );
};

export default HoverCard;
