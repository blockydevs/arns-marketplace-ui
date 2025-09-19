import { Button } from '@/components/button';
import { Cell } from '@/components/table/cell';
import { DataTable, type DataTableStatus } from '@/components/table/data-table';
import type { Bid } from '@/components/templates/domains/types';
import { shortenAddress } from '@/components/templates/domains/utils';
import type { ColumnDef } from '@tanstack/react-table';

const desktopColumns: ColumnDef<Bid>[] = [
  {
    accessorKey: 'bidder',
    header: 'Bidder wallet',
    cell: ({ row }) => (
      <Button variant="link" className="ar:px-0 ar:text-highlight-blue">
        {shortenAddress(row.original.bidder)}
      </Button>
    )
  },
  {
    accessorKey: 'date',
    header: 'Date of bid',
    cell: ({ row }) => <Cell value={row.original.date} className="ar:line-clamp-2 ar:break-words" />
  },
  {
    accessorKey: 'price',
    header: () => <div className="ar:text-right">Bid price</div>,
    cell: ({ row }) => <Cell value={row.original.price} className="ar:line-clamp-2 ar:text-right ar:break-words" />
  }
];

export interface Props extends DataTableStatus {
  data: Bid[];
}

export const BidsTable: React.FC<Props> = ({ data, isPending, error }) => (
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
