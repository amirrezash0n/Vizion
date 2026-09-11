export type OrderStatus = "completed" | "pending";

export interface Order {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  status: OrderStatus;
  icon: string;
  paymentNumber: string;
  date: string;
}
