import { useParams } from "react-router";
import { FiMessageSquare } from "react-icons/fi";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import NoDataState from "../../../components/common/EmptyState/NoDataState";
import TicketMessage from "./components/TicketMessage";
import TicketReplyForm from "./components/TicketReplyForm";
import { tickets } from "../../../data/tickets";
import BackButton from "../../../components/common/BackButton/BackButton";
import StatusBadge from "../../../components/ui/StatusBadge/StatusBadge";
import {
  TICKET_FALLBACK_STATUS,
  TICKET_STATUS_CONFIG,
} from "../../../constants/statusConfig";

export default function TicketDetails() {
  const { id } = useParams<{ id: string }>();

  const ticket = tickets.find((t) => t.id === Number(id));

  if (!ticket) {
    return (
      <div>
        <PageHeader />
        <div className="mx-auto mt-4 max-w-3xl animate-fadeIn rounded-2xl bg-offWhite p-8 text-center">
          <p className="font-morabbaMedium text-sm text-dawn">
            تیکت مورد نظر پیدا نشد!
          </p>
        </div>
      </div>
    );
  }

  const handleReply = (text: string) => {
    console.log("پاسخ:", text);
  };

  const getStatusMessage = () => {
    switch (ticket.status) {
      case "pending":
        return "تیکت شما در حال بررسی است. می‌توانید توضیحات بیشتری اضافه کنید.";
      case "answered":
        return "کارشناس پاسخ داده است. در صورت نیاز می‌توانید پاسخ دهید.";
      case "closed":
        return "این تیکت بسته شده است و امکان پاسخ دادن وجود ندارد.";
    }
  };

  return (
    <div>
      <BackButton />

      <PageHeader />

      <div className="mx-auto mt-4 max-w-4xl animate-fadeIn rounded-[20px] bg-offWhite p-4 xs:p-6 sm:p-8">
        <div className="mb-6 flex">
          <span className="font-yekanBold text-xs text-balticSea-400 xs:text-sm">
            #{ticket.id.toLocaleString("fa-IR")}
          </span>
        </div>

        {ticket.messages.length === 0 ? (
          <NoDataState
            icon={FiMessageSquare}
            title="پیامی برای این تیکت ثبت نشده!"
          />
        ) : (
          <div className="space-y-6 xs:space-y-8">
            {ticket.messages.map((message) => (
              <TicketMessage
                key={message.id}
                name={message.name}
                avatar={message.avatar}
                date={message.date}
                text={message.text}
                type={message.type}
              />
            ))}
          </div>
        )}

        <div className="mt-6 border-t border-dashed border-cloud pt-6 xs:mt-8">
          <div className="mb-4 flex items-center gap-2" dir="rtl">
            <StatusBadge
              status={ticket.status}
              statusConfig={TICKET_STATUS_CONFIG}
              fallbackStatus={TICKET_FALLBACK_STATUS}
            />
            <span className="font-morabbaMedium text-[10px] text-dawn xs:text-xs">
              {getStatusMessage()}
            </span>
          </div>

          {ticket.status !== "closed" && (
            <TicketReplyForm onSubmit={handleReply} />
          )}
        </div>
      </div>
    </div>
  );
}
