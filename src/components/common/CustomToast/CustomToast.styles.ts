import type { CustomToastType } from "../../../types/toast.types";

export const iconBaseStyles = "size-5 block shrink-0 xs:size-6";

export const toastTypes: Record<CustomToastType, string> = {
  success: "bg-success/10 border border-success/30",
  failed: "bg-danger/10 border border-danger/30",
  warning: "bg-warning/10 border border-warning/30",
};

export const toastVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};
