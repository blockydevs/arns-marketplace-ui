import { Button } from '@/components/button';
import { Card } from '@/components/table/card';
import { Cell, CellWithBadge, CellWithPlaceholder, CellWithPrice, CellWithTimeLimit } from '@/components/table/cell';
import { DataTable, type DataTableStatus } from '@/components/table/data-table';
import { mapMobileColumns } from '@/components/table/utils';
import type { Domain } from '@/components/templates/domains/types';
import { checkIfItsEnding, mapListingTypeToColor, mapListingTypeToLabel } from '@/components/templates/domains/utils';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/format-date';
import type { ColumnDef } from '@tanstack/react-table';
import { formatDistanceToNowStrict } from 'date-fns';

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
    header: 'Ends in',
    cell: ({ row }) => {
      const hasExpired = row.original.endDate ? new Date() > new Date(row.original.endDate) : false;

      if (hasExpired) {
        return <CellWithPlaceholder value="Processing" />;
      }

      if (row.original.endDate) {
        return (
          <CellWithTimeLimit
            isEnding={checkIfItsEnding(row.original.endDate)}
            value={formatDate(row.original.endDate)}
            formatedValue={formatDistanceToNowStrict(row.original.endDate)}
          />
        );
      }

      return <CellWithPlaceholder value={row.original.type.value === 'fixed' ? 'Infinite' : '-'} />;
    }
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      let buttonText = 'Place bid'; // Default for auctions
      if (row.original.price.type === 'buyout') {
        buttonText = row.original.ownershipType === 'lease' ? 'Lease now' : 'Buy now';
      }

      return (
        <Button variant="secondary" className="ar:w-full" onClick={row.original.action}>
          {buttonText}
        </Button>
      );
    }
  }
];

const mobileColumns: ColumnDef<Domain>[] = [
  {
    id: 'id',
    cell: ({ row }) => (
      <Card
        items={mapMobileColumns(row, desktopColumns)}
        classNames={{
          container: cn({ 'ar:pt-0': row.index === 0 })
        }}
      />
    )
  }
];

export interface Props extends DataTableStatus {
  data: Domain[];
}

export const ActiveListingTable: React.FC<Props> = ({ data, isPending, error }) => {
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
