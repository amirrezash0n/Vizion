import { FiPlus } from "react-icons/fi";
import type { ProfileAvatarProps } from "../../../types/profile";

export default function ProfileAvatar({
  name,
  phone,
  avatar,
}: ProfileAvatarProps) {
  return (
    <div className="flex items-center gap-4" dir="rtl">
      <div className="relative shrink-0">
        <img
          src={avatar}
          alt={name}
          className="size-16 rounded-full border-2 border-white object-cover shadow-md xs:h-20 xs:w-20"
        />
        <button
          type="button"
          className="absolute -bottom-1 -left-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-md transition-colors hover:bg-secondary xs:h-8 xs:w-8"
          aria-label="تغییر تصویر"
        >
          <FiPlus size={14} />
        </button>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="font-morabbaMedium text-[10px] text-dawn xs:text-xs">
            نام کاربری:
          </span>
        </div>
        <span className="font-yekanBold text-sm text-balticSea-400 xs:text-base">
          {name}
        </span>
        <span
          className="font-morabbaMedium text-[10px] text-dawn xs:text-xs"
          dir="ltr"
        >
          {phone}
        </span>
      </div>
    </div>
  );
}
