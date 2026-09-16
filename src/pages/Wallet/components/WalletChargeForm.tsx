import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import BankOption from "./BankOption";
import {
  toEnglishDigits,
  formatPersianNumber,
} from "../../../utils/number.utils";
import { BANKS } from "../../../constants/banks";

export default function WalletChargeForm() {
  const [amount, setAmount] = useState("");
  const [selectedBank, setSelectedBank] = useState("saman");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = toEnglishDigits(e.target.value);
    raw = raw.replace(/,/g, "");
    if (!/^\d*$/.test(raw)) return;
    setAmount(formatPersianNumber(raw));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = toEnglishDigits(amount).replace(/,/g, "");
    console.log({ amount: finalAmount, bank: selectedBank });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] bg-offWhite p-4 xs:p-6"
    >
      <div className="mb-5" dir="rtl">
        <label className="mb-2 block font-yekanBold text-xs text-balticSea-400 xs:text-sm">
          مبلغ شارژ
        </label>
        <div
          className={`flex items-center justify-between gap-2 rounded-xl border bg-white px-3 py-2.5 transition-all xs:px-4 xs:py-3 ${amount ? "border-primary" : "border-cloud"} `}
        >
          <input
            type="text"
            inputMode="numeric"
            value={amount}
            onChange={handleAmountChange}
            placeholder="۲۵۰,۰۰۰"
            className="flex-1 bg-transparent font-yekanBold text-sm text-balticSea-400 outline-none placeholder:text-dawn xs:text-base"
          />
          <span className="shrink-0 font-morabbaMedium text-[10px] text-dawn xs:text-xs">
            تومان
          </span>
        </div>
      </div>

      <div className="mb-5" dir="rtl">
        <span className="mb-3 block font-yekanBold text-xs text-balticSea-400 xs:text-sm">
          بانک مورد نظر جهت پرداخت
        </span>
        <div className="space-y-2.5">
          {BANKS.map((bank) => (
            <BankOption
              key={bank.id}
              id={bank.id}
              name={bank.name}
              logo={bank.logo}
              selected={selectedBank === bank.id}
              onSelect={() => setSelectedBank(bank.id)}
            />
          ))}
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="full"
        className="rounded-xl font-yekanBold"
      >
        شارژ کیف پول
      </Button>
    </form>
  );
}
