import Button from "../Button/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-5" dir="rtl">
      <Button
        type="button"
        variant="pagination"
        size="pagination"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        قبلی
      </Button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <Button
            key={page}
            type="button"
            variant={isActive ? "paginationActive" : "pagination"}
            size="pagination"
            className="w-9"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        );
      })}

      <Button
        type="button"
        variant="pagination"
        size="pagination"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        بعدی
      </Button>
    </div>
  );
}
