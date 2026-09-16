import { cn } from "../../../utils/class.utils";

export const styles = {
  button: (isOpen: boolean, isActive: boolean) =>
    cn(
      "flex items-center gap-2 px-3 xs:px-4 py-2 rounded-xl",
      "bg-white border transition-colors",
      "font-yekanMedium text-xs xs:text-sm",
      isOpen || isActive
        ? "border-primary text-primary"
        : "border-cloud text-balticSea-400 hover:border-primary",
    ),
  option: (isSelected: boolean) =>
    cn(
      "w-full flex items-center justify-between gap-3 text-right px-4 py-2.5",
      "font-yekanMedium text-xs xs:text-sm transition-colors",
      isSelected
        ? "bg-primary/10 text-primary font-yekanBold"
        : "text-balticSea-400 hover:bg-offWhite",
    ),
};
