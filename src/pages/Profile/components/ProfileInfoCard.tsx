import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import ProfileAvatar from "./ProfileAvatar";
import Button from "../../../components/common/Button/Button";

interface ProfileFormData {
  fullName: string;
  phone: string;
  email: string;
}

interface ProfileInfoCardProps {
  defaultValues: ProfileFormData;
  avatar: string;
  username: string;
}

export default function ProfileInfoCard({
  defaultValues,
  avatar,
  username,
}: ProfileInfoCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProfileFormData>({
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile data:", data);
    // API call
  };

  return (
    <div className="bg-offWhite rounded-[20px] p-4 xs:p-6 sm:p-8">
      <div className="mb-6 pb-6 border-b border-dashed border-cloud">
        <ProfileAvatar
          name={username}
          phone={defaultValues.phone}
          avatar={avatar}
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 xs:space-y-5"
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
          label="شماره تماس"
          placeholder="شماره تماس خود را وارد کنید ..."
          error={errors.phone?.message}
          {...register("phone", {
            required: "شماره تماس الزامی است",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "شماره تماس باید ۱۱ رقم باشد",
            },
          })}
        />

        <FormInput
          label="ایمیل آدرس"
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

        <div className="flex justify-start pt-2" dir="rtl">
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="font-yekanBold rounded-xl"
            disabled={!isDirty}
          >
            ذخیره تغییرات
          </Button>
        </div>
      </form>
    </div>
  );
}
