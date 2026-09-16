import type { ReactNode } from "react";
import { cn } from "../../../utils/class.utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  shrink?: boolean;
}

export default function Badge({
  children,
  className = "",
  shrink = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-lg px-2.5 py-1 font-yekanBold text-[10px]",
        "xs:px-3 xs:py-1.5 xs:text-xs",
        shrink && "shrink-0",
        className,
      )}
    >
      {children}
    </span>
  );
}
