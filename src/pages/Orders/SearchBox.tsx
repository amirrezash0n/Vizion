import { FiSearch, FiX } from "react-icons/fi";
import { cn } from "../../utils/class.utils";
import type { InputHTMLAttributes } from "react";
import Button from "../../components/common/Button/Button";

interface SearchBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onClear?: () => void;
}

export default function SearchBox({
  className = "",
  placeholder = "جستجو محصول",
  value,
  onClear,
  ...rest
}: SearchBoxProps) {
  const hasValue = Boolean(value);

  return (
    <div
      className={cn(
        "flex h-9 w-60 items-center gap-3 px-4 py-3",
        "rounded-2xl bg-gray-100",
        "mb-4 transition-all xs:mb-0",
        className,
      )}
    >
      <FiSearch size={20} className="shrink-0 text-slate" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={cn(
          "flex-1 bg-transparent outline-none",
          "font-morabbaMedium text-sm text-dark",
          "placeholder:font-yekanRegular placeholder:text-dawn",
        )}
        {...rest}
      />
      {hasValue && onClear && (
        <Button
          variant="fix"
          size="link"
          type="button"
          onClick={onClear}
          aria-label="پاک کردن جستجو"
        >
          <FiX size={16} />
        </Button>
      )}
    </div>
  );
}
