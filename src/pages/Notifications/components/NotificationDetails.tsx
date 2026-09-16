import { useNavigate, useParams } from "react-router";
import { FaCircle, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import Button from "../../../components/common/Button/Button";
import { useNotificationStore } from "../../../store/notificationStore";
import { toPersianDate, toPersianTime } from "../../../utils/date.utils";
import BackButton from "../../../components/common/BackButton/BackButton";

export default function NotificationDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isDeleting, setIsDeleting] = useState(false);

  const { notifications, markAsRead, deleteNotification } =
    useNotificationStore();
  const notification = notifications.find((n) => n.id === Number(id));

  useEffect(() => {
    if (notification && !notification.isRead) {
      markAsRead(notification.id);
    }
  }, [notification, markAsRead]);

  if (!notification) {
    return (
      <div>
        <BackButton />
        <PageHeader />
        <div className="mx-auto mt-4 max-w-2xl animate-fadeIn rounded-2xl bg-offWhite p-8 text-center">
          <p className="font-morabbaMedium text-sm text-dawn">
            اعلان مورد نظر پیدا نشد!
          </p>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteNotification(notification.id);
      navigate("/notifications");
    }, 300);
  };

  return (
    <div>
      <BackButton />
      <PageHeader />
      <div
        className={`mx-auto mt-4 max-w-2xl rounded-2xl bg-offWhite p-4 transition-all duration-300 xs:p-6 sm:p-8 ${isDeleting ? "scale-95 opacity-0" : "scale-100 animate-fadeIn opacity-100"} `}
      >
        <div
          className="mb-4 flex items-center justify-between xs:mb-6"
          dir="rtl"
        >
          <Button
            variant="ghost"
            onClick={handleDelete}
            className="group h-7 w-7 rounded-lg p-0 transition-colors hover:bg-danger/10 xs:h-8 xs:w-8"
          >
            <FaTrash
              size={12}
              className="text-dawn transition-colors group-hover:text-danger xs:hidden"
            />
            <FaTrash
              size={14}
              className="hidden text-dawn transition-colors group-hover:text-danger xs:block"
            />
          </Button>

          <span className="font-morabbaLight text-[10px] text-dawn xs:text-xs">
            {toPersianTime(notification.createdAt)} -{" "}
            {toPersianDate(notification.createdAt)}
          </span>
        </div>

        <div className="flex gap-3 xs:gap-4" dir="rtl">
          <div className="self-stretch border-r-2 border-dashed border-primary/40" />
          <div className="min-w-0 flex-1 space-y-3 xs:space-y-4">
            <h2 className="flex items-center gap-2 font-yekanBold text-sm text-balticSea-400 xs:text-base">
              {!notification.isRead && (
                <FaCircle
                  size={8}
                  className="shrink-0 animate-pulse text-primary"
                />
              )}
              <span className="truncate">{notification.title}</span>
            </h2>
            <p className="text-justify font-morabbaMedium text-xs leading-6 text-balticSea-400 xs:text-sm xs:leading-7">
              {notification.fullText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
