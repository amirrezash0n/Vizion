import { FiBellOff } from "react-icons/fi";
import { MdDoneAll, MdDeleteSweep } from "react-icons/md";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import NoDataState from "../../components/common/EmptyState/NoDataState";
import Button from "../../components/common/Button/Button";
import { useNotificationStore } from "../../store/notificationStore";
import NotificationGroup from "./components/NotificationGroup";

export default function Notifications() {
  const { notifications, markAllAsRead, deleteAllNotifications } =
    useNotificationStore();

  const newNotifications = notifications.filter((n) => !n.isRead);
  const readNotifications = notifications.filter((n) => n.isRead);
  const hasUnread = newNotifications.length > 0;

  return (
    <div>
      <PageHeader />

      <div className="mx-auto mt-8 w-full max-w-md animate-fadeIn overflow-hidden rounded-[20px] bg-offWhite p-4 xs:p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between xs:mb-5">
          {notifications.length > 0 && (
            <div className="flex w-full items-center justify-between gap-1.5 xs:gap-2">
              <Button
                variant="soft"
                size="tiny"
                onClick={markAllAsRead}
                disabled={!hasUnread}
                title="خوانده شدن پیام ها"
                className="gap-x-1.5 rounded-lg font-yekanMedium transition-colors"
              >
                <MdDoneAll size={16} />
                <span className="hidden xs:inline">همش خوانده شد</span>
              </Button>

              <Button
                variant="danger"
                size="tiny"
                onClick={deleteAllNotifications}
                title="حذف همه اعلان‌ها"
                className="gap-x-1.5 rounded-lg font-yekanMedium transition-colors"
              >
                <MdDeleteSweep size={16} />
                <span className="hidden xs:inline">حذف همه</span>
              </Button>
            </div>
          )}
        </div>

        {notifications.length > 0 ? (
          <>
            <NotificationGroup
              title="جدید ها"
              type="new"
              notifications={newNotifications}
              initialCount={3}
              step={3}
            />

            <div className="mt-4 xs:mt-6">
              <NotificationGroup
                title="خوانده شده"
                type="read"
                notifications={readNotifications}
                initialCount={3}
                step={3}
              />
            </div>
          </>
        ) : (
          <NoDataState icon={FiBellOff} title="هیچ اعلانی وجود ندارد!" />
        )}
      </div>
    </div>
  );
}
