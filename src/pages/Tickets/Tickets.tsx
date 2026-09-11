import { Link } from "react-router";
import Button from "../../components/common/Button/Button";
import DataTable from "../../components/common/DataTable/DataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import { tickets } from "../../data/tickets";
import { ticketColumns } from "./TicketColumns";

export default function Tickets() {
  return (
    <>
      <div className="flex justify-between items-start flex-wrap mb-4 xs:mb-0">
        <PageHeader />
        <Link to="/tickets/addTicket">
          <Button variant="primary" size="xs">
            +ایجاد تکیت جدید
          </Button>
        </Link>
      </div>
      <DataTable data={tickets} columns={ticketColumns} pageSize={8} />
    </>
  );
}
