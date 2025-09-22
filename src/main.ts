import '@/style/global.css';

// GENERIC COMPONENTS:
export { Pagination } from '@/components/pagination';
export type { PaginationProps } from '@/components/pagination';

export { Button, buttonVariants } from '@/components/button';
export type { ButtonProps } from '@/components/button';
export { Spinner } from '@/components/spinner';

export { Card } from '@/components/card';
export { Header } from '@/components/header';
export { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
export { Paragraph } from '@/components/paragraph';
export { Row } from '@/components/row';
export { Skeleton } from '@/components/skeleton';
export { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';

export { Input } from '@/components/form/input';
export type { InputProps } from '@/components/form/input';
export { SearchInput } from '@/components/form/search-input';
export type { SearchInputProps } from '@/components/form/search-input';
export { Label } from '@/components/form/label';
export { Checkbox, CheckboxWithLabel } from '@/components/form/checkbox';
export type { CheckboxProps } from '@/components/form/checkbox';
export { Select, SelectRoot, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/form/select';
export type { SelectProps, SelectOption } from '@/components/form/select';
export { DatePicker } from '@/components/form/date-picker';
export type { DatePickerProps } from '@/components/form/date-picker';
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/dialog';
export { Badge } from '@/components/badge';

// TEMPLATES:
export { ActiveListingTable } from '@/components/templates/domains/active-listing';
export { MyANTsTable } from '@/components/templates/domains/my-ants';
export { CompletedListingTable } from '@/components/templates/domains/completed-listing';
export { DecreaseScheduleTable } from '@/components/templates/domains/decrease-schedule';
export type { Schedule } from '@/components/templates/domains/decrease-schedule';
export type { Domain, OwnedDomain, Bid, Type, Status, ListingType } from '@/components/templates/domains/types';
export { BidsTable } from '@/components/templates/domains/bids';
export { DetailsCard } from '@/components/templates/domains/details';
export { GoBackHeader } from '@/components/templates/go-back-header';

// UTILS
export { getIntervalInMs, getIntervalFromMs } from '@/utils/interval';
export { calculateCurrentDutchListingPrice } from '@/utils/calculate-current-dutch-listing-price';
export { getDutchListingSchedule } from '@/utils/get-dutch-listing-schedule';
export { formatDuration } from '@/utils/format-duration';
export { formatDate } from '@/utils/format-date';
export { formatMillisecondsToDate } from '@/utils/format-milliseconds-to-date';
export { shortenAddress } from '@/utils/shorten-address';
export { useCursorPagination } from '@/utils/use-cursor-pagination';
export type { Interval } from '@/utils/interval';
