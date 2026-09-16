interface BankOptionProps {
  id: string;
  name: string;
  logo: string;
  selected: boolean;
  onSelect: () => void;
}

export default function BankOption({
  name,
  logo,
  selected,
  onSelect,
}: BankOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full items-center justify-between gap-3 rounded-xl border px-3 py-3 transition-all xs:px-4 ${
        selected
          ? "border-primary bg-primary/5"
          : "border-cloud bg-white hover:border-dawn/40"
      } `}
      dir="rtl"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-5 shrink-0 items-center justify-center">
          <img src={logo} alt={name} className="h-full w-full object-contain" />
        </div>
        <span className="font-yekanMedium text-xs text-balticSea-400 xs:text-sm">
          درگاه پرداخت بانک {name}
        </span>
      </div>

      <span
        className={`flex size-4 shrink-0 items-center justify-center rounded-full border-2 ${selected ? "border-primary" : "border-dawn"} `}
      >
        {selected && <span className="size-2 rounded-full bg-primary" />}
      </span>
    </button>
  );
}
