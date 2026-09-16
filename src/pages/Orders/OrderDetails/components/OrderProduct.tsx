import StatusBadge from "../../../../components/ui/StatusBadge/StatusBadge";
import {
  ORDER_FALLBACK_STATUS,
  ORDER_STATUS_CONFIG,
} from "../../../../constants/statusConfig";
import type { Order } from "../../../../types/order";

interface OrderProductProps {
  order: Order;
}

export default function OrderProduct({ order }: OrderProductProps) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3" dir="rtl">
      <div className="flex items-center justify-center md:col-span-1">
        <div className="relative flex h-32 w-32 items-center justify-center xs:h-40 xs:w-40">
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl" />

          <img
            src={order.icon}
            alt={order.title}
            className="relative h-full w-full rounded-full object-contain drop-shadow-sm [image-rendering:-webkit-optimize-contrast]"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 md:col-span-2">
        <div>
          <h1 className="mb-1 font-yekanBold text-base text-balticSea-400 xs:text-lg">
            {order.title}
          </h1>
          <p className="font-morabbaMedium text-xs text-dawn">
            {order.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <StatusBadge
            status={order.status}
            statusConfig={ORDER_STATUS_CONFIG}
            fallbackStatus={ORDER_FALLBACK_STATUS}
          />
          <span className="font-yekanBold text-base text-primary">
            {order.finalPrice.toLocaleString("fa-IR")}
            <span className="mr-1 text-[10px] text-dawn">تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
}
