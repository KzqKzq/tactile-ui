import React, { forwardRef } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import './DropdownMenu.css';

// Icons
const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const DotIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="8" height="8">
        <circle cx="12" cy="12" r="6" />
    </svg>
);

/* ==========================================
   DropdownMenu Root & Basic Parts
   ========================================== */

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

/* ==========================================
   DropdownMenu Content
   ========================================== */

export const DropdownMenuContent = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className = '', sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            className={`smt-dropdown-content ${className}`}
            sideOffset={sideOffset}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
));

DropdownMenuContent.displayName = 'DropdownMenuContent';

/* ==========================================
   DropdownMenu Item
   ========================================== */

export interface DropdownMenuItemProps
    extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
    /** Icon to display before label */
    icon?: React.ReactNode;
    /** Keyboard shortcut */
    shortcut?: string;
    /** Whether this is a danger/destructive action */
    danger?: boolean;
}

export const DropdownMenuItem = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    DropdownMenuItemProps
>(({ icon, shortcut, danger, className = '', children, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={`smt-dropdown-item ${danger ? 'smt-dropdown-item--danger' : ''} ${className}`}
        {...props}
    >
        {icon && <span className="smt-dropdown-item-icon">{icon}</span>}
        {children}
        {shortcut && <span className="smt-dropdown-item-shortcut">{shortcut}</span>}
    </DropdownMenuPrimitive.Item>
));

DropdownMenuItem.displayName = 'DropdownMenuItem';

/* ==========================================
   DropdownMenu Checkbox Item
   ========================================== */

export const DropdownMenuCheckboxItem = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className = '', children, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className={`smt-dropdown-item ${className}`}
        style={{ paddingLeft: 32 }}
        {...props}
    >
        <DropdownMenuPrimitive.ItemIndicator className="smt-dropdown-item-indicator">
            <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
        {children}
    </DropdownMenuPrimitive.CheckboxItem>
));

DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

/* ==========================================
   DropdownMenu Radio Item
   ========================================== */

export const DropdownMenuRadioItem = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className = '', children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
        ref={ref}
        className={`smt-dropdown-item ${className}`}
        style={{ paddingLeft: 32 }}
        {...props}
    >
        <DropdownMenuPrimitive.ItemIndicator className="smt-dropdown-item-indicator">
            <DotIcon />
        </DropdownMenuPrimitive.ItemIndicator>
        {children}
    </DropdownMenuPrimitive.RadioItem>
));

DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

/* ==========================================
   DropdownMenu Sub Trigger & Content
   ========================================== */

export const DropdownMenuSubTrigger = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { icon?: React.ReactNode }
>(({ icon, className = '', children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={`smt-dropdown-item smt-dropdown-sub-trigger ${className}`}
        {...props}
    >
        {icon && <span className="smt-dropdown-item-icon">{icon}</span>}
        {children}
        <span className="smt-dropdown-sub-trigger-icon">
            <ChevronRightIcon />
        </span>
    </DropdownMenuPrimitive.SubTrigger>
));

DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

export const DropdownMenuSubContent = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className = '', ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.SubContent
            ref={ref}
            className={`smt-dropdown-sub-content ${className}`}
            sideOffset={2}
            alignOffset={-4}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
));

DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';

/* ==========================================
   DropdownMenu Label & Separator
   ========================================== */

export const DropdownMenuLabel = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className = '', ...props }, ref) => (
    <DropdownMenuPrimitive.Label
        ref={ref}
        className={`smt-dropdown-label ${className}`}
        {...props}
    />
));

DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export const DropdownMenuSeparator = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className = '', ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
        ref={ref}
        className={`smt-dropdown-separator ${className}`}
        {...props}
    />
));

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export default DropdownMenu;
