import OrderInfoSection from "../components/OrderInfoSection";
import OrderInfoRow from "../components/OrderInfoRow";
import type { Order } from "../../../../types/order.types";

interface AccountSectionProps {
  order: Order;
}

export default function AccountSection({ order }: AccountSectionProps) {
  const statusConfig = {
    completed: { label: "تکمیل شده", className: "text-success" },
    pending: { label: "در حال انجام", className: "text-warning" },
    cancelled: { label: "لغو شده", className: "text-danger" },
  };

  const config = statusConfig[order.status];

  return (
    <OrderInfoSection title="اطلاعات اکانت">
      <OrderInfoRow label="نوع اکانت" value={order.accountType} />
      <OrderInfoRow label="ریجن" value={order.region} />
      <OrderInfoRow label="گارانتی" value={order.warranty} />
      <OrderInfoRow
        label="وضعیت"
        value={config.label}
        valueClassName={config.className}
      />
    </OrderInfoSection>
  );
}
