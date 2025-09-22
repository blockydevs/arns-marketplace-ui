export type Interval = '1hour' | '12hours' | 'day' | 'week';

const HOUR = 60 * 60 * 1000;
const TWELVE_HOURS = 12 * HOUR;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

export const getIntervalInMs = (interval: Interval) => {
  switch (interval) {
    case '1hour':
      return HOUR;
    case '12hours':
      return TWELVE_HOURS;
    case 'day':
      return DAY;
    case 'week':
      return WEEK;
  }
};

export const getIntervalFromMs = (milliseconds: number): Interval | null => {
  switch (milliseconds) {
    case HOUR:
      return '1hour';
    case TWELVE_HOURS:
      return '12hours';
    case DAY:
      return 'day';
    case WEEK:
      return 'week';
    default:
      return null;
  }
};
