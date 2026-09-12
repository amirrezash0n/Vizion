import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router";
import Button from "../../../common/Button/Button";
import { useNotificationStore } from "../../../../store/notificationStore";

function NotificationButton() {
  const { notifications } = useNotificationStore();
  const hasUnread = notifications.some((n) => !n.isRead);
  return (
    <Link to="/notifications">
      <Button className="relative" variant="icon" size="icon">
        {hasUnread && (
          <div className="absolute size-2 top-2.5 right-2.5 bg-primary rounded-full animate-pulse" />
        )}
        <FaRegBell size={20} />
      </Button>
    </Link>
  );
}

export default NotificationButton;
