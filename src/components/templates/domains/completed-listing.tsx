import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import { Card } from '@/components/table/card';
import { Cell, CellWithBadge, CellWithPrice } from '@/components/table/cell';
import { DataTable, type DataTableStatus } from '@/components/table/data-table';
import { mapMobileColumns } from '@/components/table/utils';
import type { Domain } from '@/components/templates/domains/types';
import { mapListingTypeToColor, mapListingTypeToLabel } from '@/components/templates/domains/utils';
import { Button } from '@/main';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/format-date';
import type { ColumnDef } from '@tanstack/react-table';
import { formatDistance } from 'date-fns';

const desktopColumns: ColumnDef<Domain>[] = [
  {
    accessorKey: 'name',
    header: 'Domain Name',
    cell: ({ row }) => <Cell value={row.original.name} className="ar:line-clamp-2 ar:break-words" />
  },
  {
    accessorKey: 'price',
    header: 'Price/Bid',
    cell: ({ row }) => (
      <CellWithPrice
        value={`${row.original.price.value.toString()} ${row.original.price.symbol ?? 'ARIO'}`}
        desc={row.original.price.type === 'bid' ? 'Current bid' : 'Price'}
      />
    )
  },
  {
    accessorKey: 'createdAt',
    header: 'Duration',
    cell: ({ row }) => {
      let value = '-';

      if (row.original.createdAt && row.original.endDate) {
        value = formatDistance(row.original.endDate, row.original.createdAt);
      }

      return <Cell value={value} />;
    }
  },
  {
    accessorKey: 'type',
    header: 'Listing type',
    cell: ({ row }) => (
      <CellWithBadge
        value={row.original.type.label ?? mapListingTypeToLabel(row.original.type.value)}
        color={row.original.type.highlightColor ?? mapListingTypeToColor(row.original.type.value)}
      />
    )
  },
  {
    accessorKey: 'endsDate',
    header: 'End date',
    cell: ({ row }) => <Cell value={formatDate(row.original.endDate ?? '-')} />
  },
  {
    accessorKey: 'action',
    header: '',
    cell: ({ row }) => (
      <Button
        variant="ghost"
        icon={<ArrowLeftIcon width={16} height={16} className="ar:rotate-180" />}
        iconPlacement="left"
        className="ar:flex ar:justify-start ar:md:justify-self-end"
        onClick={row.original.action}
      />
    )
  }
];

const mobileColumns: ColumnDef<Domain>[] = [
  {
    id: 'id',
    cell: ({ row }) => (
      <Card
        items={mapMobileColumns(row, desktopColumns)}
        classNames={{
          container: cn({ 'ar:pt-0': row.index === 0 }),
          row: 'ar:first-of-type:col-span-2 ar:last-of-type:col-span-1'
        }}
      />
    )
  }
];

export interface Props extends DataTableStatus {
  data: Domain[];
}

export const CompletedListingTable: React.FC<Props> = ({ data, isPending, error }) => {
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
          isPending={isPending}
          error={error}
        />
      </div>
    </div>
  );
};
