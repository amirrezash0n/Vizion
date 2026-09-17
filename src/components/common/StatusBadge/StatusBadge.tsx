import type { StatusConfig } from "../../../types/index.types";

interface StatusBadgeProps<T extends string> {
  status: T;
  statusConfig: Record<T, StatusConfig>;
  fallbackStatus: T;
}

export default function StatusBadge<T extends string>({
  status,
  statusConfig,
  fallbackStatus,
}: StatusBadgeProps<T>) {
  const config = statusConfig[status] || statusConfig[fallbackStatus];

  return (
    <span
      className={`inline-flex rounded-full px-4 py-2 font-yekanBold text-xs whitespace-nowrap ${config.className}`}
    >
      {config.label}
    </span>
  );
}
