import type { TicketStatusOptions } from "../types";

export const STATUS_OPTIONS_TICKETS: TicketStatusOptions[] = [
  { value: "all", label: "همه" },
  { value: "answered", label: "پاسخ داده شده" },
  { value: "pending", label: "در حال بررسی" },
  { value: "closed", label: "بسته شده" },
];
