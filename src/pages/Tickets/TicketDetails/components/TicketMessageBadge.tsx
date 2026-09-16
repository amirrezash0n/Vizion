import { FiSend, FiMessageCircle } from "react-icons/fi";

interface TicketMessageBadgeProps {
  type: "question" | "answer";
}

export default function TicketMessageBadge({ type }: TicketMessageBadgeProps) {
  const config = {
    question: {
      label: "پرسش",
      icon: FiSend,
      className: "bg-softPink text-crimson",
    },
    answer: {
      label: "پاسخ",
      icon: FiMessageCircle,
      className: "bg-emerald-100 text-success",
    },
  };

  const { label, icon: Icon, className } = config[type];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-yekanBold text-[10px] xs:px-3 xs:py-1.5 xs:text-xs ${className}`}
    >
      <Icon size={12} className="rotate-180" />
      <span>{label}</span>
    </span>
  );
}
