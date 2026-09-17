import { FiSearch } from "react-icons/fi";
import { cn } from "../../utils/class.utils";
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
        "flex h-9 w-60 items-center gap-3 px-4 py-3",
        "rounded-2xl bg-gray-100",
        "mb-4 transition-all xs:mb-0",
        className,
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          "flex-1 bg-transparent outline-none",
          "font-morabbaMedium text-sm text-balticSea-400",
          "placeholder:font-yekanRegular placeholder:text-dawn",
        )}
        {...rest}
      />
      <FiSearch size={20} className="shrink-0 text-balticSea-400" />
    </div>
  );
}
