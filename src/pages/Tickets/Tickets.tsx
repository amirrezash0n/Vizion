import { useState, useMemo } from "react";
import { Link } from "react-router";
import { FiInbox } from "react-icons/fi";
import Button from "../../components/common/Button/Button";
import DataTable from "../../components/common/DataTable/DataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import NoDataState from "../../components/common/EmptyState/NoDataState";
import StatusFilter from "../../components/common/Filter/StatusFilter";
import { tickets } from "../../data/tickets";
import { ticketColumns } from "./TicketColumns";
import { STATUS_OPTIONS_TICKETS } from "../../constants/ticketStatusOptions";

export default function Tickets() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTickets = useMemo(() => {
    if (statusFilter === "all") return tickets;
    return tickets.filter((ticket) => ticket.status === statusFilter);
  }, [statusFilter]);

  const hasTickets = tickets.length > 0;

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <PageHeader />
        <div className="flex [flex-wrap:balance] items-center gap-2 xs:gap-3">
          {hasTickets && (
            <StatusFilter
              label="وضعیت تیکت"
              options={STATUS_OPTIONS_TICKETS}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          )}
          <Link to="/tickets/addTicket">
            <Button
              variant="primary"
              size="md"
              className="h-9 rounded-xl whitespace-nowrap"
            >
              + ایجاد تیکت جدید
            </Button>
          </Link>
        </div>
      </div>

      {tickets.length === 0 ? (
        <NoDataState icon={FiInbox} title="هنوز تیکتی ثبت نشده!" />
      ) : filteredTickets.length === 0 ? (
        <NoDataState icon={FiInbox} title="نتیجه‌ای پیدا نشد!" />
      ) : (
        <DataTable
          key={statusFilter}
          data={filteredTickets}
          columns={ticketColumns}
          pageSize={8}
          getRowId={(ticket) => ticket.id}
        />
      )}
    </>
  );
}
