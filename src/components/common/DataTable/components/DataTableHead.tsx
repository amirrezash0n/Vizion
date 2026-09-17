import type { TableColumn } from "../../../../types/table.types";

interface DataTableHeadProps<T> {
  columns: TableColumn<T>[];
}

export default function DataTableHead<T>({ columns }: DataTableHeadProps<T>) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={String(column.key)}
            className="bg-offWhite px-6 py-4 text-right font-morabbaMedium font-bold whitespace-nowrap text-balticSea-400"
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}
