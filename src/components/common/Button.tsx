import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export default function Button({
  onClick,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
}
