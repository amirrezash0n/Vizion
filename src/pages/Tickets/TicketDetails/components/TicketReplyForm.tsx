import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Button from "../../../../components/common/Button/Button";
import useToast from "../../../../hooks/useToast";
import { MESSAGES } from "../../../../constants/messages";
import { useScrollToTop } from "../../../../hooks/useScrollToTop";

interface TicketReplyFormProps {
  onSubmit: (text: string) => void;
}

export default function TicketReplyForm({ onSubmit }: TicketReplyFormProps) {
  const { scrollToTop } = useScrollToTop();
  const [text, setText] = useState("");
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      onSubmit(text);
      setText("");
      scrollToTop();
      showToast({
        type: "success",
        message: MESSAGES.sendReply.success,
      });
    } catch {
      scrollToTop();
      showToast({
        type: "failed",
        message: MESSAGES.sendReply.error,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 border-t border-dashed border-cloud pt-6 xs:mt-8"
      dir="rtl"
    >
      <label className="mb-3 block font-yekanBold text-xs text-balticSea-400 xs:text-sm">
        پاسخ شما
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="پاسخ خود را وارد کنید ..."
        className="mb-4 w-full resize-none rounded-xl border border-cloud bg-white px-3 py-2.5 font-yekanMedium text-xs text-balticSea-400 transition-colors outline-none placeholder:font-yekanRegular placeholder:text-dawn focus:border-primary xs:px-4 xs:py-3 xs:text-sm"
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          size="xs"
          className="gap-1.5 rounded-xl font-yekanBold"
          disabled={!text.trim()}
        >
          <FiSend size={14} className="rotate-180" />
          <span>ارسال پاسخ</span>
        </Button>
      </div>
    </form>
  );
}
