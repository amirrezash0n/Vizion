import OrderInfoSection from "../components/OrderInfoSection";
import OrderInfoRow from "../components/OrderInfoRow";
import type { Order } from "../../../../types/order.types";

interface PaymentSectionProps {
  order: Order;
}

export default function PaymentSection({ order }: PaymentSectionProps) {
  return (
    <OrderInfoSection title="اطلاعات پرداخت">
      <OrderInfoRow label="شماره پرداخت" value={order.paymentNumber} />
      <OrderInfoRow label="تاریخ پرداخت" value={order.date} />
      <OrderInfoRow
        label="مبلغ پرداخت"
        value={`${order.price.toLocaleString("fa-IR")} تومان`}
      />
      {order.discountCode && (
        <OrderInfoRow
          label="کد تخفیف"
          value={order.discountCode}
          valueClassName="text-success"
        />
      )}
      <OrderInfoRow
        label="مبلغ نهایی"
        value={`${order.finalPrice.toLocaleString("fa-IR")} تومان`}
        valueClassName="text-primary"
      />
    </OrderInfoSection>
  );
}
