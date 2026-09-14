import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Button from "../../../../components/common/Button/Button";

interface TicketReplyFormProps {
  onSubmit: (text: string) => void;
}

export default function TicketReplyForm({ onSubmit }: TicketReplyFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 xs:mt-8 pt-6 border-t border-dashed border-cloud"
      dir="rtl"
    >
      <label className="block font-yekanBold text-xs xs:text-sm text-balticSea-400 mb-3">
        پاسخ شما
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="پاسخ خود را وارد کنید ..."
        className="w-full bg-white rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 border border-cloud focus:border-primary outline-none font-yekanMedium text-xs xs:text-sm text-balticSea-400 placeholder:text-dawn placeholder:font-yekanRegular transition-colors resize-none mb-4"
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          size="xs"
          className="font-yekanBold rounded-xl gap-1.5"
          disabled={!text.trim()}
        >
          <FiSend size={14} className="rotate-180" />
          <span>ارسال پاسخ</span>
        </Button>
      </div>
    </form>
  );
}
