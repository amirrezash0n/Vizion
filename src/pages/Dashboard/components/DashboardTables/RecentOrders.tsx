import { FiShoppingBag } from "react-icons/fi";
import DataTable from "../../../../components/common/DataTable/DataTable";
import NoDataState from "../../../../components/common/EmptyState/NoDataState";
import { orders } from "../../../../data/orders";
import { orderColumns } from "../../../Orders/OrdersColumns";
import DashboardTableHeader from "./DashboardTableHeader";

export default function RecentOrders() {
  const hasOrders = orders.length > 0;
  return (
    <>
      <DashboardTableHeader
        title="لیست سفارشات اخیر شما"
        linkTo="/orders"
        linkText="همه سفارشات"
        showLink={hasOrders}
      />
      {orders.length === 0 ? (
        <NoDataState
          icon={FiShoppingBag}
          title="هنوز سفارشی ثبت نشده!"
          dashboard={true}
        />
      ) : (
        <DataTable
          data={orders.slice(-3)}
          columns={orderColumns}
          pagination={false}
        />
      )}
    </>
  );
}
