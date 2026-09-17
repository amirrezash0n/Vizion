import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import ProfileAvatar from "./ProfileAvatar";
import Button from "../../../components/common/Button/Button";
import { PROFILE_VALIDATION } from "../schemas/profileValidation";
import type { ProfileFormData } from "../../../types/profile.types";
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
    <div className="rounded-[20px] bg-offWhite p-4 xs:p-5 sm:p-6">
      <div className="mb-6 border-b border-dashed border-cloud pb-6">
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
          className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 pt-2"
          dir="rtl"
        >
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="rounded-xl font-yekanBold"
            disabled={!isDirty}
          >
            ذخیره تغییرات
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="rounded-xl font-yekanBold"
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
