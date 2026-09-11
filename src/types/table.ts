import type { ReactNode } from "react";

export interface TableColumn<T> {
  key: keyof T;
  title: string;
  render?: (row: T) => ReactNode;
}
