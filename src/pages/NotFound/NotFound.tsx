// src/pages/NotFound/NotFound.tsx
import { useNavigate } from "react-router";
import { FiHome, FiAlertCircle } from "react-icons/fi";
import Button from "../../components/common/Button/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-balticSea-400 p-4 xs:p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-balticSea-100/50 pointer-events-none" />

      <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-balticSea-100/40 blur-3xl pointer-events-none" />

      <div className="flex flex-col items-center gap-4 xs:gap-6 max-w-md w-full text-center relative z-10">
        <div className="relative">
          <h1 className="font-morabbaBold text-[100px] xs:text-[130px] sm:text-[160px] leading-none text-primary/20 select-none">
            ۴۰۴
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-16 h-16 xs:w-20 xs:h-20 rounded-full bg-balticSea-300 border border-white-5 shadow-lg">
              <FiAlertCircle size={28} className="text-primary xs:hidden" />
              <FiAlertCircle
                size={36}
                className="text-primary hidden xs:block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 xs:space-y-3 -mt-2 xs:-mt-4 px-2">
          <h2 className="font-yekanBold text-xl xs:text-2xl text-whiteSmoke">
            صفحه‌ای که دنبالش بودی پیدا نشد!
          </h2>
          <p className="font-morabbaMedium text-xs xs:text-sm text-dawn leading-relaxed">
            ممکنه آدرس رو اشتباه وارد کرده باشی یا این صفحه حذف شده باشه.
            <br />
            بیا برگردیم به مسیر اصلی.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => navigate("/")}
          className="gap-2 font-yekanMedium mt-2 shadow-lg shadow-primary/20"
        >
          <FiHome size={18} />
          <span>بازگشت به داشبورد</span>
        </Button>
      </div>
    </div>
  );
}
