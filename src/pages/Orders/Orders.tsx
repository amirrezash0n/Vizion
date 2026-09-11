import { useState } from "react";
import DataTable from "../../components/common/DataTable/DataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import { orders } from "../../data/orders";
import { orderColumns } from "./OrdersColumns";
import SearchBox from "./SearchBox";
import { useSearch } from "../../hooks/useSearch";

export default function Orders() {
  const [search, setSearch] = useState("");
  const filteredOrders = useSearch(orders, search, "title");
  return (
    <>
      <div className="flex justify-between items-start flex-wrap">
        <PageHeader />

        <SearchBox value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {filteredOrders.length > 0 ? (
        <DataTable data={filteredOrders} columns={orderColumns} pageSize={7} />
      ) : (
        <div className="flex min-h-40 items-center justify-center">
          <p className="text-sm text-balticSea-400">
            سفارشی با عنوان «{search}» پیدا نشد.
          </p>
        </div>
      )}
    </>
  );
}
