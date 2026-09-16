import { Link, useNavigate } from "react-router";
import Button from "../../components/common/Button/Button";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/login", { replace: true });
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
            ایجاد حساب کاربری
          </h2>
          <p className="font-morabbaMedium text-xs text-dawn xs:text-sm">
            برای ساخت حساب کاربری روی دکمه زیر کلیک کنید
          </p>
        </div>

        <Button
          type="button"
          variant="primary"
          size="full"
          onClick={handleSignup}
          className="mb-4 rounded-xl font-yekanBold"
        >
          میخوام ثبت نام بشم
        </Button>

        <p
          className="text-center font-morabbaMedium text-xs text-dawn xs:text-sm"
          dir="rtl"
        >
          قبلا ثبت‌نام کرده‌اید؟{" "}
          <Link
            to="/login"
            className="font-yekanBold text-primary transition-colors hover:text-secondary"
          >
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
}
