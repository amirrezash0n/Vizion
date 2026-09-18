import { Link, useNavigate } from "react-router";
import { useForm, useWatch } from "react-hook-form";
import Button from "../../components/common/Button/Button";
import useToast from "../../hooks/useToast";
import { MESSAGES } from "../../constants/messages";
import type { SignupForm } from "../../types/auth.types";
import FormInput from "../Profile/components/FormInput";

export default function Signup() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    mode: "onBlur",
  });

  const password = useWatch({ control, name: "password" });

  const onSubmit = async (data: SignupForm) => {
    try {
      console.log("Signup data:", data);
      reset();
      showToast({
        type: "success",
        message: MESSAGES.signup.success,
      });
      navigate("/login", { replace: true });
    } catch {
      showToast({
        type: "failed",
        message: MESSAGES.signup.error,
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
            ایجاد حساب کاربری
          </h2>
          <p className="font-morabbaMedium text-xs text-dawn xs:text-sm">
            برای ساخت حساب کاربری اطلاعات زیر را کامل کنید
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4 space-y-4"
          dir="rtl"
        >
          <FormInput
            label="نام و نام خانوادگی"
            placeholder="نام خود را وارد کنید ..."
            error={errors.fullName?.message}
            {...register("fullName", {
              required: "نام و نام خانوادگی الزامی است",
              minLength: {
                value: 3,
                message: "نام باید حداقل ۳ کاراکتر باشد",
              },
            })}
          />

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

          <FormInput
            label="تکرار رمز عبور"
            placeholder="تکرار رمز عبور را وارد کنید ..."
            type="password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword", {
              required: "تکرار رمز عبور الزامی است",
              validate: (value) =>
                value === password || "رمز عبور و تکرار آن یکسان نیستند",
            })}
          />

          <Button
            type="submit"
            variant="primary"
            size="full"
            className="rounded-xl font-yekanBold"
            disabled={isSubmitting}
          >
            ثبت نام
          </Button>
        </form>

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
