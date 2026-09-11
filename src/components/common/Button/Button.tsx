import { cn } from "../../../utils/helpers";
import { baseStyles, sizeStyles, variantStyles } from "./ButtonStyles";
import type { ButtonProps } from "./ButtonTypes";

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
