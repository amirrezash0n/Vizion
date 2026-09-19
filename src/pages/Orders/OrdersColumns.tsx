import type { TableColumn } from "../../types/table.types.ts";
import type { Order } from "../../types/order.types.ts";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router";
import StatusBadge from "../../components/common/StatusBadge/StatusBadge.tsx";
import {
  ORDER_FALLBACK_STATUS,
  ORDER_STATUS_CONFIG,
} from "../../constants/statusConfig";

export const orderColumns: TableColumn<Order>[] = [
  {
    key: "title",
    title: "نام محصول",
    render: (order) => (
      <div className="flex items-center gap-4">
        <img
          src={order.icon}
          alt={order.title}
          className="size-11 shrink-0 rounded-full object-contain"
        />
        <div className="text-right">
          <p className="font-yekanMedium text-sm whitespace-nowrap text-balticSea-400">
            {order.title}
          </p>
          {order.subtitle && (
            <p className="mt-1 font-mono text-xs text-dawn">{order.subtitle}</p>
          )}
        </div>
      </div>
    ),
  },
  {
    key: "paymentNumber",
    title: "شماره پرداخت",
    render: (order) => (
      <span className="font-yekanMedium text-sm whitespace-nowrap text-balticSea-400">
        {order.paymentNumber}
      </span>
    ),
  },
  {
    key: "date",
    title: "تاریخ پرداخت",
    render: (order) => (
      <span className="font-yekanMedium text-sm whitespace-nowrap text-balticSea-400">
        {order.date}
      </span>
    ),
  },
  {
    key: "price",
    title: "مبلغ پرداخت",
    render: (order) => (
      <div className="font-yekanBold text-xl whitespace-nowrap text-balticSea-400">
        <span className="font-semibold">
          {order.price.toLocaleString("fa-IR")}
        </span>
        <span className="mr-1 text-xs text-primary">تومان</span>
      </div>
    ),
  },
  {
    key: "status",
    title: "وضعیت پرداخت",
    render: (order) => (
      <StatusBadge
        status={order.status}
        statusConfig={ORDER_STATUS_CONFIG}
        fallbackStatus={ORDER_FALLBACK_STATUS}
      />
    ),
  },
  {
    key: "id",
    title: "عملیات",
    render: (order) => (
      <Link
        to={`/orders/${order.id}`}
        className="flex items-center gap-0.5 font-yekanMedium text-sm whitespace-nowrap text-primary transition-opacity hover:opacity-80"
      >
        <span>مشاهده</span>
        <span className="flex items-center">
          <RiArrowLeftSLine size={16} />
        </span>
      </Link>
    ),
  },
];
