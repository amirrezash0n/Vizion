import { motion } from "framer-motion";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { cn } from "../../../utils/class.utils";
import {
  iconBaseStyles,
  toastTypes,
  toastVariants,
} from "./CustomToast.styles";
import type { CustomToastProps } from "./CustomToast.types";

export default function CustomToast({ type, message }: CustomToastProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={toastVariants}
      className={cn(
        toastTypes[type],
        "flex items-center justify-start gap-3 rounded-2xl p-3 xs:gap-4 xs:p-4",
        "font-yekanMedium text-xs text-whiteSmoke xs:text-sm",
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
