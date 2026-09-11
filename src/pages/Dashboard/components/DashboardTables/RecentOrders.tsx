import DataTable from "../../../../components/common/DataTable/DataTable";
import { orders } from "../../../../data/orders";
import { orderColumns } from "../../../Orders/OrdersColumns";
import DashboardTableHeader from "./DashboardTableHeader";

export default function RecentOrders() {
  return (
    <>
      <DashboardTableHeader
        title="لیست سفارشات اخیر شما"
        linkTo="/orders"
        linkText="همه سفارشات"
      />
      <DataTable
        data={orders.slice(-3)}
        columns={orderColumns}
        pagination={false}
      />
    </>
  );
}
