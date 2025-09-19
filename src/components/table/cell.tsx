import { Badge } from '@/components/badge';
import { cn } from '@/utils/cn';

interface BaseCellProps {
  value: string;
  className?: string;
}

const Cell = ({ value, className }: BaseCellProps) => (
  <div className={cn('ar:line-clamp-2 ar:text-sm ar:break-words ar:text-neutral-300', className)}>{value}</div>
);
Cell.displayName = 'Cell';

const CellWithPrice = ({ value, desc, className }: BaseCellProps & { desc: string }) => (
  <div className={cn('ar:inline-flex ar:flex-col', className)}>
    <span className="ar:text-sm ar:text-neutral-300">{value}</span>
    <span className="ar:text-xs ar:text-neutral-500">{desc}</span>
  </div>
);
CellWithPrice.displayName = 'CellWithPrice';

const CellWithBadge = ({ value, color, className }: BaseCellProps & { color?: string }) => {
  return <Badge color={color} value={value} className={className} />;
};
CellWithBadge.displayName = 'CellWithBadge';

const CellWithTimeLimit = ({
  value,
  formatedValue,
  isEnding,
  className
}: BaseCellProps & { formatedValue: string; isEnding: boolean }) => {
  return (
    <div className={cn('ar:inline-flex ar:flex-col', className)}>
      <span
        className={cn('ar:text-sm ar:text-neutral-300', {
          'ar:text-red-400': isEnding
        })}
      >
        {formatedValue}
      </span>
      <span className="ar:text-xs ar:text-neutral-500">{value}</span>
    </div>
  );
};
CellWithTimeLimit.displayName = 'CellWithTimeLimit';

const CellWithPlaceholder = ({ value, className }: Partial<BaseCellProps>) => (
  <span className={cn('ar:text-sm ar:text-neutral-300', className)}>{value ?? '-'}</span>
);

export { Cell, CellWithPrice, CellWithBadge, CellWithTimeLimit, CellWithPlaceholder };
