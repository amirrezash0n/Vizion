import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import ProfileAvatar from "./ProfileAvatar";
import Button from "../../../components/common/Button/Button";
import { PROFILE_VALIDATION } from "../schemas/profileValidation";
import type { ProfileFormData } from "../../../types/profile";
import { FiLock, FiX } from "react-icons/fi";

interface ProfileInfoCardProps {
  defaultValues: ProfileFormData;
  avatar: string;
  username: string;
  onTogglePassword: () => void;
  isPasswordOpen: boolean;
}

export default function ProfileInfoCard({
  defaultValues,
  avatar,
  username,
  onTogglePassword,
  isPasswordOpen,
}: ProfileInfoCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProfileFormData>({
    defaultValues,
    mode: "onBlur",
  });

  const passwordButtonConfig = isPasswordOpen
    ? { label: "بستن تغییر رمز عبور", icon: FiX }
    : { label: "تغییر رمز عبور", icon: FiLock };

  const PasswordIcon = passwordButtonConfig.icon;

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile data:", data);
    // API call
  };

  return (
    <div className="bg-offWhite rounded-[20px] p-4 xs:p-5 sm:p-6">
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
          {...register("fullName", PROFILE_VALIDATION.fullName)}
        />

        <FormInput
          label="شماره تماس"
          placeholder="شماره تماس خود را وارد کنید ..."
          error={errors.phone?.message}
          {...register("phone", PROFILE_VALIDATION.phone)}
        />

        <FormInput
          label="ایمیل آدرس"
          placeholder="ایمیل خود را وارد کنید ..."
          type="email"
          error={errors.email?.message}
          {...register("email", PROFILE_VALIDATION.email)}
        />

        <div
          className="flex justify-between flex-wrap gap-y-2 gap-x-2 items-center pt-2"
          dir="rtl"
        >
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="font-yekanBold rounded-xl"
            disabled={!isDirty}
          >
            ذخیره تغییرات
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="font-yekanBold rounded-xl"
            onClick={onTogglePassword}
          >
            <span className="flex items-center gap-2">
              <span>{passwordButtonConfig.label}</span>
              <PasswordIcon size={14} />
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
}
