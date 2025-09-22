import type { PropsWithChildren } from 'react';
import CalendarIcon from '@/assets/icons/calendar.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import HourglassIcon from '@/assets/icons/hourglass.svg';
import { Badge } from '@/components/badge';
import { Card } from '@/components/card';
import { Header } from '@/components/header';
import { Paragraph } from '@/components/paragraph';
import type { ListingType } from '@/components/templates/domains/types';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/format-date';
import { formatDuration } from '@/utils/format-duration';
import { intervalToDuration } from 'date-fns';

export interface DetailsCardProps extends PropsWithChildren {
  variant: ListingType;
  endDate?: string | null;
  startDate: string;
  price: string;
  owner?: boolean;
  status?: string;
  className?: string;
}

const showProperHeader = (variant: ListingType, sold: boolean) => {
  switch (variant) {
    case 'dutch':
      return sold ? 'Final price' : 'Current price';
    case 'english':
      return sold ? 'Final bid' : 'Current bid';
    case 'fixed':
      return sold ? 'Final price' : 'Price';
  }
};

export const DetailsCard = ({
  variant,
  endDate,
  startDate,
  price,
  status,
  children,
  owner,
  className
}: DetailsCardProps) => {
  const start = new Date(startDate);
  const end = endDate && new Date(endDate);
  const sold = status === 'sold';
  const duration = end && sold && intervalToDuration({ start, end });

  return (
    <Card className={cn('ar:flex ar:flex-col ar:gap-5', className)}>
      <div className="ar:flex ar:items-center">
        <Paragraph className="ar:mr-4 ar:inline-block ar:text-xl ar:text-neutral-400">
          {showProperHeader(variant, sold)}
        </Paragraph>

        {variant === 'dutch' ? (
          <Badge value="Dutch auction" className="ar:text-highlight-orange" />
        ) : variant === 'english' ? (
          <Badge value="English auction" className="ar:text-highlight-blue" />
        ) : (
          <Badge value="Fixed price" className="ar:text-highlight-pink" />
        )}
        {status && <Badge value={status} color="black" className="ar:ml-auto ar:bg-white ar:uppercase" />}
      </div>
      <Header size="h2" className="ar:inline-block">
        {price}
      </Header>
      {status === 'sold' && owner && (
        <div className="ar:rounded-lg ar:bg-neutral-800 ar:px-4 ar:py-2.5 ar:font-medium ar:text-white">
          You won this auction
        </div>
      )}
      <div className="ar:flex ar:items-center ar:gap-2.5">
        <ClockIcon className="ar:inline" />
        <Paragraph className="ar:text-neutral-400">
          {status ? 'Ended: ' + formatDate(endDate ?? '') : end ? formatDuration(start, end) + ' left' : 'Infinite'}
        </Paragraph>
      </div>
      {duration && (
        <div className="ar:flex ar:items-center ar:gap-2.5">
          <HourglassIcon className="ar:inline" />
          <Paragraph className="ar:text-neutral-400">{`Duration: ${formatDuration(start, end)}`}</Paragraph>
        </div>
      )}
      <div className="ar:flex ar:items-center ar:gap-2.5">
        <CalendarIcon className="ar:inline" />
        <Paragraph className="ar:text-neutral-400">{`Listed on: ${formatDate(startDate)}`}</Paragraph>
      </div>
      {children && <div className="ar:h-px ar:w-full ar:bg-neutral-800" />}
      {children}
    </Card>
  );
};
