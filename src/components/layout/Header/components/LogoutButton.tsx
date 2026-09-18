import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router";
import Button from "../../../common/Button/Button";
import useAuthStore from "../../../../store/authStore";
import useToast from "../../../../hooks/useToast";
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
      message: "شما با موفقیت از حساب کاربری خود خارج شدید.",
    });
  }

  function handleClick() {
    confirm({
      title: "خروج از حساب کاربری",
      message: "آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟",
      confirmLabel: "بله، خارج شو",
      cancelLabel: "انصراف",
      variant: "danger",
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
