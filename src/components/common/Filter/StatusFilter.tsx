import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { cn } from "../../../utils/class.utils";

export interface StatusOption {
  value: string;
  label: string;
}

interface StatusFilterProps {
  label: string;
  options: StatusOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function StatusFilter({
  label,
  options,
  value,
  onChange,
  className = "",
}: StatusFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);
  const isActive = value !== "all";

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 xs:px-4 py-2 rounded-xl",
          "bg-white border transition-colors",
          "font-yekanMedium text-xs xs:text-sm",
          isOpen || isActive
            ? "border-primary text-primary"
            : "border-cloud text-balticSea-400 hover:border-primary",
        )}
        dir="rtl"
      >
        <span className="text-dawn">{label}:</span>
        <span
          className={cn(
            isActive ? "font-yekanBold text-primary" : "font-yekanBold",
          )}
        >
          {selectedOption?.label || "همه"}
        </span>
        <FiChevronDown
          size={14}
          className={cn(
            "text-dawn transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full mt-2 right-0 min-w-45 bg-white rounded-xl border border-cloud shadow-lg z-50 overflow-hidden animate-fadeIn"
          dir="rtl"
        >
          {options.map((option) => {
            const isSelected = value === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between gap-3 text-right px-4 py-2.5 font-yekanMedium text-xs xs:text-sm transition-colors",
                  isSelected
                    ? "bg-primary/10 text-primary font-yekanBold"
                    : "text-balticSea-400 hover:bg-offWhite",
                )}
              >
                <span>{option.label}</span>
                {isSelected && <FiCheck size={14} className="text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
