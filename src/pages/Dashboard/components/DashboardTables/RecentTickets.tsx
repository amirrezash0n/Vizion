import DataTable from "../../../../components/common/DataTable/DataTable";
import { tickets } from "../../../../data/tickets";
import { ticketColumns } from "../../../Tickets/TicketColumns";
import DashboardTableHeader from "./DashboardTableHeader";

export default function RecentTickets() {
  return (
    <>
      <DashboardTableHeader
        title="تیکت های اخیر شما"
        linkTo="/tickets"
        linkText="همه تیکت ها"
      />
      <DataTable
        data={tickets.slice(-3)}
        columns={ticketColumns}
        pagination={false}
      />
    </>
  );
}
