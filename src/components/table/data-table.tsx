import { Spinner } from '@/components/spinner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table/table';
import { cn } from '@/utils/cn';
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef, type Row } from '@tanstack/react-table';

export interface DataTableStatus {
  isPending?: boolean;
  error?: string;
}

interface DataTableProps<TData, TValue> extends DataTableStatus {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  hideHeader?: boolean;
  adjustedSize?: boolean;
  isRowDisabled?: (row: Row<TData>) => boolean;
}

export const DataTable = <TData, TValue>({
  columns,
  data,
  className,
  hideHeader = false,
  adjustedSize = false,
  isPending = false,
  error,
  isRowDisabled
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Table className={className}>
      {!hideHeader && (
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    style={adjustedSize ? { width: header.getSize(), maxWidth: header.getSize() } : undefined}
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
      )}
      <TableBody>
        {isPending ? (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="ar:table-cell ar:h-24 ar:text-primary ar:[&>div]:flex ar:[&>div]:items-center ar:[&>div]:justify-center"
            >
              <Spinner className="ar:size-8" />
            </TableCell>
          </TableRow>
        ) : error ? (
          <TableRow>
            <TableCell colSpan={columns.length} className="ar:h-24 ar:text-center ar:text-red-500">
              {error}
            </TableCell>
          </TableRow>
        ) : table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
              className={cn('border-border-50 border-b', { 'ar:opacity-50': isRowDisabled?.(row) })}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  style={adjustedSize ? { width: cell.column.getSize(), maxWidth: cell.column.getSize() } : undefined}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="ar:h-24 ar:text-center ar:text-white">
              No results
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
