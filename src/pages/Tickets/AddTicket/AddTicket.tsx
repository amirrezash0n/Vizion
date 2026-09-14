import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import PageHeader from "../../../components/common/PageHeader/PageHeader.tsx";
import Button from "../../../components/common/Button/Button";
import TicketForm from "./components/TicketForm";

export default function AddTicket() {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader />
      <div className="flex items-center justify-between mt-6 mb-10" dir="rtl">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="w-8 h-8 rounded-lg rotate-180 hover:bg-dawn/10 transition-colors p-0"
          >
            <IoIosArrowBack size={20} className="text-balticSea-400" />
          </Button>
          <span className="font-yekanBold text-xs xs:text-sm text-balticSea-400">
            بازگشت
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <TicketForm />
      </div>
    </div>
  );
}
