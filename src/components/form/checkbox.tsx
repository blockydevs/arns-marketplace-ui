import { useId } from 'react';
import CheckIcon from '@/assets/icons/check.svg';
import { Label } from '@/components/form/label';
import { cn } from '@/utils/cn';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  label: string;
}

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'ar:peer ar:focus-visible:border-ring ar:focus-visible:ring-ring/50 ar:size-4 ar:shrink-0 ar:rounded-sm ar:border ar:border-neutral-500 ar:bg-neutral-950 ar:outline-none ar:focus-visible:ring-[3px] ar:disabled:cursor-not-allowed ar:disabled:opacity-50 ar:aria-invalid:border-red-500 ar:aria-invalid:ring-red-500/50 ar:data-[state=checked]:border-white ar:data-[state=checked]:bg-white ar:data-[state=checked]:text-neutral-950',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="ar:inline-flex ar:size-3.5 ar:items-center ar:justify-center ar:transition-none"
      >
        <CheckIcon width={14} height={14} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

function CheckboxWithLabel({ label, ...props }: CheckboxProps) {
  const id = useId();
  return (
    <div className="arns-marketplace-ui ar:flex ar:items-start ar:gap-3">
      <Checkbox id={id} {...props} className="ar:mt-0.5" />
      <Label htmlFor={id} className="ar:leading-normal ar:font-normal ar:text-neutral-50">
        {label}
      </Label>
    </div>
  );
}

export { Checkbox, CheckboxWithLabel };
