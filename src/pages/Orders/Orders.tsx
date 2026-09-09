import orders from "../../data/orders";
import OrdersTable from "./OrdersTable";

export default function Orders() {
  return <OrdersTable orders={orders} />;
}
