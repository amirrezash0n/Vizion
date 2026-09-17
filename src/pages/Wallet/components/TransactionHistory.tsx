import Badge from "../../../components/common/Badge/Badge";
import { transactions } from "../../../data/transactions";

export default function TransactionHistory() {
  const typeConfig = {
    charge: {
      label: "شارژ کیف پول",
      className: "bg-emerald-100 text-success",
    },
    withdraw: {
      label: "برداشت از کیف",
      className: "bg-softPink text-crimson",
    },
  };

  return (
    <div className="flex h-full w-full flex-col rounded-[20px] bg-offWhite p-4 xs:p-6">
      <h2 className="mb-6 shrink-0 text-right font-morabbaBold text-base text-black xs:text-xl">
        تراکنش های اخیر شما
      </h2>

      <div className="custom-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto pl-1 xs:space-y-3">
        {transactions.map((tx) => {
          const config = typeConfig[tx.type];
          return (
            <div
              key={tx.id}
              className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-3 xs:px-4"
              dir="rtl"
            >
              <Badge shrink className={config.className}>
                {config.label}
              </Badge>

              <div className="min-w-0 flex-1 text-right">
                <p className="truncate font-yekanMedium text-xs text-balticSea-400 xs:text-sm">
                  {tx.title}
                </p>
                <p className="mt-0.5 font-morabbaLight text-[10px] text-dawn xs:text-xs">
                  {tx.date}
                </p>
              </div>

              <div
                className={`shrink-0 text-left ${tx.type === "charge" ? "text-success" : "text-danger"}`}
              >
                <span className="font-yekanBold text-xs xs:text-sm">
                  {tx.amount.toLocaleString("fa-IR")}
                </span>
                <span className="mr-1 font-morabbaLight text-[10px]">
                  تومان
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
