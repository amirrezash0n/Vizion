import { FiBellOff } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
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

      <div className="bg-offWhite rounded-[20px] p-4 xs:p-5 sm:p-6 w-full max-w-md mx-auto mt-8 overflow-hidden animate-fadeIn">
        <div className="flex items-center justify-between mb-3 xs:mb-5">
          <div className="relative flex justify-start w-32.5 h-11.75">
            <div className="absolute -right-6 xs:-right-8 sm:-right-10 flex items-center font-morabbaBold gap-1.5 bg-primary text-white px-3.5 xs:px-5.5 py-2 xs:py-2.5 rounded-tl-full rounded-bl-full">
              <IoMdNotificationsOutline size={18} className="xs:hidden" />
              <IoMdNotificationsOutline
                size={20}
                strokeWidth={20}
                className="hidden xs:block"
              />
              <span className="text-xs xs:text-sm">اعلانات</span>
            </div>
          </div>

          {notifications.length > 0 && (
            <div className="flex items-center gap-1.5 xs:gap-2">
              <Button
                variant="soft"
                size="tiny"
                onClick={markAllAsRead}
                disabled={!hasUnread}
                title="همه را خوانده‌شده کن"
                className="rounded-lg transition-colors font-yekanMedium"
              >
                <MdDoneAll size={16} />
                <span className="hidden xs:inline">همش خوانده شد</span>
              </Button>

              <Button
                variant="danger"
                size="tiny"
                onClick={deleteAllNotifications}
                title="حذف همه اعلان‌ها"
                className="rounded-lg transition-colors font-yekanMedium"
              >
                <MdDeleteSweep size={16} />
                <span className="hidden xs:inline">حذف همه</span>
              </Button>
            </div>
          )}
        </div>

        {notifications.length === 0 ? (
          <NoDataState icon={FiBellOff} title="هیچ اعلانی وجود ندارد!" />
        ) : (
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
        )}
      </div>
    </div>
  );
}
