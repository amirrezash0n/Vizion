import { FaRegBell } from "react-icons/fa";
import Button from "../../../common/Button";
import { Link } from "react-router";

function NotificationButton() {
  return (
    <Link to="/notifications">
      <Button className="relative" variant="icon" size="icon">
        <div className="absolute size-2 top-2.5 right-2.5 bg-primary rounded-full"></div>
        <FaRegBell size={20} />
      </Button>
    </Link>
  );
}

export default NotificationButton;
