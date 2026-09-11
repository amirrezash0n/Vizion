import DataTable from "../../components/common/DataTable/DataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import { tickets } from "../../data/tickets";
import { ticketColumns } from "./TicketColumns";

export default function Tickets() {
  return (
    <>
      <PageHeader />
      <DataTable data={tickets} columns={ticketColumns} pageSize={8} />
    </>
  );
}
