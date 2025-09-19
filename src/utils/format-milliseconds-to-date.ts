const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

export const formatMillisecondsToDate = (value: number) => {
  if (value > MINUTE && value < HOUR) {
    return `${Math.floor(value / MINUTE).toString()} minute${Math.floor(value / MINUTE) > 1 ? 's' : ''}`;
  }
  if (value >= HOUR && value < DAY) {
    return `${Math.floor(value / HOUR).toString()} hour${Math.floor(value / HOUR) > 1 ? 's' : ''}`;
  }
  if (value >= DAY && value < WEEK) {
    return `${Math.floor(value / DAY).toString()} day${Math.floor(value / DAY) > 1 ? 's' : ''}`;
  }
  return `${Math.floor(value / WEEK).toString()} week${Math.floor(value / WEEK) > 1 ? 's' : ''}`;
};
