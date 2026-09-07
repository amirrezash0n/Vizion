import { FaRegBell } from "react-icons/fa";
import Button from "../../../common/Button";

function NotificationButton() {
  return (
    <Button className="relative" variant="icon" size="icon">
      <div className="absolute size-2 top-2.5 right-2.5 bg-primary rounded-full"></div>
      <FaRegBell size={20} />
    </Button>
  );
}

export default NotificationButton;
