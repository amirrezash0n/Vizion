import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { cn } from "../../../utils/class.utils";
import { styles } from "./StatusFilterStyles";
import type { StatusFilterProps } from "./StatusFilter.types";

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

  if (options.length === 0) return null;

  const selectedOption = options.find((opt) => opt.value === value);
  const isActive = value !== "all";

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button(isOpen, isActive)}
        dir="rtl"
        title={`${label}: ${selectedOption?.label || "همه"}`}
      >
        <span className="shrink-0 text-dawn">{label}:</span>
        <span
          className={cn("truncate font-yekanBold", isActive && "text-primary")}
        >
          {selectedOption?.label || "همه"}
        </span>
        <FiChevronDown
          size={14}
          className={cn(
            "shrink-0 text-dawn transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 z-50 mt-2 w-full min-w-max animate-fadeIn overflow-hidden rounded-xl border border-cloud bg-white shadow-lg"
          dir="rtl"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={styles.option(value === option.value)}
            >
              <span>{option.label}</span>
              {value === option.value && (
                <FiCheck size={14} className="text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
