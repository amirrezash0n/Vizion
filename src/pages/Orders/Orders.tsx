import DataTable from "../../components/common/DataTable/DataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import { orders } from "../../data/orders";
import { orderColumns } from "./OrdersColumns";

export default function Orders() {
  return (
    <>
      <PageHeader />
      <DataTable data={orders} columns={orderColumns} pageSize={8} />
    </>
  );
}
