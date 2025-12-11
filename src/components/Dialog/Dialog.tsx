import React, { forwardRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import './Dialog.css';

// Close Icon
const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

/* ==========================================
   Dialog Root
   ========================================== */

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

/* ==========================================
   Dialog Content
   ========================================== */

export interface DialogContentProps
    extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    /** Size of the dialog */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
    /** Whether to show close button */
    showClose?: boolean;
    /** Title of the dialog */
    title?: string;
    /** Description of the dialog */
    description?: string;
}

export const DialogContent = forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    DialogContentProps
>(
    (
        {
            size = 'md',
            showClose = true,
            title,
            description,
            className = '',
            children,
            ...props
        },
        ref
    ) => {
        const classNames = [
            'smt-dialog-content',
            size !== 'md' && `smt-dialog-content--${size}`,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className="smt-dialog-overlay" />
                <DialogPrimitive.Content ref={ref} className={classNames} {...props}>
                    {(title || showClose) && (
                        <div className="smt-dialog-header">
                            <div>
                                {title && (
                                    <DialogPrimitive.Title className="smt-dialog-title">
                                        {title}
                                    </DialogPrimitive.Title>
                                )}
                                {description && (
                                    <DialogPrimitive.Description className="smt-dialog-description">
                                        {description}
                                    </DialogPrimitive.Description>
                                )}
                            </div>
                            {showClose && (
                                <DialogPrimitive.Close className="smt-dialog-close">
                                    <CloseIcon />
                                </DialogPrimitive.Close>
                            )}
                        </div>
                    )}
                    {children}
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        );
    }
);

DialogContent.displayName = 'DialogContent';

/* ==========================================
   Dialog Body
   ========================================== */

export const DialogBody = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
    <div ref={ref} className={`smt-dialog-body ${className}`} {...props} />
));

DialogBody.displayName = 'DialogBody';

/* ==========================================
   Dialog Footer
   ========================================== */

export const DialogFooter = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
    <div ref={ref} className={`smt-dialog-footer ${className}`} {...props} />
));

DialogFooter.displayName = 'DialogFooter';

export default Dialog;
