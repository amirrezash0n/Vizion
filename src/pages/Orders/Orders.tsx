import DataTable from "../../components/common/DataTable/DataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import { orders } from "../../data/orders";
import { orderColumns } from "./OrdersColumns";
import SearchBox from "./SearchBox";

export default function Orders() {
  return (
    <>
      <div className="flex justify-between items-start flex-wrap">
        <PageHeader />
        <SearchBox />
      </div>
      <DataTable data={orders} columns={orderColumns} pageSize={7} />
    </>
  );
}
