import { FaCircle } from "react-icons/fa";
import { Link } from "react-router";
import type { Notification } from "../../../types/notification";

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  const { id, title, time, isRead } = notification;

  return (
    <Link
      to={`/notifications/${id}`}
      className={`
        flex items-center justify-between gap-3 xs:gap-4
        rounded-xl px-3 xs:px-5 py-3 xs:py-4
        transition-all duration-200
        hover:scale-[1.01] hover:shadow-sm overflow-hidden
        ${isRead ? "bg-cloud" : "bg-softPink hover:bg-primary/10"}
      `}
      dir="rtl"
    >
      <div className="flex-1 text-right space-y-2 min-w-0">
        <div className="relative flex items-center">
          {!isRead && (
            <FaCircle
              size={16}
              className="absolute -right-7 text-crimson shrink-0 animate-pulse"
            />
          )}
          <p
            className={`font-yekanBold text-xs xs:text-sm truncate ${isRead ? "text-slate" : "text-balticSea-400"}`}
          >
            {title}
          </p>
        </div>
        <p className="font-yekanRegular text-[10px] xs:text-xs text-dawn">
          {time}
        </p>
      </div>
    </Link>
  );
}
