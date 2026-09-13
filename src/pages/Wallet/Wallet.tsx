// src/pages/Wallet/Wallet.tsx
import PageHeader from "../../components/common/PageHeader/PageHeader";
import WalletBalanceCard from "./components/WalletBalanceCard";
import WalletChargeForm from "./components/WalletChargeForm";
import TransactionHistory from "./components/TransactionHistory";

export default function Wallet() {
  const balance = 5000000;

  return (
    <>
      <PageHeader />
      <div className="mt-10">
        <div className="flex items-start flex-wrap justify-center gap-4 xs:gap-6 mt-4 lg:mt-12 xl:mt-16">
          <div className="w-100 xl:h-150 flex flex-col gap-4 xs:gap-6">
            <div className="shrink-0">
              <WalletBalanceCard balance={balance} />
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
              <WalletChargeForm />
            </div>
          </div>

          <div className="w-100 xs:w-120 2xl:w-140 h-113">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </>
  );
}
