import { cn } from '@/utils/cn';

interface CardGridConfig {
  container?: string;
  row?: string;
}

interface CardProps {
  items: { header: string; cell: React.ReactNode | null }[];
  classNames?: CardGridConfig;
}

export const Card = ({ items, classNames }: CardProps) => (
  <div className={cn('ar:grid ar:grid-cols-2 ar:gap-3 ar:py-4 ar:font-base', classNames?.container)}>
    {items.map((item, idx) => (
      <div
        className={cn(
          'ar:flex ar:flex-col ar:gap-1',
          {
            'ar:col-span-2': items.length % 2 === 1 && items.length - 1 === idx
          },
          classNames?.row
        )}
        key={`header-${idx.toString()}`}
      >
        <span className="ar:text-xs ar:text-neutral-400">{item.header}</span>
        {item.cell}
      </div>
    ))}
  </div>
);
