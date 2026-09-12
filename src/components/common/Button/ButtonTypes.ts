import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "icon"
    | "outline"
    | "pagination"
    | "paginationActive"
    | "link"
    | "soft"
    | "danger";
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "icon"
    | "full"
    | "pagination"
    | "link"
    | "tiny";
}
