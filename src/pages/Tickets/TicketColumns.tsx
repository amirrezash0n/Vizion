import { RiArrowLeftSLine } from "react-icons/ri";
import type { TableColumn } from "../../types/table";
import type { Ticket } from "../../types/ticket";
import TicketStatusBadge from "../../components/ui/TicketStatusBadge";
import { Link } from "react-router";

export const ticketColumns: TableColumn<Ticket>[] = [
  {
    key: "title",
    title: "عنوان تیکت",
    render: (ticket) => (
      <span className="whitespace-nowrap font-morabbaMedium text-balticSea-400">
        {ticket.title}
      </span>
    ),
  },
  {
    key: "createdAt",
    title: "تاریخ ساخت تیکت",
    render: (ticket) => (
      <span className="whitespace-nowrap text-sm font-morabbaMedium text-balticSea-400">
        {ticket.createdAt}
      </span>
    ),
  },
  {
    key: "updatedAt",
    title: "آخرین آپدیت تیکت",
    render: (ticket) => (
      <span className="whitespace-nowrap text-sm font-morabbaMedium text-balticSea-400">
        {ticket.updatedAt}
      </span>
    ),
  },
  {
    key: "department",
    title: "دپارتمان",
    render: (ticket) => (
      <span className="whitespace-nowrap text-sm font-morabbaMedium text-balticSea-400">
        {ticket.department}
      </span>
    ),
  },
  {
    key: "type",
    title: "نوع تیکت",
    render: (ticket) => (
      <span className="whitespace-nowrap text-sm font-morabbaMedium text-balticSea-400">
        {ticket.type}
      </span>
    ),
  },
  {
    key: "status",
    title: "وضعیت تیکت",
    render: (ticket) => <TicketStatusBadge status={ticket.status} />,
  },
  {
    key: "id",
    title: "عملیات",
    render: (ticket) => (
      <Link
        to={`/tickets/${ticket.id}`}
        className="flex items-center gap-0.5 whitespace-nowrap text-sm text-primary font-yekanMedium transition-opacity hover:opacity-80"
      >
        <span>مشاهده</span>
        <RiArrowLeftSLine size={16} />
      </Link>
    ),
  },
];
