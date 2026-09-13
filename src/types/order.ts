export type OrderStatus = "completed" | "pending" | "cancelled";

export interface Order {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  status: OrderStatus;
  icon: string;
  paymentNumber: string;
  date: string;
  email: string;
  phone: string;
  accountType: string;
  region: string;
  warranty: string;
  deliveryMethod: string;
  discountCode?: string;
  finalPrice: number;
}
