import { FiSearch } from "react-icons/fi";
import { cn } from "../../utils/helpers";
import type { InputHTMLAttributes } from "react";

interface SearchBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function SearchBox({
  className = "",
  placeholder = "جستجو محصول",
  ...rest
}: SearchBoxProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 w-60 h-11 px-4 py-3",
        "bg-gray-100 rounded-2xl",
        "transition-all mb-4 xs:mb-0",
        className,
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          "flex-1 bg-transparent outline-none",
          "font-morabbaMedium text-sm text-balticSea-400",
          "placeholder:text-dawn placeholder:font-yekanRegular",
        )}
        {...rest}
      />
      <FiSearch size={20} className="text-balticSea-400 shrink-0" />
    </div>
  );
}
