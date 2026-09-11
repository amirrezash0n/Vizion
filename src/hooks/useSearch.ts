import { useMemo } from "react";

export function useSearch<T>(items: T[], search: string, key: keyof T): T[] {
  return useMemo(() => {
    const searchValue = search.trim().toLowerCase();
    if (!searchValue) return items;
    return items.filter((item) =>
      String(item[key]).toLowerCase().includes(searchValue),
    );
  }, [items, search, key]);
}
