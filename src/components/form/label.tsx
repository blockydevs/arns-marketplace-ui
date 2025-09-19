import { cn } from '@/utils/cn';
import * as LabelPrimitive from '@radix-ui/react-label';

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'ar:flex ar:items-center ar:gap-2 ar:font-base ar:text-sm ar:leading-none ar:font-medium ar:text-neutral-50 ar:select-none ar:group-data-[disabled=true]:pointer-events-none ar:group-data-[disabled=true]:opacity-50 ar:peer-disabled:cursor-not-allowed ar:peer-disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}
export { Label };
