import { cn } from '@/utils/cn';

export interface RowProps {
  label: string;
  value?: string;
  desc?: string;
  variant?: 'regular' | 'large';
  children?: React.ReactElement;
  className?: string;
}

export const Row = ({ label, value, desc, variant = 'regular', className, children }: RowProps) => (
  <div className={cn('arns-marketplace-ui ar:flex ar:flex-col ar:font-base', className)}>
    <span className="ar:text-neutral-400">{label}</span>
    <div
      className={cn('ar:mt-1.5 ar:text-xl ar:text-white', {
        'ar:mt-1 ar:text-2xl ar:font-medium': variant === 'large'
      })}
    >
      {children ?? value ?? '-'}
    </div>
    {desc && <span className="ar:mt-1 ar:text-sm ar:text-neutral-400">{desc}</span>}
  </div>
);
