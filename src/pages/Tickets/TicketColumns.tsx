import { RiArrowLeftSLine } from "react-icons/ri";
import type { TableColumn } from "../../types/table";
import type { Ticket } from "../../types/ticket";
import { Link } from "react-router";
import StatusBadge from "../../components/ui/StatusBadge/StatusBadge.tsx";
import {
  TICKET_FALLBACK_STATUS,
  TICKET_STATUS_CONFIG,
} from "../../constants/statusConfig";

export const ticketColumns: TableColumn<Ticket>[] = [
  {
    key: "title",
    title: "عنوان تیکت",
    render: (ticket) => (
      <span className="font-morabbaMedium whitespace-nowrap text-balticSea-400">
        {ticket.title}
      </span>
    ),
  },
  {
    key: "createdAt",
    title: "تاریخ ساخت تیکت",
    render: (ticket) => (
      <span className="font-morabbaMedium text-sm whitespace-nowrap text-balticSea-400">
        {ticket.createdAt}
      </span>
    ),
  },
  {
    key: "updatedAt",
    title: "آخرین آپدیت تیکت",
    render: (ticket) => (
      <span className="font-morabbaMedium text-sm whitespace-nowrap text-balticSea-400">
        {ticket.updatedAt}
      </span>
    ),
  },
  {
    key: "department",
    title: "دپارتمان",
    render: (ticket) => (
      <span className="font-morabbaMedium text-sm whitespace-nowrap text-balticSea-400">
        {ticket.department}
      </span>
    ),
  },
  {
    key: "type",
    title: "نوع تیکت",
    render: (ticket) => (
      <span className="font-morabbaMedium text-sm whitespace-nowrap text-balticSea-400">
        {ticket.type}
      </span>
    ),
  },
  {
    key: "status",
    title: "وضعیت تیکت",
    render: (ticket) => (
      <StatusBadge
        status={ticket.status}
        statusConfig={TICKET_STATUS_CONFIG}
        fallbackStatus={TICKET_FALLBACK_STATUS}
      />
    ),
  },
  {
    key: "id",
    title: "عملیات",
    render: (ticket) => (
      <Link
        to={`/tickets/${ticket.id}`}
        className="flex items-center gap-0.5 font-yekanMedium text-sm whitespace-nowrap text-primary transition-opacity hover:opacity-80"
      >
        <span>مشاهده</span>
        <RiArrowLeftSLine size={16} />
      </Link>
    ),
  },
];
