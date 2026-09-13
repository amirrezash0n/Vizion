import OrderInfoSection from "../components/OrderInfoSection";
import OrderInfoRow from "../components/OrderInfoRow";
import type { Order } from "../../../../types/order";

interface ContactSectionProps {
  order: Order;
}

export default function ContactSection({ order }: ContactSectionProps) {
  return (
    <OrderInfoSection title="اطلاعات تماس">
      <OrderInfoRow label="ایمیل" value={order.email} />
      <OrderInfoRow label="شماره تماس" value={order.phone} />
      <OrderInfoRow label="روش تحویل" value={order.deliveryMethod} />
    </OrderInfoSection>
  );
}
