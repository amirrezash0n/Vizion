interface OrderInfoRowProps {
  label: string;
  value: string;
  valueClassName?: string;
}

export default function OrderInfoRow({
  label,
  value,
  valueClassName = "text-balticSea-400",
}: OrderInfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="font-morabbaMedium text-[10px] xs:text-xs text-dawn shrink-0">
        {label}:
      </span>
      <span
        className={`font-yekanBold text-[10px] xs:text-xs truncate ${valueClassName}`}
      >
        {value}
      </span>
    </div>
  );
}
