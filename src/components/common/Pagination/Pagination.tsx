import Button from "../Button/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingsCount?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingsCount = 1,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const generatePagination = (): (number | string)[] => {
    const totalNumbers = siblingsCount * 2 + 5;

    if (totalPages <= totalNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingsCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "...", totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingsCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1,
      );
      return [1, "...", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i,
      );
      return [1, "...", ...middleRange, "...", totalPages];
    }

    return [];
  };

  const paginationRange = generatePagination();

  return (
    <div
      className="flex items-center justify-center gap-1.5 xs:gap-2 py-4 xs:py-5 flex-wrap"
      dir="rtl"
    >
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
