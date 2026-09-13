// src/pages/Notifications/NotificationDetails/NotificationDetails.tsx
import { useNavigate, useParams } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { FaCircle, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import Button from "../../../components/common/Button/Button";
import { useNotificationStore } from "../../../store/notificationStore";
import { toPersianDate, toPersianTime } from "../../../utils/dateUtils";

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
        <PageHeader />
        <div className="bg-offWhite rounded-2xl p-8 max-w-2xl mx-auto mt-4 text-center animate-fadeIn">
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
      <PageHeader />
      <div
        className={`
          bg-offWhite rounded-2xl p-4 xs:p-6 sm:p-8 max-w-2xl mx-auto mt-4
          transition-all duration-300
          ${isDeleting ? "opacity-0 scale-95" : "opacity-100 scale-100 animate-fadeIn"}
        `}
      >
        <div
          className="flex items-center justify-between mb-4 xs:mb-6"
          dir="rtl"
        >
          <div className="flex items-center gap-1.5 xs:gap-2">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="w-7 h-7 xs:w-8 xs:h-8 rounded-lg rotate-180 hover:bg-dawn/10 transition-colors p-0"
            >
              <IoIosArrowBack
                size={18}
                className="xs:hidden text-balticSea-400"
              />
              <IoIosArrowBack
                size={20}
                className="hidden xs:block text-balticSea-400"
              />
            </Button>
            <Button
              variant="ghost"
              onClick={handleDelete}
              className="w-7 h-7 xs:w-8 xs:h-8 rounded-lg hover:bg-danger/10 transition-colors group p-0"
            >
              <FaTrash
                size={12}
                className="xs:hidden text-dawn group-hover:text-danger transition-colors"
              />
              <FaTrash
                size={14}
                className="hidden xs:block text-dawn group-hover:text-danger transition-colors"
              />
            </Button>
          </div>

          <span className="font-morabbaLight text-[10px] xs:text-xs text-dawn">
            {toPersianTime(notification.createdAt)} -{" "}
            {toPersianDate(notification.createdAt)}
          </span>
        </div>

        <div className="flex gap-3 xs:gap-4" dir="rtl">
          <div className="border-r-2 border-dashed border-primary/40 self-stretch" />
          <div className="flex-1 space-y-3 xs:space-y-4 min-w-0">
            <h2 className="flex items-center gap-2 font-yekanBold text-sm xs:text-base text-balticSea-400">
              {!notification.isRead && (
                <FaCircle
                  size={8}
                  className="text-primary shrink-0 animate-pulse"
                />
              )}
              <span className="truncate">{notification.title}</span>
            </h2>
            <p className="font-morabbaMedium text-xs xs:text-sm text-balticSea-400 leading-6 xs:leading-7 text-justify">
              {notification.fullText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
