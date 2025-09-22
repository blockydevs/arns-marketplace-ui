import type { ListingType, Status } from '@/components/templates/domains/types';
import { differenceInHours } from 'date-fns';

export const mapListingTypeToColor = (type: ListingType) => {
  switch (type) {
    case 'dutch':
      return 'var(--ar-color-highlight-blue)';
    case 'english':
      return 'var(--ar-color-highlight-orange)';
    case 'fixed':
      return 'var(--ar-color-highlight-pink)';
  }
};

export const mapListingTypeToLabel = (type: ListingType) => {
  switch (type) {
    case 'dutch':
      return 'Dutch auction';
    case 'english':
      return 'English auction';
    case 'fixed':
      return 'Fixed price';
  }
};

export const mapListingStatusToLabel = (status: Status) => {
  switch (status) {
    case 'idle':
      return 'Not listed';
    case 'listed':
      return 'Listed';
    case 'sold':
      return 'Sold';
  }
};

export const checkIfItsEnding = (date: string) => {
  const now = new Date();
  const target = new Date(date);
  const hoursUntil = differenceInHours(target, now);

  return hoursUntil < 1 && target > now;
};

export const shortenAddress = (address: string) => {
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};
