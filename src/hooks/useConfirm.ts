import { useState, useCallback, useRef } from "react";

interface ConfirmState {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  variant: "danger" | "primary";
}

const initialState: ConfirmState = {
  isOpen: false,
  title: "",
  message: "",
  confirmLabel: "تأیید",
  cancelLabel: "انصراف",
  variant: "danger",
};

interface ConfirmOptions {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "primary";
  onConfirm: () => void;
}

export function useConfirm() {
  const [state, setState] = useState<ConfirmState>(initialState);
  const onConfirmRef = useRef<(() => void) | null>(null);

  const confirm = useCallback((options: ConfirmOptions) => {
    onConfirmRef.current = options.onConfirm;
    setState({
      isOpen: true,
      title: options.title,
      message: options.message,
      confirmLabel: options.confirmLabel ?? "تأیید",
      cancelLabel: options.cancelLabel ?? "انصراف",
      variant: options.variant ?? "danger",
    });
  }, []);

  const handleConfirm = useCallback(() => {
    onConfirmRef.current?.();
    onConfirmRef.current = null;
    setState(initialState);
  }, []);

  const handleCancel = useCallback(() => {
    onConfirmRef.current = null;
    setState(initialState);
  }, []);

  return {
    ...state,
    confirm,
    handleConfirm,
    handleCancel,
  };
}
