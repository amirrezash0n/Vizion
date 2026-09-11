import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import type { TableColumn } from "../../../types/table";

interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  pageSize?: number;
  pagination?: boolean;
}

export default function DataTable<T>({
  data,
  columns,
  pageSize = 5,
  pagination = true,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedData = pagination
    ? data.slice(startIndex, startIndex + pageSize)
    : data;

  return (
    <div className="w-full" dir="rtl">
      <div className="w-full overflow-x-auto rounded-2xl">
        <table className="w-full min-w-225 border-collapse">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="whitespace-nowrap bg-gray-50 px-6 py-4 text-right text-sm font-medium text-gray-600"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-gray-100 bg-white">
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4 text-right text-sm text-gray-700"
                  >
                    {column.render
                      ? column.render(row)
                      : String(row[column.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
