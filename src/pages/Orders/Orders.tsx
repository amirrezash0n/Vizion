import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { orders } from "../../data/orders";
import { orderColumns } from "./OrdersColumns";
import DataTable from "../../components/common/DataTable/DataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import SearchBox from "./SearchBox";
import NoDataState from "../../components/common/EmptyState/NoDataState";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

export default function Orders() {
  const [search, setSearch] = useState("");
  const filteredOrders = useSearch(orders, search, "title");
  const hasOrders = orders.length > 0;
  return (
    <>
      <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
        <PageHeader />
        {hasOrders ? (
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : null}
      </div>

      {orders.length === 0 ? (
        <NoDataState icon={FiShoppingBag} title="هنوز سفارشی ثبت نشده!" />
      ) : filteredOrders.length === 0 ? (
        <NoDataState icon={FiSearch} title="نتیجه‌ای پیدا نشد" />
      ) : (
        <DataTable data={filteredOrders} columns={orderColumns} pageSize={7} />
      )}
    </>
  );
}
