import { intervalToDuration } from 'date-fns';

export const formatDuration = (start: Date, end: Date) => {
  const duration = intervalToDuration({ start, end });

  if (duration.years && duration.years > 0) {
    return `${duration.years.toString()} year${duration.years > 1 ? 's' : ''}`;
  }

  if (duration.months && duration.months > 0) {
    return `${duration.months.toString()} month${duration.months > 1 ? 's' : ''}`;
  }

  if (duration.days && duration.days > 0) {
    return `${duration.days.toString()} day${duration.days > 1 ? 's' : ''}`;
  }

  if (duration.hours && duration.hours > 0) {
    return `${duration.hours.toString()} hour${duration.hours > 1 ? 's' : ''}`;
  }

  return 'Less than an hour';
};
