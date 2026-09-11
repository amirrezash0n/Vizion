import type { IconType } from "react-icons";

interface NoDataStateProps {
  icon: IconType;
  title?: string;
  dashboard?: boolean;
}

export default function NoDataState({
  icon: Icon,
  title = "داده‌ای یافت نشد!",
  dashboard = false,
}: NoDataStateProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center gap-4 
        bg-offWhite rounded-2xl border border-white-5 p-8
        ${dashboard ? "min-h-48 xs:min-h-64 sm:min-h-80" : "min-h-100"}
      `}
    >
      <div className="flex items-center justify-center text-mobster">
        <Icon
          size={56}
          strokeWidth={1.2}
          className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14"
        />
      </div>

      <p className="font-yekanMedium text-sm xs:text-base sm:text-lg text-mobster text-center">
        {title}
      </p>
    </div>
  );
}
