import { Cell } from '@/components/table/cell';
import { DataTable, type DataTableStatus } from '@/components/table/data-table';
import type { ColumnDef } from '@tanstack/react-table';

export interface Schedule {
  date: string;
  price: number;
}

const desktopColumns: ColumnDef<Schedule>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => <Cell value={row.original.date} className="ar:line-clamp-2 ar:break-words" />
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => <Cell value={`${row.original.price.toString()} ARIO`} />
  }
];

export interface Props extends DataTableStatus {
  data: Schedule[];
}

export const DecreaseScheduleTable: React.FC<Props> = ({ data, isPending, error }) => {
  return (
    <div className="arns-marketplace-ui">
      <DataTable
        columns={desktopColumns}
        data={data}
        className="ar:table-fixed ar:font-base"
        isPending={isPending}
        error={error}
      />
    </div>
  );
};
