import { useForm, useWatch } from "react-hook-form";
import FormInput from "./FormInput";
import Button from "../../../components/common/Button/Button";
import type { PasswordFormData } from "../../../types/profile";

export default function PasswordChangeCard() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<PasswordFormData>({
    mode: "onBlur",
  });

  const newPassword = useWatch({
    control,
    name: "newPassword",
  });

  const onSubmit = (data: PasswordFormData) => {
    console.log("Password data:", data);
    reset();
  };

  return (
    <div className="bg-offWhite rounded-[20px] p-4 xs:p-5 sm:p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 xs:space-y-5"
      >
        <FormInput
          label="رمز عبور فعلی"
          placeholder="رمز عبور فعلی را وارد کنید ..."
          type="password"
          error={errors.currentPassword?.message}
          {...register("currentPassword", {
            required: "رمز عبور فعلی الزامی است",
          })}
        />

        <FormInput
          label="رمز عبور جدید"
          placeholder="رمز عبور جدید را وارد کنید ..."
          type="password"
          error={errors.newPassword?.message}
          {...register("newPassword", {
            required: "رمز عبور جدید الزامی است",
            minLength: {
              value: 8,
              message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
            },
          })}
        />

        <FormInput
          label="تکرار رمز عبور جدید"
          placeholder="تکرار رمز عبور جدید را وارد کنید ..."
          type="password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "تکرار رمز عبور الزامی است",
            validate: (value) =>
              value === newPassword || "رمز عبور و تکرار آن یکسان نیستند",
          })}
        />

        <div className="flex justify-start pt-2" dir="rtl">
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="font-yekanBold rounded-xl"
          >
            تغییر رمز عبور
          </Button>
        </div>
      </form>
    </div>
  );
}
