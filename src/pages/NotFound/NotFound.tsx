// src/pages/NotFound/NotFound.tsx
import { useNavigate } from "react-router";
import { FiHome, FiAlertCircle } from "react-icons/fi";
import Button from "../../components/common/Button/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-balticSea-400 p-4 xs:p-6">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-balticSea-100/50" />

      <div className="pointer-events-none absolute top-20 -right-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -left-20 h-80 w-80 rounded-full bg-balticSea-100/40 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-4 text-center xs:gap-6">
        <div className="relative">
          <h1 className="font-morabbaBold text-[100px] leading-none text-primary/20 select-none xs:text-[130px] sm:text-[160px]">
            ۴۰۴
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white-5 bg-balticSea-300 shadow-lg xs:h-20 xs:w-20">
              <FiAlertCircle size={28} className="text-primary xs:hidden" />
              <FiAlertCircle
                size={36}
                className="hidden text-primary xs:block"
              />
            </div>
          </div>
        </div>

        <div className="-mt-2 space-y-2 px-2 xs:-mt-4 xs:space-y-3">
          <h2 className="font-yekanBold text-xl text-whiteSmoke xs:text-2xl">
            صفحه‌ای که دنبالش بودی پیدا نشد!
          </h2>
          <p className="font-morabbaMedium text-xs leading-relaxed text-dawn xs:text-sm">
            ممکنه آدرس رو اشتباه وارد کرده باشی یا این صفحه حذف شده باشه.
            <br />
            بیا برگردیم به مسیر اصلی.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => navigate("/")}
          className="mt-2 gap-2 font-yekanMedium shadow-lg shadow-primary/20"
        >
          <FiHome size={18} />
          <span>بازگشت به داشبورد</span>
        </Button>
      </div>
    </div>
  );
}
