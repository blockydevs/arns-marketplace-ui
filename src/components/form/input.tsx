import { Label } from '@/components/form/label';
import { cn } from '@/utils/cn';

export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  suffix?: string;
  containerClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

function Input({
  label,
  suffix,
  className,
  containerClassName,
  labelClassName,
  wrapperClassName,
  type,
  ...props
}: InputProps) {
  return (
    <div
      className={cn('arns-marketplace-ui ar:flex ar:flex-col ar:gap-2 ar:font-base ar:font-normal', containerClassName)}
    >
      {label && <Label className={cn('ar:text-neutral-50', labelClassName)}>{label}</Label>}
      <div className={cn('ar:relative ar:max-h-9', wrapperClassName)}>
        <input
          type={type}
          data-slot="input"
          className={cn(
            'ar:flex ar:max-h-9 ar:w-full ar:min-w-0 ar:rounded-sm ar:border ar:border-neutral-600 ar:bg-neutral-900 ar:px-3 ar:pt-2 ar:pb-1.75 ar:text-sm ar:text-neutral-50 ar:transition-colors ar:outline-none ar:placeholder:text-neutral-500',
            'ar:[&[type=number]]:px-3 ar:[&[type=number]]:pt-2 ar:[&[type=number]]:pb-1.75',
            'ar:disabled:pointer-events-none ar:disabled:cursor-not-allowed ar:disabled:border-neutral-200 ar:disabled:text-neutral-50 ar:disabled:opacity-50 ar:disabled:placeholder:text-neutral-50',
            'ar:aria-invalid:border-red-500 ar:aria-invalid:text-red-500 ar:aria-invalid:ring-red-300/50',
            { 'ar:pr-14': suffix },
            className
          )}
          {...props}
        />
        {suffix && (
          <span className="ar:absolute ar:top-1/2 ar:right-3 ar:mt-0.25 ar:-translate-y-1/2 ar:text-sm ar:leading-none ar:text-neutral-100">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
export { Input };
