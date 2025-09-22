import * as React from 'react';
import { cn } from '@/utils/cn';

const Table = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement> & { ref?: React.RefObject<HTMLTableElement | null> }) => (
  <div className="ar:relative ar:w-full ar:border-separate ar:overflow-auto ar:tracking-wide">
    <table ref={ref} className={cn('ar:w-full ar:caption-bottom ar:text-sm', className)} {...props} />
  </div>
);
Table.displayName = 'Table';

const TableHeader = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.RefObject<HTMLTableSectionElement | null> }) => (
  <thead ref={ref} className={cn('ar:[&_tr:last-child]:border-0', className)} {...props} />
);
TableHeader.displayName = 'TableHeader';

const TableBody = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.RefObject<HTMLTableSectionElement | null> }) => (
  <tbody ref={ref} className={cn(className)} {...props} />
);
TableBody.displayName = 'TableBody';

const TableFooter = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.RefObject<HTMLTableSectionElement | null> }) => (
  <tfoot ref={ref} className={cn(className)} {...props} />
);
TableFooter.displayName = 'TableFooter';

const TableRow = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement> & { ref?: React.RefObject<HTMLTableRowElement | null> }) => (
  <tr
    ref={ref}
    className={cn(
      'ar:border-b ar:border-b-neutral-800 ar:transition-colors ar:data-[state=selected]:bg-neutral-900',
      className
    )}
    {...props}
  />
);
TableRow.displayName = 'TableRow';

const TableHead = ({
  ref,
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement> & { ref?: React.RefObject<HTMLTableCellElement | null> }) => (
  <th
    ref={ref}
    className={cn(
      'ar:p-2 ar:text-left ar:align-middle ar:text-sm ar:font-medium ar:text-neutral-50 ar:[&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
);
TableHead.displayName = 'TableHead';

const TableCell = ({
  ref,
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement> & { ref?: React.RefObject<HTMLTableCellElement | null> }) => (
  <td
    ref={ref}
    className={cn('ar:px-2 ar:py-2.5 ar:align-middle ar:[&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
);
TableCell.displayName = 'TableCell';

const TableCaption = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCaptionElement> & { ref?: React.RefObject<HTMLTableCaptionElement | null> }) => (
  <caption ref={ref} className={cn('ar:mt-4 ar:text-sm', className)} {...props} />
);
TableCaption.displayName = 'TableCaption';

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
