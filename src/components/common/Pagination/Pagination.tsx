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
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 py-5" dir="rtl">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-gray-200 px-3 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40"
      >
        قبلی
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm transition-colors ${
              currentPage === page
                ? "bg-red-500 text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-gray-200 px-3 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40"
      >
        بعدی
      </button>
    </div>
  );
}
