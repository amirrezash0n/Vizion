import type { StatusConfig } from "../../../types";

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
      className={`font-yekanBold inline-flex whitespace-nowrap rounded-full px-4 py-2 text-xs ${config.className}`}
    >
      {config.label}
    </span>
  );
}
