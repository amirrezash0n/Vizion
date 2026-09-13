import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../../../components/common/Button/Button";

interface OrderHeaderProps {
  date: string;
}

export default function OrderHeader({ date }: OrderHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6" dir="rtl">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="w-8 h-8 rounded-lg rotate-180 hover:bg-dawn/10 transition-colors p-0"
      >
        <IoIosArrowBack size={20} className="text-balticSea-400" />
      </Button>
      <span className="font-morabbaLight text-xs text-dawn">{date}</span>
    </div>
  );
}
