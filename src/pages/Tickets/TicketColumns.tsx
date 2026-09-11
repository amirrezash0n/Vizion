import type { TableColumn } from "../../types/table";
import type { Ticket } from "../../types/ticket";

export const ticketColumns: TableColumn<Ticket>[] = [
  {
    key: "title",
    title: "عنوان تیکت",

    render: (ticket) => (
      <span className="whitespace-nowrap font-medium text-gray-800">
        {ticket.title}
      </span>
    ),
  },

  {
    key: "createdAt",
    title: "تاریخ ساخت تیکت",

    render: (ticket) => (
      <span className="whitespace-nowrap">{ticket.createdAt}</span>
    ),
  },

  {
    key: "updatedAt",
    title: "آخرین آپدیت تیکت",

    render: (ticket) => (
      <span className="whitespace-nowrap">{ticket.updatedAt}</span>
    ),
  },

  {
    key: "department",
    title: "دپارتمان",

    render: (ticket) => (
      <span className="whitespace-nowrap">{ticket.department}</span>
    ),
  },

  {
    key: "type",
    title: "نوع تیکت",

    render: (ticket) => (
      <span className="whitespace-nowrap">{ticket.type}</span>
    ),
  },

  {
    key: "status",
    title: "وضعیت تیکت",

    render: (ticket) => (
      <span
        className={`inline-flex whitespace-nowrap rounded-full px-4 py-2 text-xs ${
          ticket.status === "answered"
            ? "bg-emerald-100 text-emerald-600"
            : ticket.status === "pending"
              ? "bg-orange-100 text-orange-500"
              : "bg-gray-100 text-gray-500"
        }`}
      >
        {ticket.status === "answered"
          ? "پاسخ داده شده"
          : ticket.status === "pending"
            ? "در حال بررسی"
            : "بسته شده"}
      </span>
    ),
  },

  {
    key: "id",
    title: "عملیات",

    render: () => (
      <button
        type="button"
        className="whitespace-nowrap text-sm text-red-500 transition-opacity hover:opacity-70"
      >
        مشاهده ←
      </button>
    ),
  },
];
