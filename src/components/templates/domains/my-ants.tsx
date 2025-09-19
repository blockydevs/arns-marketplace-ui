import { Button } from '@/components/button';
import { Card } from '@/components/table/card';
import { Cell, CellWithBadge, CellWithPlaceholder, CellWithPrice, CellWithTimeLimit } from '@/components/table/cell';
import { DataTable, type DataTableStatus } from '@/components/table/data-table';
import { mapMobileColumns } from '@/components/table/utils';
import type { OwnedDomain } from '@/components/templates/domains/types';
import {
  checkIfItsEnding,
  mapListingStatusToLabel,
  mapListingTypeToColor,
  mapListingTypeToLabel
} from '@/components/templates/domains/utils';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/format-date';
import type { ColumnDef } from '@tanstack/react-table';
import { formatDistanceToNowStrict } from 'date-fns';

const desktopColumns: ColumnDef<OwnedDomain>[] = [
  {
    accessorKey: 'name',
    header: 'Domain Name',
    cell: ({ row }) => <Cell value={row.original.name} className="ar:line-clamp-2 ar:break-words" />
  },
  {
    accessorKey: 'price',
    header: 'Price/Bid',
    cell: ({ row }) =>
      row.original.price ? (
        <CellWithPrice
          value={`${row.original.price.value.toString()} ${row.original.price.symbol ?? 'ARIO'}`}
          desc={row.original.price.type === 'bid' ? 'Current bid' : 'Price'}
        />
      ) : (
        <CellWithPlaceholder />
      )
  },
  {
    accessorKey: 'endsDate',
    header: 'Ends in',
    cell: ({ row }) =>
      row.original.endDate ? (
        <CellWithTimeLimit
          isEnding={checkIfItsEnding(row.original.endDate)}
          value={formatDate(row.original.endDate)}
          formatedValue={formatDistanceToNowStrict(row.original.endDate)}
        />
      ) : (
        <CellWithPlaceholder
          value={row.original.type?.value === 'fixed' && row.original.status === 'listed' ? 'Infinite' : '-'}
        />
      )
  },
  {
    accessorKey: 'type',
    header: 'Listing type',
    cell: ({ row }) =>
      row.original.type ? (
        <CellWithBadge
          value={row.original.type.label ?? mapListingTypeToLabel(row.original.type.value)}
          color={row.original.type.highlightColor ?? mapListingTypeToColor(row.original.type.value)}
        />
      ) : null
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <Cell value={mapListingStatusToLabel(row.original.status)} />
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Button variant="secondary" className="ar:w-full" onClick={row.original.action}>
        {row.original.status === 'idle' ? 'Sell ANT' : 'View'}
      </Button>
    )
  }
];

const mobileColumns: ColumnDef<OwnedDomain>[] = [
  {
    id: 'id',
    cell: ({ row }) => (
      <Card
        items={mapMobileColumns(row, desktopColumns)}
        classNames={{
          container: cn({ 'ar:pt-0': row.index === 0 }),
          row: 'ar:last-of-type:col-span-2 ar:first-of-type:col-span-2'
        }}
      />
    )
  }
];

export interface Props extends DataTableStatus {
  data: OwnedDomain[];
}

export const MyANTsTable: React.FC<Props> = ({ data, isPending, error }) => {
  return (
    <div className="arns-marketplace-ui">
      <div className="ar:md:hidden">
        <DataTable hideHeader columns={mobileColumns} data={data} isPending={isPending} error={error} />
      </div>
      <div className="ar:hidden ar:md:block">
        <DataTable
          columns={desktopColumns}
          data={data}
          className="ar:table-fixed ar:font-base"
          isRowDisabled={(row) => row.original.status === 'sold'}
          isPending={isPending}
          error={error}
        />
      </div>
    </div>
  );
};
