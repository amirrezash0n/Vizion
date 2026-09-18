export type CustomToastType = "success" | "failed" | "warning";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastOptions {
  type: CustomToastType;
  message: string;
  duration?: number;
  position?: ToastPosition;
}
