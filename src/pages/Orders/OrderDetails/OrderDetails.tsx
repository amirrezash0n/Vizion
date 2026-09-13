import { useParams } from "react-router";
import { orders } from "../../../data/orders";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import OrderHeader from "./components/OrderHeader";
import OrderProduct from "./components/OrderProduct";
import PaymentSection from "./sections/PaymentSection";
import AccountSection from "./sections/AccountSection";
import ContactSection from "./sections/ContactSection";

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const order = orders.find((o) => o.id === Number(id));

  if (!order) {
    return (
      <div>
        <PageHeader />
        <div className="bg-offWhite rounded-2xl p-8 max-w-2xl mx-auto mt-4 text-center animate-fadeIn">
          <p className="font-morabbaMedium text-sm text-dawn">
            سفارش مورد نظر پیدا نشد!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader />

      <div className="bg-offWhite rounded-[20px] p-4 xs:p-6 sm:p-8 max-w-5xl mx-auto mt-4 animate-fadeIn">
        <OrderHeader date={order.date} />
        <OrderProduct order={order} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PaymentSection order={order} />
          <AccountSection order={order} />
          <ContactSection order={order} />
        </div>
      </div>
    </div>
  );
}
