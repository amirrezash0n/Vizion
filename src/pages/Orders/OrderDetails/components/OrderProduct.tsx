// src/pages/Orders/OrderDetails/components/OrderProduct.tsx
import OrderStatusBadge from "../../../../components/ui/OrderStatusBadge";
import type { Order } from "../../../../types/order";

interface OrderProductProps {
  order: Order;
}

export default function OrderProduct({ order }: OrderProductProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" dir="rtl">
      <div className="md:col-span-1 flex items-center justify-center">
        <div className="relative w-32 h-32 xs:w-40 xs:h-40 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl" />

          <img
            src={order.icon}
            alt={order.title}
            className="relative w-full h-full object-contain [image-rendering:-webkit-optimize-contrast] drop-shadow-sm rounded-full"
          />
        </div>
      </div>

      <div className="md:col-span-2 flex flex-col justify-center gap-3">
        <div>
          <h1 className="font-yekanBold text-base xs:text-lg text-balticSea-400 mb-1">
            {order.title}
          </h1>
          <p className="font-morabbaMedium text-xs text-dawn">
            {order.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <OrderStatusBadge status={order.status} />
          <span className="font-yekanBold text-base text-primary">
            {order.finalPrice.toLocaleString("fa-IR")}
            <span className="mr-1 text-[10px] text-dawn">تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
}
