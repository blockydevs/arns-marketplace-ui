import type { CellContext, ColumnDef, Row } from '@tanstack/react-table';

export const mapMobileColumns = <T>(row: Row<T>, columns: ColumnDef<T>[]) => {
  return columns.map((column) => ({
    header: column.header as string,
    cell:
      'cell' in column && typeof column.cell === 'function'
        ? (column.cell({ row } as CellContext<T, unknown>) as React.ReactNode)
        : null
  }));
};
