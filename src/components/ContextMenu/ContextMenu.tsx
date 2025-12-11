import React, { forwardRef } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import './ContextMenu.css';

// Icons
const ChevronRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

/* ==========================================
   ContextMenu Root & Trigger
   ========================================== */

export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuGroup = ContextMenuPrimitive.Group;
export const ContextMenuSub = ContextMenuPrimitive.Sub;

/* ==========================================
   ContextMenu Content
   ========================================== */

export const ContextMenuContent = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className = '', ...props }, ref) => (
    <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
            ref={ref}
            className={`smt-context-menu ${className}`}
            {...props}
        />
    </ContextMenuPrimitive.Portal>
));

ContextMenuContent.displayName = 'ContextMenuContent';

/* ==========================================
   ContextMenu Item
   ========================================== */

export interface ContextMenuItemProps
    extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> {
    icon?: React.ReactNode;
    shortcut?: string;
    danger?: boolean;
}

export const ContextMenuItem = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Item>,
    ContextMenuItemProps
>(({ icon, shortcut, danger, className = '', children, ...props }, ref) => (
    <ContextMenuPrimitive.Item
        ref={ref}
        className={`smt-context-menu-item ${danger ? 'smt-context-menu-item--danger' : ''} ${className}`}
        {...props}
    >
        {icon && <span className="smt-context-menu-item-icon">{icon}</span>}
        {children}
        {shortcut && <span className="smt-context-menu-item-shortcut">{shortcut}</span>}
    </ContextMenuPrimitive.Item>
));

ContextMenuItem.displayName = 'ContextMenuItem';

/* ==========================================
   ContextMenu Sub Trigger & Content
   ========================================== */

export const ContextMenuSubTrigger = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & { icon?: React.ReactNode }
>(({ icon, className = '', children, ...props }, ref) => (
    <ContextMenuPrimitive.SubTrigger
        ref={ref}
        className={`smt-context-menu-item smt-context-menu-sub-trigger ${className}`}
        {...props}
    >
        {icon && <span className="smt-context-menu-item-icon">{icon}</span>}
        {children}
        <ChevronRightIcon />
    </ContextMenuPrimitive.SubTrigger>
));

ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

export const ContextMenuSubContent = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className = '', ...props }, ref) => (
    <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.SubContent
            ref={ref}
            className={`smt-context-menu-sub-content ${className}`}
            {...props}
        />
    </ContextMenuPrimitive.Portal>
));

ContextMenuSubContent.displayName = 'ContextMenuSubContent';

/* ==========================================
   ContextMenu Separator & Label
   ========================================== */

export const ContextMenuSeparator = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className = '', ...props }, ref) => (
    <ContextMenuPrimitive.Separator
        ref={ref}
        className={`smt-context-menu-separator ${className}`}
        {...props}
    />
));

ContextMenuSeparator.displayName = 'ContextMenuSeparator';

export const ContextMenuLabel = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>
>(({ className = '', ...props }, ref) => (
    <ContextMenuPrimitive.Label
        ref={ref}
        className={`smt-context-menu-label ${className}`}
        {...props}
    />
));

ContextMenuLabel.displayName = 'ContextMenuLabel';

export default ContextMenu;
