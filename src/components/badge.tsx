import { cn } from '@/utils/cn';

export interface BadgeProps {
  color?: string;
  className?: string;
  value: string;
}

export const Badge = ({ value, color, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'ar:inline-block ar:w-fit ar:rounded-sm ar:bg-neutral-800 ar:px-2 ar:py-0.75 ar:text-center ar:text-xs ar:font-medium',
        className
      )}
      style={{ color }}
    >
      {value}
    </span>
  );
};
