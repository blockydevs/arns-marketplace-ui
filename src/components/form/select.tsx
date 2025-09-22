import ChevronUpDownIcon from '@/assets/icons/chevrons-up-down.svg';
import { cn } from '@/utils/cn';
import * as SelectPrimitive from '@radix-ui/react-select';

function SelectRoot({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}
function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}
function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}
function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default';
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "ar:flex ar:w-fit ar:items-center ar:justify-between ar:gap-2 ar:rounded-sm ar:border ar:border-neutral-600 ar:bg-neutral-900 ar:px-3 ar:py-2 ar:text-sm ar:whitespace-nowrap ar:text-neutral-50 ar:transition-colors ar:outline-none ar:disabled:cursor-not-allowed ar:disabled:opacity-50 ar:aria-invalid:border-red-500 ar:aria-invalid:ring-red-500/20 ar:data-[placeholder]:text-neutral-500 ar:data-[size=default]:h-9 ar:data-[size=sm]:h-8 ar:*:data-[slot=select-value]:line-clamp-1 ar:*:data-[slot=select-value]:flex ar:*:data-[slot=select-value]:items-center ar:*:data-[slot=select-value]:gap-2 ar:[&_svg]:pointer-events-none ar:[&_svg]:shrink-0 ar:[&_svg:not([class*='size-'])]:size-4 ar:[&_svg:not([class*='text-'])]:text-neutral-600",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronUpDownIcon className="ar:size-4.5 ar:text-neutral-300" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}
function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'ar:data-[state=open]:animate-in ar:data-[state=closed]:animate-out ar:data-[state=closed]:fade-out-0 ar:data-[state=open]:fade-in-0 ar:data-[state=closed]:zoom-out-95 ar:data-[state=open]:zoom-in-95 ar:data-[side=bottom]:slide-in-from-top-2 ar:data-[side=left]:slide-in-from-right-2 ar:data-[side=right]:slide-in-from-left-2 ar:data-[side=top]:slide-in-from-bottom-2 ar:relative ar:z-50 ar:max-h-(--radix-select-content-available-height) ar:min-w-[8rem] ar:origin-(--radix-select-content-transform-origin) ar:overflow-x-hidden ar:overflow-y-auto ar:rounded-sm ar:border ar:border-neutral-600 ar:bg-neutral-900 ar:text-neutral-200 ar:outline-none',
          position === 'popper' &&
            'ar:data-[side=bottom]:translate-y-1 ar:data-[side=left]:-translate-x-1 ar:data-[side=right]:translate-x-1 ar:data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            'ar:p-1',
            position === 'popper' &&
              'ar:h-[var(--radix-select-trigger-height)] ar:w-full ar:min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}
function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "ar:relative ar:flex ar:w-full ar:cursor-default ar:items-center ar:gap-2 ar:rounded-sm ar:py-1.5 ar:pr-8 ar:pl-2 ar:font-base ar:text-sm ar:text-neutral-400 ar:outline-hidden ar:select-none ar:focus:bg-neutral-800 ar:focus:text-white ar:data-[disabled]:pointer-events-none ar:data-[disabled]:opacity-50 ar:[&_svg]:pointer-events-none ar:[&_svg]:shrink-0 ar:[&_svg:not([class*='size-'])]:size-4 ar:[&_svg:not([class*='text-'])]:text-neutral-200 ar:*:[span]:last:flex ar:*:[span]:last:items-center ar:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
  options: readonly SelectOption[];
  placeholder: string;
  className?: string;
}

function Select({ placeholder, className, options, ...props }: SelectProps) {
  return (
    <SelectRoot {...props}>
      <SelectTrigger className={cn(className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}

export { Select, SelectRoot, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue };
