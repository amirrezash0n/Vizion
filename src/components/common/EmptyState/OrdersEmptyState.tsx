import { FiShoppingBag } from "react-icons/fi";

export default function OrdersEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 gap-5 py-16">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-balticSea-100">
        <FiShoppingBag size={40} className="text-dawn" />
      </div>

      <div className="text-center space-y-2">
        <h3 className="font-yekanBold text-xl text-balticSea-400">
          هنوز سفارشی ثبت نشده!
        </h3>
        <p className="font-morabbaMedium text-sm text-dawn">
          وقتی اولین سفارش ثبت بشه، اینجا نمایش داده میشه.
        </p>
      </div>
    </div>
  );
}
