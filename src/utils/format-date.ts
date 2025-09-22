import { format } from 'date-fns';

export const formatDate = (date: string, dateFormat?: string) => {
  try {
    return format(new Date(date), dateFormat ?? 'dd-MM-yyyy HH:mm');
  } catch {
    return '-';
  }
};
