import type { TableColumn } from "../../types/table";
import type { Order } from "../../types/order";

export const orderColumns: TableColumn<Order>[] = [
  {
    key: "title",
    title: "نام محصول",

    render: (order) => (
      <div className="flex items-center gap-4">
        <img
          src={order.icon}
          alt={order.title}
          className="h-12 w-12 shrink-0 rounded-full object-contain"
        />

        <div className="text-right">
          <p className="whitespace-nowrap text-sm font-medium text-gray-800">
            {order.title}
          </p>

          {order.subtitle && (
            <p className="mt-1 text-xs text-gray-400">{order.subtitle}</p>
          )}
        </div>
      </div>
    ),
  },

  {
    key: "paymentNumber",
    title: "شماره پرداخت",

    render: (order) => (
      <span className="whitespace-nowrap">{order.paymentNumber}</span>
    ),
  },

  {
    key: "date",
    title: "تاریخ پرداخت",

    render: (order) => <span className="whitespace-nowrap">{order.date}</span>,
  },

  {
    key: "price",
    title: "مبلغ پرداخت",

    render: (order) => (
      <div className="whitespace-nowrap">
        <span className="font-semibold">
          {order.price.toLocaleString("fa-IR")}
        </span>

        <span className="mr-1 text-xs text-red-500">تومان</span>
      </div>
    ),
  },

  {
    key: "status",
    title: "وضعیت پرداخت",

    render: (order) => (
      <span
        className={`inline-flex whitespace-nowrap rounded-full px-4 py-2 text-xs ${
          order.status === "completed"
            ? "bg-emerald-100 text-emerald-600"
            : "bg-orange-100 text-orange-500"
        }`}
      >
        {order.status === "completed" ? "تکمیل شده" : "در حال انجام"}
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
