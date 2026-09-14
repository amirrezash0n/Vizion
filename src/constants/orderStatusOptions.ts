import type { OrderStatusOptions } from "../types";

export const STATUS_OPTIONS_ORDERS: OrderStatusOptions[] = [
  { value: "all", label: "همه" },
  { value: "completed", label: "تکمیل شده" },
  { value: "pending", label: "در حال انجام" },
  { value: "cancelled", label: "لغو شده" },
];
