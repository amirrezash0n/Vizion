import { useState, useMemo } from "react";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import DataTable from "../../components/common/DataTable/DataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import NoDataState from "../../components/common/EmptyState/NoDataState";
import SearchBox from "./SearchBox";
import StatusFilter from "../../components/common/Filter/StatusFilter";
import { orders } from "../../data/orders";
import { orderColumns } from "./OrdersColumns";
import { STATUS_OPTIONS_ORDERS } from "../../constants/orderStatusOptions";

export default function Orders() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const filteredOrders = useMemo(() => {
    let result = orders;

    if (search.trim()) {
      const searchValue = search.trim().toLowerCase();
      result = result.filter((order) =>
        order.title.toLowerCase().includes(searchValue),
      );
    }

    if (statusFilter !== "all") {
      result = result.filter((order) => order.status === statusFilter);
    }

    return result;
  }, [search, statusFilter]);

  const hasOrders = orders.length > 0;

  return (
    <>
      <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
        <PageHeader />
        {hasOrders && (
          <div className="flex items-center gap-2 xs:gap-3">
            <SearchBox
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <StatusFilter
              label="وضعیت پرداخت"
              options={STATUS_OPTIONS_ORDERS}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
        )}
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
