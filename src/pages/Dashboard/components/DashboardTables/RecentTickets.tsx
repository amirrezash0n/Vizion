import { FiInbox } from "react-icons/fi";
import DataTable from "../../../../components/common/DataTable/DataTable";
import NoDataState from "../../../../components/common/EmptyState/NoDataState";
import { tickets } from "../../../../data/tickets";
import { ticketColumns } from "../../../Tickets/TicketColumns";
import DashboardTableHeader from "./DashboardTableHeader";

export default function RecentTickets() {
  const hasTickets = tickets.length > 0;
  return (
    <>
      <DashboardTableHeader
        title="تیکت های اخیر شما"
        linkTo="/tickets"
        linkText="همه تیکت ها"
        showLink={hasTickets}
      />
      {tickets.length === 0 ? (
        <NoDataState
          icon={FiInbox}
          title="هنوز تیکتی ثبت نشده!"
          dashboard={true}
        />
      ) : (
        <DataTable
          data={tickets.slice(-3)}
          columns={ticketColumns}
          pagination={false}
        />
      )}
    </>
  );
}
