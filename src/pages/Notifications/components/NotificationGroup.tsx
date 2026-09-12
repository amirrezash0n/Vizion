import type { Notification } from "../../../types/notification";
import NotificationItem from "./NotificationItem";

interface NotificationGroupProps {
  title: string;
  notifications: Notification[];
  type: "new" | "read";
}

export default function NotificationGroup({
  title,
  notifications,
  type,
}: NotificationGroupProps) {
  if (notifications.length === 0) return null;

  return (
    <div className="space-y-2 xs:space-y-3">
      <div className="flex justify-start">
        <span
          className={`font-yekanBold text-[10px] xs:text-xs  px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-lg ${type === "new" ? "text-crimson bg-softPink" : "text-slate bg-cloud"}`}
        >
          {title}
        </span>
      </div>

      <div className="space-y-2 xs:space-y-3">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
}
