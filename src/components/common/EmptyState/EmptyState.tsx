// src/components/common/EmptyState/EmptyState.tsx
import { FiSearch } from "react-icons/fi";
import Button from "../Button/Button";

interface EmptyStateProps {
  search: string;
  onClearSearch: () => void;
}

export default function EmptyState({ search, onClearSearch }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 gap-5 py-16">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-balticSea-100">
        <FiSearch size={40} className="text-dawn" />
      </div>

      <div className="text-center space-y-2">
        <h3 className="font-yekanBold text-xl text-balticSea-400">
          نتیجه‌ای پیدا نشد
        </h3>
        <p className="font-morabbaMedium text-sm text-dawn">
          سفارشی با عنوان «
          <span className="text-primary font-yekanMedium">{search}</span>» یافت
          نشد.
        </p>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={onClearSearch}
        className="mt-2 font-yekanMedium"
      >
        پاک کردن جستجو
      </Button>
    </div>
  );
}
