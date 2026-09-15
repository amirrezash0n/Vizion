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
        name: "Amir",
        email: "amir@example.com",
      },
      "fake-token",
    );

    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-balticSea-400 p-4">
      <div className="w-full max-w-123.75 bg-offWhite rounded-3xl p-6 xs:p-8 sm:p-10 min-h-166 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="font-morabbaBold text-3xl xs:text-4xl text-primary">
            ویزیون
          </h1>
        </div>

        <div className="text-center mb-10" dir="rtl">
          <h2 className="font-yekanBold text-lg xs:text-xl text-balticSea-400 mb-2">
            ورود به حساب
          </h2>
          <p className="font-morabbaMedium text-xs xs:text-sm text-dawn">
            لطفا برای ورود اطلاعات زیر را کامل کنید
          </p>
        </div>

        <Button
          type="button"
          variant="primary"
          size="full"
          onClick={handleLogin}
          className="font-yekanBold rounded-xl mb-4"
        >
          ورود به حساب کاربری
        </Button>

        <p
          className="text-center font-morabbaMedium text-xs xs:text-sm text-dawn"
          dir="rtl"
        >
          حساب کاربری ندارید؟{" "}
          <Link
            to="/signup"
            className="font-yekanBold text-primary hover:text-secondary transition-colors"
          >
            ثبت نام
          </Link>
        </p>
      </div>
    </div>
  );
}
