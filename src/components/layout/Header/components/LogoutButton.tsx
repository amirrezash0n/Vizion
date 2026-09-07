import { LuLogOut } from "react-icons/lu";
import Button from "../../../common/Button";

function LogoutButton() {
  return (
    <Button variant="icon" size="icon" className="text-primary">
      <LuLogOut size={20} className="rotate-180" />
    </Button>
  );
}

export default LogoutButton;
