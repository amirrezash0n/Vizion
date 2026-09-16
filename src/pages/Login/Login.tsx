import { Link, useNavigate } from "react-router";
import useAuthStore from "../../store/authStore";
import Button from "../../components/common/Button/Button";

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login(
      {
        id: 1,
        fullName: "امیررضا شورورزی",
        email: "shourvarziamirreza@gmail.com",
        avatar: "/images/panel-Image.jpg",
      },
      "fake-token",
    );

    navigate("/", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-balticSea-400 p-4">
      <div className="flex min-h-166 w-full max-w-123.75 flex-col justify-center rounded-3xl bg-offWhite p-6 xs:p-8 sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="font-morabbaBold text-3xl text-primary xs:text-4xl">
            ویزیون
          </h1>
        </div>

        <div className="mb-10 text-center" dir="rtl">
          <h2 className="mb-2 font-yekanBold text-lg text-balticSea-400 xs:text-xl">
            ورود به حساب
          </h2>
          <p className="font-morabbaMedium text-xs text-dawn xs:text-sm">
            لطفا برای ورود اطلاعات زیر را کامل کنید
          </p>
        </div>

        <Button
          type="button"
          variant="primary"
          size="full"
          onClick={handleLogin}
          className="mb-4 rounded-xl font-yekanBold"
        >
          ورود به حساب کاربری
        </Button>

        <p
          className="text-center font-morabbaMedium text-xs text-dawn xs:text-sm"
          dir="rtl"
        >
          حساب کاربری ندارید؟{" "}
          <Link
            to="/signup"
            className="font-yekanBold text-primary transition-colors hover:text-secondary"
          >
            ثبت نام
          </Link>
        </p>
      </div>
    </div>
  );
}
