import type { Order } from "../../types/order";

interface OrderStatusBadgeProps {
  status: Order["status"];
}

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const statusConfig = {
    completed: {
      label: "تکمیل شده",
      className: "bg-emerald-100 text-success",
    },
    pending: {
      label: "در حال انجام",
      className: "bg-orange-100 text-warning",
    },
    cancelled: {
      label: "لغو شده",
      className: "bg-red-100 text-danger",
    },
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <span
      className={`font-yekanBold inline-flex whitespace-nowrap rounded-full px-4 py-2 text-xs ${config.className}`}
    >
      {config.label}
    </span>
  );
}
