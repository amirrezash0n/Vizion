import { FaMoneyCheckDollar } from "react-icons/fa6";
interface WalletBalanceCardProps {
  balance: number;
}

export default function WalletBalanceCard({ balance }: WalletBalanceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary to-secondary p-5 text-white xs:p-6">
      <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

      <div className="relative z-10" dir="rtl">
        <p className="mb-4 font-yekanBold text-sm xs:text-base">
          موجودی کیف پول شما
        </p>

        <div className="flex items-center justify-between">
          <span className="font-yekanHeavy text-2xl xs:text-3xl">
            {balance.toLocaleString("fa-IR")}
            <span className="mr-2 font-yekanRegular text-xs opacity-80">
              تومان
            </span>
          </span>

          <FaMoneyCheckDollar size={36} className="opacity-90" />
        </div>
      </div>
    </div>
  );
}
