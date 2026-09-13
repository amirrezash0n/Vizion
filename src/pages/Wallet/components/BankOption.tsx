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
      className={`
        w-full flex items-center justify-between gap-3 
        rounded-xl px-3 xs:px-4 py-3 
        border transition-all
        ${
          selected
            ? "border-primary bg-primary/5"
            : "border-cloud bg-white hover:border-dawn/40"
        }
      `}
      dir="rtl"
    >
      <div className="flex items-center gap-3">
        <div className="size-5 flex items-center justify-center shrink-0">
          <img src={logo} alt={name} className="w-full h-full object-contain" />
        </div>
        <span className="font-yekanMedium text-xs xs:text-sm text-balticSea-400">
          درگاه پرداخت بانک {name}
        </span>
      </div>

      <span
        className={`
          size-4 rounded-full border-2 flex items-center justify-center shrink-0
          ${selected ? "border-primary" : "border-dawn"}
        `}
      >
        {selected && <span className="size-2 rounded-full bg-primary" />}
      </span>
    </button>
  );
}
