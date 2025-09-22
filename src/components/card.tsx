import { cn } from '@/utils/cn';

function Card({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'arns-marketplace-ui ar:rounded-lg ar:border ar:border-neutral-800 ar:bg-neutral-900 ar:p-6 ar:font-base',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
export { Card };
