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
            className="w-9 h-9 xs:w-10 xs:h-10 rounded-full object-cover shrink-0"
          />
          <span className="font-yekanBold text-xs xs:text-sm text-balticSea-400">
            {name}
          </span>
        </div>
        <span className="font-morabbaLight text-[10px] xs:text-xs text-dawn shrink-0">
          {date}
        </span>
      </div>

      <div className="bg-white rounded-2xl p-4 xs:p-5 border border-cloud">
        <p className="font-yekanMedium text-xs xs:text-sm text-balticSea-400 leading-6 xs:leading-7 text-justify">
          {text}
        </p>
      </div>

      <div className="pr-11 xs:pr-13">
        <TicketMessageBadge type={type} />
      </div>
    </div>
  );
}
