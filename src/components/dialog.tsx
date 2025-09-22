import XIcon from '@/assets/icons/x.svg';
import { cn } from '@/utils/cn';
import * as DialogPrimitive from '@radix-ui/react-dialog';

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'ar:data-[state=open]:animate-in data-[state=closed]:animate-out ar:data-[state=closed]:fade-out-0 ar:data-[state=open]:fade-in-0 ar:fixed ar:inset-0 ar:z-50 ar:bg-neutral-950/90',
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'arns-marketplace-ui',
          'ar:data-[state=open]:animate-in ar:data-[state=closed]:animate-out ar:data-[state=closed]:fade-out-0 ar:data-[state=open]:fade-in-0 ar:data-[state=closed]:zoom-out-95 ar:data-[state=open]:zoom-in-95 ar:fixed ar:top-1/2 ar:left-1/2 ar:z-50 ar:w-full ar:max-w-[calc(100%-2rem)] ar:-translate-x-1/2 ar:-translate-y-1/2 ar:rounded-md ar:border ar:border-neutral-800 ar:bg-neutral-900 ar:duration-200 ar:sm:max-w-lg',
          className
        )}
        {...props}
      >
        <div className="ar:grid ar:gap-4 ar:p-6">
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close
              data-slot="dialog-close"
              className="ar:data-[state=open]:bg-accent ar:data-[state=open]:text-muted-foreground ar:absolute ar:top-4 ar:right-4 ar:rounded-xs ar:text-neutral-50 ar:opacity-70 ar:focus-visible ar:transition-opacity ar:hover:opacity-100 ar:disabled:pointer-events-none ar:[&_svg]:pointer-events-none ar:[&_svg]:shrink-0 ar:[&_svg:not([class*='size-'])]:size-6"
            >
              <XIcon />
              <span className="ar:sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </div>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('ar:flex ar:flex-col ar:gap-2 ar:text-center ar:font-base ar:sm:text-left', className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('ar:flex ar:flex-col-reverse ar:gap-2 ar:font-base ar:sm:flex-row ar:sm:justify-end', className)}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('ar:font-base ar:text-lg ar:leading-none ar:font-semibold ar:text-neutral-50', className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('ar:text-sm ar:text-neutral-50', className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
};
