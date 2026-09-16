import { useState } from "react";
import type { Notification } from "../../../types/notification";
import NotificationItem from "./NotificationItem";
import Button from "../../../components/common/Button/Button";

interface NotificationGroupProps {
  title: string;
  notifications: Notification[];
  type: "new" | "read";
  initialCount?: number;
  step?: number;
}

export default function NotificationGroup({
  title,
  notifications,
  type,
  initialCount = 3,
  step = 3,
}: NotificationGroupProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  if (notifications.length === 0) return null;

  const visibleNotifications = notifications.slice(0, visibleCount);
  const hasMore = visibleCount < notifications.length;

  return (
    <div className="space-y-2 xs:space-y-3">
      <div className="flex justify-start">
        <span
          className={`rounded-lg px-2.5 py-1 font-yekanBold text-[10px] xs:px-3 xs:py-1.5 xs:text-xs ${
            type === "new" ? "bg-softPink text-crimson" : "bg-cloud text-slate"
          }`}
        >
          {title}
        </span>
      </div>

      <div className="space-y-2 xs:space-y-3">
        {visibleNotifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>

      {(hasMore || visibleCount > initialCount) && (
        <div className="flex justify-center pt-1">
          {hasMore ? (
            <Button
              variant="ghost"
              size="link"
              onClick={() => setVisibleCount((prev) => prev + step)}
              className="rounded-none p-0 font-yekanMedium text-[10px] text-black underline transition-opacity hover:opacity-80 xs:text-xs"
            >
              نمایش بیشتر
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="link"
              onClick={() => setVisibleCount(initialCount)}
              className="rounded-none p-0 font-yekanMedium text-[10px] text-slate underline transition-opacity hover:opacity-80 xs:text-xs"
            >
              نمایش کمتر
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
