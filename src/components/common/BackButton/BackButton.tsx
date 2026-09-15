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
        "flex items-center gap-1.5 p-1.5 my-3 xs:my-5 rounded-lg hover:bg-dawn/10 transition-colors",
        className,
      )}
    >
      <TiArrowBack size={20} className="text-balticSea-400" />
      <span className="font-morabbaMedium font-semibold text-sm xs:text-base text-balticSea-400">
        بازگشت
      </span>
    </Button>
  );
}
