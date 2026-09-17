// src/components/common/DataTable/DataTable.tsx
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import type { TableColumn } from "../../../types/table.types";
import DataTableHead from "./components/DataTableHead";
import DataTableBody from "./components/DataTableBody";

interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  pageSize?: number;
  pagination?: boolean;
  dashboard?: boolean;
  getRowId?: (row: T) => string | number;
}

export default function DataTable<T>({
  data,
  columns,
  pageSize = 5,
  pagination = true,
  dashboard = false,
  getRowId,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const safeCurrentPage = Math.min(currentPage, totalPages) || 1;
  const startIndex = (safeCurrentPage - 1) * pageSize;

  const paginatedData = pagination
    ? data.slice(startIndex, startIndex + pageSize)
    : data;

  return (
    <div className={`w-full ${dashboard ? "" : "h-150.25"} animate-fadeIn`}>
      <div className="scrollbar-hide-mobile size-full overflow-x-auto rounded-2xl">
        <table className="w-full min-w-225 border-collapse">
          <DataTableHead columns={columns} />
          <DataTableBody
            paginatedData={paginatedData}
            columns={columns}
            getRowId={getRowId}
          />
        </table>
      </div>

      {pagination && (
        <Pagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
