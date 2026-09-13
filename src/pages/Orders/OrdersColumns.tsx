import type { TableColumn } from "../../types/table";
import type { Order } from "../../types/order";
import OrderStatusBadge from "../../components/ui/OrderStatusBadge";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router";

export const orderColumns: TableColumn<Order>[] = [
  {
    key: "title",
    title: "نام محصول",
    render: (order) => (
      <div className="flex items-center gap-4">
        <img
          src={order.icon}
          alt={order.title}
          className="h-11 w-11 shrink-0 rounded-full object-contain"
        />
        <div className="text-right">
          <p className="whitespace-nowrap text-sm font-yekanMedium text-balticSea-400">
            {order.title}
          </p>
          {order.subtitle && (
            <p className="mt-1 text-xs font-yekanMedium text-dawn">
              {order.subtitle}
            </p>
          )}
        </div>
      </div>
    ),
  },
  {
    key: "paymentNumber",
    title: "شماره پرداخت",
    render: (order) => (
      <span className="whitespace-nowrap text-sm font-yekanMedium text-balticSea-400">
        {order.paymentNumber}
      </span>
    ),
  },
  {
    key: "date",
    title: "تاریخ پرداخت",
    render: (order) => (
      <span className="whitespace-nowrap text-sm font-yekanMedium text-balticSea-400">
        {order.date}
      </span>
    ),
  },
  {
    key: "price",
    title: "مبلغ پرداخت",
    render: (order) => (
      <div className="whitespace-nowrap text-xl font-yekanBold text-balticSea-400">
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
    render: (order) => <OrderStatusBadge status={order.status} />,
  },
  {
    key: "id",
    title: "عملیات",
    render: (order) => (
      <Link
        to={`/orders/${order.id}`}
        className="flex items-center gap-0.5 whitespace-nowrap text-sm text-primary font-yekanMedium transition-opacity hover:opacity-80"
      >
        <span>مشاهده</span>
        <span className="flex items-center">
          <RiArrowLeftSLine size={16} />
        </span>
      </Link>
    ),
  },
];
