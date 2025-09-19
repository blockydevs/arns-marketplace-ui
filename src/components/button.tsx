import { forwardRef } from 'react';
import { Spinner } from '@/components/spinner';
import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva(
  'ar:relative ar:inline-flex ar:flex-row ar:items-center ar:justify-center ar:gap-2 ar:rounded-sm ar:border-0 ar:font-base ar:leading-[150%] ar:font-medium ar:tracking-wide ar:whitespace-nowrap ar:focus-visible ar:transition-colors ar:hover:cursor-pointer ar:focus-visible:ring-2 ar:focus-visible:ring-offset-2 ar:focus-visible:outline-none ar:disabled:pointer-events-none ar:disabled:opacity-50 ar:[&_svg]:pointer-events-none ar:[&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'ar:bg-primary ar:text-neutral-900 ar:hover:bg-neutral-100 ar:disabled:bg-neutral-100 ar:disabled:text-neutral-900 ar:[&_span_svg]:text-neutral-900 ar:hover:[&_span_svg]:text-neutral-900',
        secondary:
          'ar:bg-neutral-800 ar:text-neutral-50 ar:hover:bg-neutral-200 ar:hover:text-neutral-900 ar:disabled:text-neutral-50 ar:[&_span_svg]:text-neutral-50 ar:hover:[&_span_svg]:text-neutral-900',
        ghost:
          'ar:bg-transparent ar:text-neutral-50 ar:hover:bg-neutral-500 ar:hover:text-neutral-900 ar:disabled:text-neutral-50 ar:[&_span_svg]:text-neutral-50 ar:hover:[&_span_svg]:text-neutral-900',
        outline:
          'ar:border ar:border-neutral-600 ar:bg-transparent ar:text-neutral-300 ar:hover:border-neutral-200 ar:hover:text-white ar:disabled:text-neutral-300 ar:[&_span_svg]:text-neutral-300 ar:hover:[&_span_svg]:text-white',
        destructive:
          'ar:rounded-full ar:bg-red-500 ar:text-white ar:hover:bg-red-600 ar:disabled:text-white ar:[&_span_svg]:text-white',
        link: 'ar:bg-transparent ar:text-highlight-pink ar:hover:underline ar:focus-visible:text-neutral-300 ar:disabled:text-highlight-pink'
      },
      size: {
        regular: 'ar:px-4 ar:py-2 ar:text-sm',
        large: 'ar:px-6 ar:py-2.25 ar:text-base',
        small: 'ar:px-3.5 ar:py-2 ar:text-sm',
        mini: 'ar:gap-1.5 ar:px-2 ar:py-0.5 ar:text-xs'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'regular'
    }
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPlacement?: 'left' | 'right';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, iconPlacement, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), {
          'ar:pointer-events-none': loading
        })}
        ref={ref}
        disabled={loading ?? props.disabled}
        {...props}
      >
        {icon && !loading && (
          <span
            className={cn('ar:inline-flex ar:h-3.5 ar:w-3.5 ar:items-center', {
              'ar:order-2': iconPlacement === 'right',
              'ar:h-3 ar:w-3': size === 'mini',
              'ar:h-4 ar:w-4': size === 'large'
            })}
          >
            {icon}
          </span>
        )}
        {loading && (
          <span
            className={cn('ar:inline-flex ar:items-center ar:[&>div]:inline-flex', {
              'ar:order-2': iconPlacement === 'right'
            })}
          >
            <Spinner
              className={cn('ar:h-3.5 ar:w-3.5', {
                'ar:h-3 ar:w-3': size === 'mini',
                'ar:h-4 ar:w-4': size === 'large'
              })}
            />
          </span>
        )}
        {children}
      </Comp>
    );
  }
);
