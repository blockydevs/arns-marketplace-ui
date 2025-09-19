import { cn } from '@/utils/cn';
import * as PopoverPrimitive from '@radix-ui/react-popover';

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}
function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}
function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'ar:data-[state=open]:animate-in ar:data-[state=closed]:animate-out ar:data-[state=closed]:fade-out-0 ar:data-[state=open]:fade-in-0 ar:data-[state=closed]:zoom-out-95 ar:data-[state=open]:zoom-in-95 ar:data-[side=bottom]:slide-in-from-top-2 ar:data-[side=left]:slide-in-from-right-2 ar:data-[side=right]:slide-in-from-left-2 ar:data-[side=top]:slide-in-from-bottom-2 ar:z-50 ar:w-72 ar:origin-(--radix-popover-content-transform-origin) ar:rounded-sm ar:border ar:border-neutral-700 ar:bg-neutral-900 ar:p-4 ar:font-base ar:text-neutral-50 ar:outline-hidden',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
