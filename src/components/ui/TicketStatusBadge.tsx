import type { Ticket } from "../../types/ticket";

function TicketStatusBadge({ status }: { status: Ticket["status"] }) {
  const statusConfig = {
    answered: {
      label: "پاسخ داده شده",
      className: "bg-emerald-100 text-success",
    },
    pending: {
      label: "در حال بررسی",
      className: "bg-orange-100 text-warning",
    },
    closed: {
      label: "بسته شده",
      className: "bg-gray-100 text-dawn",
    },
  };

  const config = statusConfig[status] || statusConfig.closed;

  return (
    <span
      className={`font-yekanBold inline-flex whitespace-nowrap rounded-full px-4 py-2 text-xs ${config.className}`}
    >
      {config.label}
    </span>
  );
}

export default TicketStatusBadge;
