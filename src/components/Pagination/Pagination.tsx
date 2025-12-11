import React, { forwardRef } from 'react';
import './Pagination.css';

// Icons
const ChevronLeftIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

/* ==========================================
   Pagination Component
   ========================================== */

export interface PaginationProps {
    /** Current page number (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onPageChange: (page: number) => void;
    /** Number of sibling pages to show */
    siblingCount?: number;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Additional class name */
    className?: string;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
    (
        {
            currentPage,
            totalPages,
            onPageChange,
            siblingCount = 1,
            size = 'md',
            className = '',
        },
        ref
    ) => {
        const range = (start: number, end: number) => {
            const length = end - start + 1;
            return Array.from({ length }, (_, i) => start + i);
        };

        const paginationRange = React.useMemo(() => {
            const totalPageNumbers = siblingCount * 2 + 3; // siblings + first + last + current

            if (totalPageNumbers >= totalPages) {
                return range(1, totalPages);
            }

            const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
            const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

            const shouldShowLeftDots = leftSiblingIndex > 2;
            const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

            if (!shouldShowLeftDots && shouldShowRightDots) {
                const leftItemCount = 2 + 2 * siblingCount;
                const leftRange = range(1, leftItemCount);
                return [...leftRange, 'dots', totalPages];
            }

            if (shouldShowLeftDots && !shouldShowRightDots) {
                const rightItemCount = 2 + 2 * siblingCount;
                const rightRange = range(totalPages - rightItemCount + 1, totalPages);
                return [1, 'dots', ...rightRange];
            }

            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [1, 'dots', ...middleRange, 'dots', totalPages];
        }, [currentPage, totalPages, siblingCount]);

        const classNames = [
            'smt-pagination',
            size !== 'md' && `smt-pagination--${size}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <nav ref={ref} className={classNames} aria-label="Pagination">
                <button
                    type="button"
                    className="smt-pagination-item smt-pagination-prev"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <ChevronLeftIcon />
                </button>

                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === 'dots') {
                        return (
                            <span key={`dots-${index}`} className="smt-pagination-ellipsis">
                                …
                            </span>
                        );
                    }

                    const isActive = pageNumber === currentPage;

                    return (
                        <button
                            key={pageNumber}
                            type="button"
                            className={`smt-pagination-item ${isActive ? 'smt-pagination-item--active' : ''}`}
                            onClick={() => onPageChange(pageNumber as number)}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                <button
                    type="button"
                    className="smt-pagination-item smt-pagination-next"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    <ChevronRightIcon />
                </button>
            </nav>
        );
    }
);

Pagination.displayName = 'Pagination';

/* ==========================================
   Simple Pagination (Prev/Next only)
   ========================================== */

export interface SimplePaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export const SimplePagination = forwardRef<HTMLDivElement, SimplePaginationProps>(
    ({ currentPage, totalPages, onPageChange, className = '' }, ref) => (
        <nav ref={ref} className={`smt-pagination smt-pagination--simple ${className}`}>
            <button
                type="button"
                className="smt-pagination-item smt-pagination-prev"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeftIcon />
                <span style={{ marginLeft: 8 }}>上一页</span>
            </button>

            <span className="smt-pagination-info">
                {currentPage} / {totalPages}
            </span>

            <button
                type="button"
                className="smt-pagination-item smt-pagination-next"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <span style={{ marginRight: 8 }}>下一页</span>
                <ChevronRightIcon />
            </button>
        </nav>
    )
);

SimplePagination.displayName = 'SimplePagination';

export default Pagination;
