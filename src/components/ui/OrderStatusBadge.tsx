import type { Order } from "../../types/order";

interface OrderStatusBadgeProps {
  status: Order["status"];
}

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const isCompleted = status === "completed";

  return (
    <span
      className={`font-yekanBold inline-flex whitespace-nowrap rounded-full px-4 py-2 text-xs ${
        isCompleted
          ? "bg-emerald-100 text-success"
          : "bg-orange-100 text-warning"
      }`}
    >
      {isCompleted ? "تکمیل شده" : "در حال انجام"}
    </span>
  );
}
