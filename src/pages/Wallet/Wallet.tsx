import PageHeader from "../../components/common/PageHeader/PageHeader";
import WalletBalanceCard from "./components/WalletBalanceCard";
import WalletChargeForm from "./components/WalletChargeForm";
import TransactionHistory from "./components/TransactionHistory";

export default function Wallet() {
  const balance = 5000000;

  return (
    <>
      <PageHeader />
      <div className="mt-10 animate-fadeIn">
        <div className="mt-4 flex flex-wrap items-start justify-center gap-4 xs:gap-6 lg:mt-12 xl:mt-16">
          <div className="flex w-100 flex-col gap-4 xs:gap-6 xl:h-150">
            <div className="shrink-0">
              <WalletBalanceCard balance={balance} />
            </div>
            <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto">
              <WalletChargeForm />
            </div>
          </div>

          <div className="h-113 w-100 xs:w-120 2xl:w-140">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </>
  );
}
