import type { TableColumn } from "../../../../types/table.types";

interface DataTableBodyProps<T> {
  paginatedData: T[];
  columns: TableColumn<T>[];
  getRowId?: (row: T) => string | number;
}

export default function DataTableBody<T>({
  paginatedData,
  columns,
  getRowId,
}: DataTableBodyProps<T>) {
  return (
    <tbody>
      {paginatedData.map((row, rowIndex) => (
        <tr
          key={getRowId ? getRowId(row) : rowIndex}
          className="border-t border-gray-100 bg-white"
        >
          {columns.map((column) => (
            <td
              key={String(column.key)}
              className="px-6 py-4 text-right font-yekanMedium text-sm text-balticSea-400"
            >
              {column.render ? column.render(row) : String(row[column.key])}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
