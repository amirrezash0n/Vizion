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
    <div className="bg-offWhite rounded-[20px] p-4 xs:p-6 w-full h-full flex flex-col">
      <h2 className="font-morabbaBold text-base xs:text-xl text-black text-right mb-6 shrink-0">
        تراکنش های اخیر شما
      </h2>

      <div className="flex-1 min-h-0 overflow-y-auto pl-1 custom-scrollbar space-y-2 xs:space-y-3">
        {transactions.map((tx) => {
          const config = typeConfig[tx.type];
          return (
            <div
              key={tx.id}
              className="flex items-center justify-between gap-3 bg-white rounded-xl px-3 xs:px-4 py-3"
              dir="rtl"
            >
              <span
                className={`font-yekanBold text-[10px] xs:text-xs px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-lg shrink-0 ${config.className}`}
              >
                {config.label}
              </span>

              <div className="flex-1 text-right min-w-0">
                <p className="font-yekanMedium text-xs xs:text-sm text-balticSea-400 truncate">
                  {tx.title}
                </p>
                <p className="font-morabbaLight text-[10px] xs:text-xs text-dawn mt-0.5">
                  {tx.date}
                </p>
              </div>

              <div
                className={`text-left shrink-0 ${tx.type === "charge" ? "text-success" : "text-danger"}`}
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
