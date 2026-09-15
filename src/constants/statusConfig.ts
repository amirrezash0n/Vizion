import type { StatusConfig } from "../types";
import type { Order } from "../types/order";
import type { Ticket } from "../types/ticket";

// Order Status
export const ORDER_STATUS_CONFIG: Record<Order["status"], StatusConfig> = {
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

export const TICKET_STATUS_CONFIG: Record<Ticket["status"], StatusConfig> = {
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

// Fallback Statuses
export const ORDER_FALLBACK_STATUS: Order["status"] = "pending";
export const TICKET_FALLBACK_STATUS: Ticket["status"] = "closed";
