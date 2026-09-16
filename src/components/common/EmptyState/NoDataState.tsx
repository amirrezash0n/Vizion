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
      className={`flex flex-col items-center justify-center gap-4 rounded-2xl border border-white-5 bg-offWhite p-8 ${dashboard ? "min-h-48 xs:min-h-64 sm:min-h-80" : "min-h-100"} `}
    >
      <div className="flex items-center justify-center text-mobster">
        <Icon
          size={56}
          strokeWidth={1.2}
          className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14"
        />
      </div>

      <p className="text-center font-yekanMedium text-sm text-mobster xs:text-base sm:text-lg">
        {title}
      </p>
    </div>
  );
}
