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
      <span className="shrink-0 font-morabbaMedium text-[10px] text-dawn xs:text-xs">
        {label}:
      </span>
      <span
        className={`truncate font-yekanBold text-[10px] xs:text-xs ${valueClassName}`}
      >
        {value}
      </span>
    </div>
  );
}
