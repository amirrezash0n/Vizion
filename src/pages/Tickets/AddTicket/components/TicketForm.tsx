import { useState } from "react";
import Button from "../../../../components/common/Button/Button";
import ImageUploadButton from "./ImageUploadButton";
import { FiChevronDown } from "react-icons/fi";
import { DEPARTMENTS } from "../../../../constants/departments";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ title, department, message });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] bg-iceBlue p-4 xs:p-6 sm:p-8"
      dir="rtl"
    >
      <h2 className="mb-6 font-yekanMedium text-base text-balticSea-400 xs:text-lg">
        افزودن تیکت جدید
      </h2>

      <div className="mb-5 grid grid-cols-1 gap-4 xs:gap-6 sm:grid-cols-2">
        <div>
          <h4 className="mb-2 block font-yekanBold text-xs text-balticSea-400 xs:text-sm">
            عنوان تیکت
          </h4>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان را وارد کنید ..."
            className="w-full rounded-xl border border-cloud bg-white px-3 py-2.5 font-yekanMedium text-xs text-balticSea-400 transition-colors outline-none placeholder:font-yekanRegular placeholder:text-dawn focus:border-primary xs:px-4 xs:py-3 xs:text-sm"
          />
        </div>

        <div>
          <label className="mb-2 block font-yekanBold text-xs text-balticSea-400 xs:text-sm">
            دپارتمان
          </label>
          <div className="relative">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-xl border border-cloud bg-white px-3 py-2.5 font-yekanMedium text-xs text-balticSea-400 transition-colors outline-none focus:border-danger xs:px-4 xs:py-3 xs:text-sm"
            >
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id} disabled={dept.id === ""}>
                  {dept.label}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-dawn xs:left-4">
              <FiChevronDown size={14} />
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <span className="mb-2 block font-yekanBold text-xs text-balticSea-400 xs:text-sm">
          متن تیکت
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={8}
          placeholder="متن تیکت را وارد کنید ..."
          className="w-full resize-none rounded-xl border border-cloud bg-white px-3 py-2.5 font-yekanMedium text-xs text-balticSea-400 transition-colors outline-none placeholder:font-yekanRegular placeholder:text-dawn focus:border-danger xs:px-4 xs:py-3 xs:text-sm"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <ImageUploadButton onUpload={() => {}} />
          <span className="font-yekanMedium text-[10px] text-mobster xs:text-xs">
            تصویری از مشکل خود دارید؟
          </span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="xs"
          className="rounded-xl font-yekanBold"
        >
          ارسال تیکت
        </Button>
      </div>
    </form>
  );
}
