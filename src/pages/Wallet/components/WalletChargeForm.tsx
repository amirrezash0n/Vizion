import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import BankOption from "./BankOption";
import {
  toEnglishDigits,
  formatPersianNumber,
} from "../../../utils/number.utils";
import { banks } from "../../../constants/banks";

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
      className="bg-offWhite rounded-[20px] p-4 xs:p-6"
    >
      <div className="mb-5" dir="rtl">
        <label className="block font-yekanBold text-xs xs:text-sm text-balticSea-400 mb-2">
          مبلغ شارژ
        </label>
        <div
          className={`
            flex items-center justify-between gap-2
            bg-white rounded-xl px-3 xs:px-4 py-2.5 xs:py-3
            border transition-all
            ${amount ? "border-primary" : "border-cloud"}
          `}
        >
          <input
            type="text"
            inputMode="numeric"
            value={amount}
            onChange={handleAmountChange}
            placeholder="۲۵۰,۰۰۰"
            className="flex-1 bg-transparent outline-none font-yekanBold text-sm xs:text-base text-balticSea-400 placeholder:text-dawn"
          />
          <span className="font-morabbaMedium text-[10px] xs:text-xs text-dawn shrink-0">
            تومان
          </span>
        </div>
      </div>

      <div className="mb-5" dir="rtl">
        <span className="block font-yekanBold text-xs xs:text-sm text-balticSea-400 mb-3">
          بانک مورد نظر جهت پرداخت
        </span>
        <div className="space-y-2.5">
          {banks.map((bank) => (
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
        className="font-yekanBold rounded-xl"
      >
        شارژ کیف پول
      </Button>
    </form>
  );
}
