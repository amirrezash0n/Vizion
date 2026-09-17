import { FaCircle } from "react-icons/fa";
import { Link } from "react-router";
import type { Notification } from "../../../types/notification.types";
import { getRelativeTime } from "../../../utils/date.utils";

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  const { id, title, isRead, createdAt } = notification;

  return (
    <Link
      to={`/notifications/${id}`}
      className={`flex items-center justify-between gap-3 overflow-hidden rounded-xl px-3 py-3 transition-all duration-200 hover:scale-[1.01] hover:shadow-sm xs:gap-4 xs:px-5 xs:py-4 ${isRead ? "bg-cloud" : "bg-softPink hover:bg-primary/10"} `}
      dir="rtl"
    >
      <div className="min-w-0 flex-1 space-y-2 text-right">
        <div className="relative flex items-center">
          {!isRead && (
            <FaCircle
              size={16}
              className="absolute -right-7 shrink-0 animate-pulse text-crimson"
            />
          )}
          <p
            className={`truncate font-yekanBold text-xs xs:text-sm ${isRead ? "text-slate" : "text-balticSea-400"}`}
          >
            {title}
          </p>
        </div>
        <p className="font-yekanRegular text-[10px] text-dawn xs:text-xs">
          {getRelativeTime(createdAt)}
        </p>
      </div>
    </Link>
  );
}
