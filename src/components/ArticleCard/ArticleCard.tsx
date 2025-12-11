import React, { forwardRef } from 'react';
import './ArticleCard.css';

export interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
    /** Visual variant */
    variant?: 'default' | 'horizontal' | 'featured' | 'compact';
    /** Article title */
    title: string;
    /** Article excerpt/summary */
    excerpt?: string;
    /** Cover image URL */
    coverImage?: string;
    /** Cover image alt text */
    coverAlt?: string;
    /** Category name */
    category?: string;
    /** Category link */
    categoryHref?: string;
    /** Article link */
    href?: string;
    /** Author name */
    author?: string;
    /** Author avatar URL */
    authorAvatar?: string;
    /** Publish date */
    date?: string;
    /** Tags */
    tags?: React.ReactNode;
}

export const ArticleCard = forwardRef<HTMLElement, ArticleCardProps>(
    (
        {
            variant = 'default',
            title,
            excerpt,
            coverImage,
            coverAlt,
            category,
            categoryHref,
            href,
            author,
            authorAvatar,
            date,
            tags,
            className = '',
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-article-card',
            variant !== 'default' && `smt-article-card--${variant}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <article ref={ref} className={classNames} {...props}>
                {coverImage && (
                    <div className="smt-article-card-cover">
                        <img src={coverImage} alt={coverAlt || title} />
                        <div className="smt-article-card-cover-overlay" />
                    </div>
                )}

                <div className="smt-article-card-content">
                    {category && (
                        <div className="smt-article-card-category">
                            {categoryHref ? (
                                <a href={categoryHref}>{category}</a>
                            ) : (
                                category
                            )}
                        </div>
                    )}

                    <h3 className="smt-article-card-title">
                        {href ? <a href={href}>{title}</a> : title}
                    </h3>

                    {excerpt && (
                        <p className="smt-article-card-excerpt">{excerpt}</p>
                    )}

                    {tags && <div className="smt-article-card-tags">{tags}</div>}

                    {(author || date) && (
                        <div className="smt-article-card-meta">
                            {author && (
                                <div className="smt-article-card-author">
                                    {authorAvatar && (
                                        <img
                                            src={authorAvatar}
                                            alt={author}
                                            className="smt-article-card-author-avatar"
                                        />
                                    )}
                                    <span className="smt-article-card-author-name">{author}</span>
                                </div>
                            )}
                            {date && (
                                <span className="smt-article-card-date">{date}</span>
                            )}
                        </div>
                    )}
                </div>
            </article>
        );
    }
);

ArticleCard.displayName = 'ArticleCard';

/* ==========================================
   ArticleCard Grid
   ========================================== */

export interface ArticleCardGridProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Number of columns */
    columns?: 1 | 2 | 3 | 4;
}

export const ArticleCardGrid = forwardRef<HTMLDivElement, ArticleCardGridProps>(
    ({ columns = 3, className = '', style, ...props }, ref) => (
        <div
            ref={ref}
            className={className}
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: 'var(--smt-space-xl)',
                ...style,
            }}
            {...props}
        />
    )
);

ArticleCardGrid.displayName = 'ArticleCardGrid';

export default ArticleCard;
