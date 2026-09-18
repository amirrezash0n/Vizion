import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button/Button";
import useAuthStore from "../../store/authStore";
import useToast from "../../hooks/useToast";
import { MESSAGES } from "../../constants/messages";
import type { LoginForm } from "../../types/auth.types";
import FormInput from "../Profile/components/FormInput";

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      login(
        {
          id: 1,
          fullName: "امیررضا شورورزی",
          email: data.email,
          avatar: "/images/panel-Image.jpg",
        },
        "fake-token",
      );

      showToast({
        type: "success",
        message: MESSAGES.login.success,
      });

      navigate("/", { replace: true });
    } catch {
      showToast({
        type: "failed",
        message: MESSAGES.login.error,
      });
    }
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4 space-y-4"
          dir="rtl"
        >
          <FormInput
            label="ایمیل"
            placeholder="ایمیل خود را وارد کنید ..."
            type="email"
            error={errors.email?.message}
            {...register("email", {
              required: "ایمیل الزامی است",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "فرمت ایمیل صحیح نیست",
              },
            })}
          />

          <FormInput
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید ..."
            type="password"
            error={errors.password?.message}
            {...register("password", {
              required: "رمز عبور الزامی است",
              minLength: {
                value: 8,
                message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
              },
            })}
          />

          <Button
            type="submit"
            variant="primary"
            size="full"
            className="rounded-xl font-yekanBold"
            disabled={isSubmitting}
          >
            ورود به حساب کاربری
          </Button>
        </form>

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
