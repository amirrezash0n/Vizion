import toast from "react-hot-toast";
import { createElement } from "react";
import CustomToast from "../components/common/CustomToast/CustomToast";
import type { ToastOptions } from "../types/toast.types";

export default function useToast() {
  function showToast({ type, message, duration, position }: ToastOptions) {
    toast.custom(() => createElement(CustomToast, { type, message }), {
      duration: duration ?? 4000,
      position: position ?? "top-center",
    });
  }

  return { showToast };
}
