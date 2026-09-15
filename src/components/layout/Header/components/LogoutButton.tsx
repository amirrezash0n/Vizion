import { LuLogOut } from "react-icons/lu";
import Button from "../../../common/Button/Button";
import { useNavigate } from "react-router";
import useAuthStore from "../../../../store/authStore";

function LogoutButton() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
    // Show Toast to logout
  }

  return (
    <Button
      variant="icon"
      size="icon"
      className="text-primary"
      onClick={handleLogout}
    >
      <LuLogOut size={20} className="rotate-180" />
    </Button>
  );
}

export default LogoutButton;
