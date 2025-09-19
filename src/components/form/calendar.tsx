import { useEffect, useRef } from 'react';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import { Button, buttonVariants } from '@/components/button';
import { cn } from '@/utils/cn';
import { DayPicker, getDefaultClassNames, type DayButton } from 'react-day-picker';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'ar:group/calendar ar:bg-neutral-950 ar:p-3 ar:font-base ar:[--cell-size:--spacing(8)] ar:[[data-slot=card-content]_&]:bg-transparent ar:[[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters
      }}
      classNames={{
        root: cn('ar:w-fit ar:relative', defaultClassNames.root),
        // months: cn('ar:flex ar:gap-4 ar:flex-col ar:md:flex-row ar:relative', defaultClassNames.months),
        // month: cn('ar:flex ar:flex-col ar:w-full ar:gap-4', defaultClassNames.month),
        nav: cn('ar:flex ar:items-center ar:mb-1 ar:gap-1 ar:w-full ar:justify-between', defaultClassNames.nav),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'ar:size-(--cell-size) ar:aria-disabled:opacity-50 ar:p-0 ar:select-none',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'ar:size-(--cell-size) ar:aria-disabled:opacity-50 ar:p-0 ar:select-none',
          defaultClassNames.button_next
        ),
        month_caption: cn(
          'ar:text-center ar:absolute ar: ar:top-4.5 ar:text-sm ar:font-medium ar:left-1/2 ar:-translate-x-1/2',
          defaultClassNames.month_caption
        ),
        // dropdowns: cn(
        //   'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
        //   defaultClassNames.dropdowns
        // ),
        // dropdown_root: cn(
        //   'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
        //   defaultClassNames.dropdown_root
        // ),
        // dropdown: cn('absolute bg-popover inset-0 opacity-0', defaultClassNames.dropdown),
        // caption_label: cn(
        //   'select-none font-medium',
        //   captionLayout === 'label'
        //     ? 'text-sm'
        //     : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5',
        //   defaultClassNames.caption_label
        // ),
        table: 'ar:w-full ar:border-collapse',
        weekdays: cn('ar:flex ar:w-full', defaultClassNames.weekdays),
        weekday: cn(
          'ar:text-neutral-400 ar:rounded-md  ar:size-auto ar:w-full ar:min-w-(--cell-size) ar:pb-0.5 ar:font-normal ar:text-xs ar:select-none',
          defaultClassNames.weekday
        ),
        week: cn('ar:flex ar:w-full ar:mt-2', defaultClassNames.week),
        week_number_header: cn(
          'ar:select-none ar:aspect-square ar:w-(--cell-size)',
          defaultClassNames.week_number_header
        ),
        week_number: cn('ar:select-none ar:text-neutral-300', defaultClassNames.week_number),
        day: cn(
          'ar:relative ar:w-full ar:h-full ar:p-0 ar:text-center ar:[&:first-child[data-selected=true]_button]:rounded-l-md ar:[&:last-child[data-selected=true]_button]:rounded-r-md ar:group/day ar:aspect-square ar:select-none',
          defaultClassNames.day
        ),
        range_start: cn('ar:rounded-l-md ar:bg-neutral-500', defaultClassNames.range_start),
        range_middle: cn('ar:rounded-none', defaultClassNames.range_middle),
        range_end: cn('ar:rounded-r-md ar:bg-neutral-500', defaultClassNames.range_end),
        today: cn('ar:text-white ar:rounded-md ar:data-[selected=true]:rounded-none', defaultClassNames.today),
        outside: cn('ar:[&>button]:text-neutral-500 ar:aria-selected:text-neutral-600', defaultClassNames.outside),
        disabled: cn('ar:opacity-50', defaultClassNames.disabled),
        hidden: cn('ar:invisible', defaultClassNames.hidden),
        ...classNames
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon className={cn('ar:size-4', className)} {...props} />;
          }

          if (orientation === 'right') {
            return <ChevronRightIcon className={cn('ar:size-4', className)} {...props} />;
          }

          return <ChevronDownIcon className={cn('ar:size-4', className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="ar:flex ar:size-(--cell-size) ar:items-center ar:justify-center ar:text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components
      }}
      {...props}
    />
  );
}

function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="mini"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'ar:flex ar:aspect-square ar:size-auto ar:w-full ar:min-w-(--cell-size) ar:flex-col ar:gap-1 ar:text-sm ar:leading-none ar:font-normal ar:group-data-[focused=true]/day:relative ar:group-data-[focused=true]/day:z-10 ar:group-data-[focused=true]/day:border-neutral-300 ar:group-data-[focused=true]/day:ring-[3px] ar:group-data-[focused=true]/day:ring-neutral-300/50 ar:data-[range-end=true]:rounded-md ar:data-[range-end=true]:rounded-r-md ar:data-[range-end=true]:bg-primary ar:data-[range-end=true]:text-neutral-950 ar:data-[range-middle=true]:rounded-none ar:data-[range-middle=true]:bg-neutral-800 ar:data-[range-middle=true]:text-white ar:data-[range-start=true]:rounded-md ar:data-[range-start=true]:rounded-l-md ar:data-[range-start=true]:bg-primary ar:data-[range-start=true]:text-neutral-950 ar:data-[selected-single=true]:bg-primary ar:data-[selected-single=true]:text-neutral-950 ar:[&>span]:text-xs ar:[&>span]:opacity-70',
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
