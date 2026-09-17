import { useNavigate } from "react-router";
import { FiHome, FiAlertCircle } from "react-icons/fi";
import Button from "../../components/common/Button/Button";
import ErrorGraphic from "../../components/common/ErrorGraphic/ErrorGraphic";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-balticSea-400 p-4 xs:p-6">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-balticSea-100/50" />
      <div className="pointer-events-none absolute top-20 -right-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -left-20 h-80 w-80 rounded-full bg-balticSea-100/40 blur-3xl" />

      <div
        role="alert"
        aria-label="صفحه پیدا نشد"
        className="relative z-10 flex w-full max-w-md flex-col items-center gap-4 text-center xs:gap-6"
      >
        <ErrorGraphic code="۴۰۴" icon={FiAlertCircle} color="primary" />

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
          aria-label="بازگشت به داشبورد"
        >
          <FiHome size={18} />
          <span>بازگشت به داشبورد</span>
        </Button>
      </div>
    </div>
  );
}
