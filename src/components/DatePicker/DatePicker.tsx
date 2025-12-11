import { forwardRef, useState, useMemo } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import './DatePicker.css';

// Icons
const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

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
   Date Utilities
   ========================================== */

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];
const MONTHS = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
};

const isSameDay = (date1: Date | null, date2: Date | null): boolean => {
    if (!date1 || !date2) return false;
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

const isToday = (date: Date): boolean => {
    return isSameDay(date, new Date());
};

const formatDate = (date: Date | null, format: string = 'yyyy-MM-dd'): string => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return format
        .replace('yyyy', String(year))
        .replace('MM', month)
        .replace('dd', day);
};

/* ==========================================
   DatePicker Props
   ========================================== */

export interface DatePickerProps {
    /** Selected date */
    value?: Date | null;
    /** Default selected date */
    defaultValue?: Date | null;
    /** Callback when date changes */
    onChange?: (date: Date | null) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Date format */
    format?: string;
    /** Label text */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Additional class name */
    className?: string;
}

/**
 * Smartisan Skeuomorphic DatePicker
 * 
 * A calendar-based date selection component
 * with metallic buttons and gradient styling.
 */
export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
    (
        {
            value,
            defaultValue,
            onChange,
            placeholder = '选择日期',
            format = 'yyyy-MM-dd',
            label,
            required,
            disabled,
            minDate,
            maxDate,
            className = '',
        },
        ref
    ) => {
        const [open, setOpen] = useState(false);
        const [internalValue, setInternalValue] = useState<Date | null>(defaultValue || null);
        const [viewDate, setViewDate] = useState(() => {
            const date = value || defaultValue || new Date();
            return { year: date.getFullYear(), month: date.getMonth() };
        });

        const selectedDate = value !== undefined ? value : internalValue;

        const handleSelect = (date: Date) => {
            setInternalValue(date);
            onChange?.(date);
            setOpen(false);
        };

        const handlePrevMonth = () => {
            setViewDate(prev => {
                if (prev.month === 0) {
                    return { year: prev.year - 1, month: 11 };
                }
                return { ...prev, month: prev.month - 1 };
            });
        };

        const handleNextMonth = () => {
            setViewDate(prev => {
                if (prev.month === 11) {
                    return { year: prev.year + 1, month: 0 };
                }
                return { ...prev, month: prev.month + 1 };
            });
        };

        const handleToday = () => {
            const today = new Date();
            setViewDate({ year: today.getFullYear(), month: today.getMonth() });
            handleSelect(today);
        };

        const days = useMemo(() => {
            const { year, month } = viewDate;
            const daysInMonth = getDaysInMonth(year, month);
            const firstDay = getFirstDayOfMonth(year, month);
            const daysInPrevMonth = getDaysInMonth(year, month - 1);

            const result: Array<{ date: Date; isOutside: boolean }> = [];

            // Previous month days
            for (let i = firstDay - 1; i >= 0; i--) {
                const day = daysInPrevMonth - i;
                result.push({
                    date: new Date(year, month - 1, day),
                    isOutside: true,
                });
            }

            // Current month days
            for (let i = 1; i <= daysInMonth; i++) {
                result.push({
                    date: new Date(year, month, i),
                    isOutside: false,
                });
            }

            // Next month days
            const remaining = 42 - result.length;
            for (let i = 1; i <= remaining; i++) {
                result.push({
                    date: new Date(year, month + 1, i),
                    isOutside: true,
                });
            }

            return result;
        }, [viewDate]);

        const isDateDisabled = (date: Date): boolean => {
            if (minDate && date < minDate) return true;
            if (maxDate && date > maxDate) return true;
            return false;
        };

        const trigger = (
            <PopoverPrimitive.Trigger
                ref={ref}
                disabled={disabled}
                className={`smt-datepicker-trigger ${!selectedDate ? 'smt-datepicker-trigger--placeholder' : ''}`}
            >
                <span>{selectedDate ? formatDate(selectedDate, format) : placeholder}</span>
                <span className="smt-datepicker-trigger-icon">
                    <CalendarIcon />
                </span>
            </PopoverPrimitive.Trigger>
        );

        return (
            <div className={`smt-datepicker-wrapper ${className}`}>
                {label && (
                    <label className={`smt-datepicker-label ${required ? 'smt-datepicker-label--required' : ''}`}>
                        {label}
                    </label>
                )}
                <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
                    {trigger}
                    <PopoverPrimitive.Portal>
                        <PopoverPrimitive.Content
                            className="smt-datepicker-content"
                            sideOffset={4}
                            align="start"
                        >
                            <div className="smt-datepicker-header">
                                <span className="smt-datepicker-title">
                                    {viewDate.year}年 {MONTHS[viewDate.month]}
                                </span>
                                <div className="smt-datepicker-nav">
                                    <button
                                        type="button"
                                        className="smt-datepicker-nav-btn"
                                        onClick={handlePrevMonth}
                                    >
                                        <ChevronLeftIcon />
                                    </button>
                                    <button
                                        type="button"
                                        className="smt-datepicker-nav-btn"
                                        onClick={handleNextMonth}
                                    >
                                        <ChevronRightIcon />
                                    </button>
                                </div>
                            </div>

                            <div className="smt-datepicker-weekdays">
                                {WEEKDAYS.map(day => (
                                    <div key={day} className="smt-datepicker-weekday">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            <div className="smt-datepicker-days">
                                {days.map(({ date, isOutside }, index) => {
                                    const isSelected = isSameDay(date, selectedDate);
                                    const isTodayDate = isToday(date);
                                    const isDisabled = isDateDisabled(date);

                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            disabled={isDisabled}
                                            className={[
                                                'smt-datepicker-day',
                                                isOutside && 'smt-datepicker-day--outside',
                                                isSelected && 'smt-datepicker-day--selected',
                                                isTodayDate && !isSelected && 'smt-datepicker-day--today',
                                            ]
                                                .filter(Boolean)
                                                .join(' ')}
                                            onClick={() => handleSelect(date)}
                                        >
                                            {date.getDate()}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="smt-datepicker-footer">
                                <button
                                    type="button"
                                    className="smt-datepicker-today-btn"
                                    onClick={handleToday}
                                >
                                    今天
                                </button>
                            </div>
                        </PopoverPrimitive.Content>
                    </PopoverPrimitive.Portal>
                </PopoverPrimitive.Root>
            </div>
        );
    }
);

DatePicker.displayName = 'DatePicker';

export default DatePicker;
