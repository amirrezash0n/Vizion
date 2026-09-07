import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/helpers";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "icon" | "outline";
  size?: "sm" | "md" | "lg" | "icon" | "full";
}

const variantStyles = {
  primary: "bg-primary text-white hover:bg-opacity-80",
  secondary: "bg-text-primary text-white hover:bg-opacity-80",
  ghost: "bg-transparent text-white hover:bg-white/10",
  icon: "bg-text-primary text-white hover:bg-opacity-80",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  icon: "size-10",
  full: "w-full px-4 py-2 text-base",
};

const baseStyles =
  "flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50";

export default function Button({
  onClick,
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
