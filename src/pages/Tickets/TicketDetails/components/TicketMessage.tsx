import TicketMessageBadge from "./TicketMessageBadge";

interface TicketMessageProps {
  name: string;
  avatar: string;
  date: string;
  text: string;
  type: "question" | "answer";
}

export default function TicketMessage({
  name,
  avatar,
  date,
  text,
  type,
}: TicketMessageProps) {
  return (
    <div className="flex flex-col gap-3" dir="rtl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <img
            src={avatar}
            alt={name}
            className="h-9 w-9 shrink-0 rounded-full object-cover xs:h-10 xs:w-10"
          />
          <span className="font-yekanBold text-xs text-balticSea-400 xs:text-sm">
            {name}
          </span>
        </div>
        <span className="shrink-0 font-morabbaLight text-[10px] text-dawn xs:text-xs">
          {date}
        </span>
      </div>

      <div className="rounded-2xl border border-cloud bg-white p-4 xs:p-5">
        <p className="text-justify font-yekanMedium text-xs leading-6 text-balticSea-400 xs:text-sm xs:leading-7">
          {text}
        </p>
      </div>

      <div className="pr-11 xs:pr-13">
        <TicketMessageBadge type={type} />
      </div>
    </div>
  );
}
