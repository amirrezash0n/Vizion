import { useNavigate, useRouteError } from "react-router";
import { FiHome, FiAlertOctagon, FiRefreshCw } from "react-icons/fi";
import Button from "../../components/common/Button/Button";
import ErrorGraphic from "../../components/common/ErrorGraphic/ErrorGraphic";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  console.error("Route error:", error);

  const getErrorMessage = () => {
    if (error instanceof Error) return error.message;
    if (typeof error === "string") return error;
    return "متأسفانه مشکلی پیش اومده. لطفاً دوباره تلاش کن.";
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-balticSea-400 p-4 xs:p-6">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-danger/10 via-transparent to-balticSea-100/50" />
      <div className="pointer-events-none absolute top-20 -right-20 h-80 w-80 rounded-full bg-danger/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -left-20 h-80 w-80 rounded-full bg-balticSea-100/40 blur-3xl" />

      <div
        role="alert"
        aria-label="خطا رخ داد"
        className="relative z-10 flex w-full max-w-md flex-col items-center gap-4 text-center xs:gap-6"
      >
        <ErrorGraphic code="۵۰۰" icon={FiAlertOctagon} color="danger" />

        <div className="-mt-2 space-y-2 px-2 xs:-mt-4 xs:space-y-3">
          <h2 className="font-yekanBold text-xl text-whiteSmoke xs:text-2xl">
            خطایی رخ داد!
          </h2>
          <p className="font-morabbaMedium text-xs leading-relaxed text-dawn xs:text-sm">
            {getErrorMessage()}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate("/")}
            className="gap-2 font-yekanMedium shadow-lg shadow-primary/20"
            aria-label="بازگشت به داشبورد"
          >
            <FiHome size={18} />
            <span>بازگشت به داشبورد</span>
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={() => window.location.reload()}
            className="gap-2 font-yekanMedium"
            aria-label="تلاش مجدد"
          >
            <FiRefreshCw size={18} />
            <span>تلاش مجدد</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
