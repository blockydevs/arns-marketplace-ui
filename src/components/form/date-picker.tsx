import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import { Button } from '@/components/button';
import { Calendar } from '@/components/form/calendar';
import { Input } from '@/components/form/input';
import { Label } from '@/components/form/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';

export interface DatePickerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  time: string | undefined;
  setTime: (time: string) => void;
}

export function DatePicker({ date, open, setDate, setOpen, time, setTime }: DatePickerProps) {
  return (
    <div className="arns-marketplace-ui ar:flex ar:gap-4">
      <div className="ar:flex ar:flex-col ar:gap-3">
        <Label htmlFor="date-picker" className="ar:text-neutral-50">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              size="small"
              className="ar:justify-between ar:leading-4.5 ar:font-normal"
            >
              {date ? date.toLocaleDateString() : 'Select date'}
              <ChevronDownIcon className="ar:size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="ar:w-auto ar:overflow-hidden ar:p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="ar:flex ar:flex-col ar:gap-3">
        <Label htmlFor="time-picker" className="ar:text-neutral-50">
          Time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          className="ar:[&::-webkit-calendar-picker-indicator]:hidden ar:[&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  );
}
