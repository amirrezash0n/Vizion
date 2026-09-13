import { FaMoneyCheckDollar } from "react-icons/fa6";
interface WalletBalanceCardProps {
  balance: number;
}

export default function WalletBalanceCard({ balance }: WalletBalanceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary to-secondary p-5 xs:p-6 text-white">
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />

      <div className="relative z-10" dir="rtl">
        <p className="font-yekanBold text-sm xs:text-base mb-4">
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
