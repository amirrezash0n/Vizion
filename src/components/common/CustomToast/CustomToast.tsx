import { motion } from "framer-motion";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { cn } from "../../../utils/class.utils";
import type { CustomToastType } from "../../../types/toast.types";

const iconBaseStyles = "size-6 block shrink-0";

const types: Record<CustomToastType, string> = {
  success: "bg-success/10 border border-success/30",
  failed: "bg-danger/10 border border-danger/30",
  warning: "bg-warning/10 border border-warning/30",
};

const toastVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

interface CustomToastProps {
  type: CustomToastType;
  message: string;
}

function CustomToast({ type, message }: CustomToastProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={toastVariants}
      className={cn(
        types[type],
        "flex items-center justify-start gap-4 rounded-2xl p-4",
        "font-yekanMedium text-sm text-whiteSmoke",
      )}
      dir="rtl"
    >
      {type === "success" && (
        <BsCheckCircle className={`${iconBaseStyles} text-success`} />
      )}
      {type === "failed" && (
        <BsXCircle className={`${iconBaseStyles} text-danger`} />
      )}
      {type === "warning" && (
        <FiAlertTriangle className={`${iconBaseStyles} text-warning`} />
      )}

      <span>{message}</span>
    </motion.div>
  );
}

export default CustomToast;
