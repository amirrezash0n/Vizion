import type { IconType } from "react-icons";
import { cn } from "../../../utils/class.utils";

interface ErrorGraphicProps {
  code: string;
  icon: IconType;
  color?: "primary" | "danger";
}

export default function ErrorGraphic({
  code,
  icon: Icon,
  color = "primary",
}: ErrorGraphicProps) {
  return (
    <div className="relative">
      <h1
        className={cn(
          "font-morabbaBold text-[100px] leading-none select-none xs:text-[130px] sm:text-[160px]",
          color === "primary" ? "text-primary/20" : "text-danger/20",
        )}
      >
        {code}
      </h1>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white-5 bg-balticSea-300 shadow-lg xs:h-20 xs:w-20">
          <Icon
            size={28}
            className={cn(
              "xs:hidden",
              color === "primary" ? "text-primary" : "text-danger",
            )}
          />
          <Icon
            size={36}
            className={cn(
              "hidden xs:block",
              color === "primary" ? "text-primary" : "text-danger",
            )}
          />
        </div>
      </div>
    </div>
  );
}
