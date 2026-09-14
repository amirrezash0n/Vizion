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
      className="bg-iceBlue rounded-[20px] p-4 xs:p-6 sm:p-8"
      dir="rtl"
    >
      <h2 className="font-yekanMedium text-base xs:text-lg text-balticSea-400 mb-6">
        افزودن تیکت جدید
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 mb-5">
        <div>
          <h4 className="block font-yekanBold text-xs xs:text-sm text-balticSea-400 mb-2">
            عنوان تیکت
          </h4>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان را وارد کنید ..."
            className="w-full bg-white rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 border border-cloud focus:border-primary outline-none font-yekanMedium text-xs xs:text-sm text-balticSea-400 placeholder:text-dawn placeholder:font-yekanRegular transition-colors"
          />
        </div>

        <div>
          <label className="block font-yekanBold text-xs xs:text-sm text-balticSea-400 mb-2">
            دپارتمان
          </label>
          <div className="relative">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full appearance-none bg-white rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 border border-cloud focus:border-danger outline-none font-yekanMedium text-xs xs:text-sm text-balticSea-400 transition-colors cursor-pointer"
            >
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id} disabled={dept.id === ""}>
                  {dept.label}
                </option>
              ))}
            </select>

            <span className="absolute left-3 xs:left-4 top-1/2 -translate-y-1/2 pointer-events-none text-dawn">
              <FiChevronDown size={14} />
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <span className="block font-yekanBold text-xs xs:text-sm text-balticSea-400 mb-2">
          متن تیکت
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={8}
          placeholder="متن تیکت را وارد کنید ..."
          className="w-full bg-white rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 border border-cloud focus:border-danger outline-none font-yekanMedium text-xs xs:text-sm text-balticSea-400 placeholder:text-dawn placeholder:font-yekanRegular transition-colors resize-none"
        />
      </div>
      <div className="flex items-center flex-wrap gap-3 justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <ImageUploadButton onUpload={() => {}} />
          <span className="font-yekanMedium text-[10px] xs:text-xs text-mobster">
            تصویری از مشکل خود دارید؟
          </span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="xs"
          className="font-yekanBold rounded-xl"
        >
          ارسال تیکت
        </Button>
      </div>
    </form>
  );
}
