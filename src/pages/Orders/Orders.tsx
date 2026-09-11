import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { orders } from "../../data/orders";
import { orderColumns } from "./OrdersColumns";
import DataTable from "../../components/common/DataTable/DataTable";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import SearchBox from "./SearchBox";

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
        <EmptyState search={search} onClearSearch={() => setSearch("")} />
      )}
    </>
  );
}
