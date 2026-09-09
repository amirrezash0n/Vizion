import type { Order } from "../../types/orders";

interface OrdersTableProps {
  orders: Order[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl text-primary">
      <table className="w-full min-w-225 border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-4 text-right text-sm font-medium">
              نام محصول
            </th>

            <th className="px-6 py-4 text-right text-sm font-medium">
              شماره پرداخت
            </th>

            <th className="px-6 py-4 text-right text-sm font-medium">
              تاریخ پرداخت
            </th>

            <th className="px-6 py-4 text-right text-sm font-medium">
              مبلغ پرداخت
            </th>

            <th className="px-6 py-4 text-right text-sm font-medium">
              وضعیت پرداخت
            </th>

            <th className="px-6 py-4 text-right text-sm font-medium">عملیات</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t bg-white">
              {/* نام محصول */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <img
                    src={order.icon}
                    alt={order.title}
                    className="h-12 w-12 shrink-0 rounded-full object-contain"
                  />

                  <div className="text-right">
                    <p className="whitespace-nowrap text-sm font-medium">
                      {order.title}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {order.subtitle}
                    </p>
                  </div>
                </div>
              </td>

              {/* شماره پرداخت */}
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                {order.paymentNumber}
              </td>

              {/* تاریخ پرداخت */}
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                {order.date}
              </td>

              {/* مبلغ پرداخت */}
              <td className="whitespace-nowrap px-6 py-4">
                <span className="text-sm font-semibold">
                  {order.price.toLocaleString("fa-IR")}
                </span>

                <span className="mr-1 text-xs text-red-500">تومان</span>
              </td>

              {/* وضعیت پرداخت */}
              <td className="px-6 py-4">
                <span
                  className={`inline-flex whitespace-nowrap rounded-full px-4 py-2 text-xs ${
                    order.status === "completed"
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-orange-100 text-orange-500"
                  }`}
                >
                  {order.status === "completed" ? "تکمیل شده" : "در حال انجام"}
                </span>
              </td>

              {/* عملیات */}
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="whitespace-nowrap text-sm text-red-500 transition-opacity hover:opacity-70"
                >
                  مشاهده ←
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
