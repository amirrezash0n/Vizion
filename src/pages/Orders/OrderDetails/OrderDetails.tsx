import { useParams } from "react-router";
import { orders } from "../../../data/orders";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import OrderProduct from "./components/OrderProduct";
import PaymentSection from "./sections/PaymentSection";
import AccountSection from "./sections/AccountSection";
import ContactSection from "./sections/ContactSection";
import BackButton from "../../../components/common/BackButton/BackButton";

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const order = orders.find((o) => o.id === Number(id));

  if (!order) {
    return (
      <div>
        <PageHeader />
        <div className="mx-auto mt-4 max-w-2xl animate-fadeIn rounded-2xl bg-offWhite p-8 text-center">
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
      <BackButton />

      <div className="mx-auto mt-4 max-w-5xl animate-fadeIn rounded-[20px] bg-offWhite p-4 xs:p-6 sm:p-8">
        <OrderProduct order={order} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <PaymentSection order={order} />
          <AccountSection order={order} />
          <ContactSection order={order} />
        </div>
      </div>
    </div>
  );
}
