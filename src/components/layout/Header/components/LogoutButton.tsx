import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router";
import Button from "../../../common/Button/Button";
import useAuthStore from "../../../../store/authStore";
import useToast from "../../../../hooks/useToast";
import { MESSAGES } from "../../../../constants/messages";
import { useConfirmContext } from "../../../../context/ConfirmContext";

function LogoutButton() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const logout = useAuthStore((state) => state.logout);
  const { confirm } = useConfirmContext();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
    showToast({
      type: "success",
      message: MESSAGES.logout.success,
    });
  }

  function handleClick() {
    confirm({
      ...MESSAGES.logout.confirm,
      onConfirm: handleLogout,
    });
  }

  return (
    <Button
      variant="icon"
      size="icon"
      className="text-primary"
      onClick={handleClick}
    >
      <LuLogOut size={20} className="rotate-180" />
    </Button>
  );
}

export default LogoutButton;
