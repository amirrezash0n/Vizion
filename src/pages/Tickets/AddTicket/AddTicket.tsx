import { useNavigate } from "react-router";
import Button from "../../../components/common/Button/Button";
import PageHeader from "../../../components/common/PageHeader/PageHeader";

export default function AddTicket() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <PageHeader title="تیکت ها" />
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary font-yekanMedium"
        >
          <span>بازگشت</span>
        </button>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-lg font-yekanBold mb-6">افزودن تیکت جدید</h2>

        <form className="space-y-6">
          {/* ردیف اول: عنوان و دپارتمان */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-yekanMedium mb-2">
                عنوان تیکت
              </label>
              <input
                type="text"
                placeholder="عنوان را وارد کنید ..."
                className="w-full h-11 px-4 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="block text-sm font-yekanMedium mb-2">
                دپارتمان
              </label>
              <select className="w-full h-11 px-4 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary/30">
                <option>یک گزینه را انتخاب کنید</option>
              </select>
            </div>
          </div>

          {/* متن تیکت */}
          <div>
            <label className="block text-sm font-yekanMedium mb-2">
              متن تیکت
            </label>
            <textarea
              rows={6}
              placeholder="متن تیکت را وارد کنید ..."
              className="w-full p-4 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
          </div>

          {/* آپلود تصویر */}
          <div>
            <p className="text-sm font-yekanMedium mb-2">
              تصویری از مشکل خود دارید؟
            </p>
            <button
              type="button"
              className="px-4 py-2 text-sm bg-red-50 text-primary rounded-xl font-yekanMedium"
            >
              + افزودن فایل
            </button>
          </div>

          {/* دکمه ارسال */}
          <Button variant="primary" size="md" type="submit">
            ارسال تیکت
          </Button>
        </form>
      </div>
    </>
  );
}
