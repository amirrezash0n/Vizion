import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../../../components/common/Button/Button";

interface OrderHeaderProps {
  date: string;
}

export default function OrderHeader({ date }: OrderHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="mb-6 flex items-center justify-between" dir="rtl">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="h-8 w-8 rotate-180 rounded-lg p-0 transition-colors hover:bg-dawn/10"
      >
        <IoIosArrowBack size={20} className="text-balticSea-400" />
      </Button>
      <span className="font-morabbaLight text-xs text-dawn">{date}</span>
    </div>
  );
}
