import { FiPlus } from "react-icons/fi";

interface ProfileAvatarProps {
  name: string;
  phone: string;
  avatar: string;
}

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
          className="w-20 h-20 xs:w-24 xs:h-24 rounded-full object-cover border-2 border-white shadow-md"
        />
        <button
          type="button"
          className="absolute -bottom-1 -left-1 flex items-center justify-center w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-primary text-white shadow-md hover:bg-secondary transition-colors"
          aria-label="تغییر تصویر"
        >
          <FiPlus size={14} />
        </button>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="font-morabbaMedium text-[10px] xs:text-xs text-dawn">
            نام کاربری:
          </span>
        </div>
        <span className="font-yekanBold text-sm xs:text-base text-balticSea-400">
          {name}
        </span>
        <span
          className="font-morabbaMedium text-[10px] xs:text-xs text-dawn"
          dir="ltr"
        >
          {phone}
        </span>
      </div>
    </div>
  );
}
