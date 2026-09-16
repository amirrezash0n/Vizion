import { useNavigate } from "react-router";
import { TiArrowBack } from "react-icons/ti";
import Button from "../Button/Button";
import { cn } from "../../../utils/class.utils";

export interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = "" }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      onClick={() => navigate(-1)}
      className={cn(
        "my-3 flex items-center gap-1.5 rounded-lg p-1.5 transition-colors hover:bg-dawn/10 xs:my-5",
        className,
      )}
    >
      <TiArrowBack size={20} className="text-balticSea-400" />
      <span className="font-morabbaMedium text-sm font-semibold text-balticSea-400 xs:text-base">
        بازگشت
      </span>
    </Button>
  );
}
