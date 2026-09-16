import Button from "../Button/Button";
import { generatePagination } from "./Pagination.utils";
import type { PaginationProps } from "./Pagination.types";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingsCount = 1,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const paginationRange = generatePagination(
    currentPage,
    totalPages,
    siblingsCount,
  );

  return (
    <div
      className="flex items-center justify-center gap-1.5 xs:gap-2 py-4 xs:py-5 flex-wrap"
      dir="rtl"
    >
      {/* Prev Button */}
      <Button
        type="button"
        variant="pagination"
        size="pagination"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="font-yekanMedium text-xs xs:text-sm px-2 xs:px-3"
      >
        <span className="hidden xs:inline">قبلی</span>
        <span className="xs:hidden">‹</span>
      </Button>

      {/* Page Numbers */}
      {paginationRange.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`dots-${index}`}
              className="flex h-8 w-8 xs:h-9 xs:w-9 items-center justify-center text-xs xs:text-sm text-dawn font-yekanMedium"
            >
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isActive = currentPage === pageNumber;

        return (
          <Button
            key={pageNumber}
            type="button"
            variant={isActive ? "paginationActive" : "pagination"}
            size="pagination"
            className="w-8 h-8 xs:w-9 xs:h-9 text-xs xs:text-sm font-yekanMedium"
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber.toLocaleString("fa-IR")}
          </Button>
        );
      })}

      {/* Next Button */}
      <Button
        type="button"
        variant="pagination"
        size="pagination"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="font-yekanMedium text-xs xs:text-sm px-2 xs:px-3"
      >
        <span className="hidden xs:inline">بعدی</span>
        <span className="xs:hidden">›</span>
      </Button>
    </div>
  );
}
