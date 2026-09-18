import { type ReactNode } from "react";
import ConfirmModal from "../components/common/ConfirmModal/ConfirmModal";
import { useConfirm } from "../hooks/useConfirm";
import { ConfirmContext } from "./ConfirmContext";

export default function ConfirmProvider({ children }: { children: ReactNode }) {
  const confirmState = useConfirm();

  return (
    <ConfirmContext.Provider value={confirmState}>
      {children}
      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={confirmState.title}
        message={confirmState.message}
        confirmLabel={confirmState.confirmLabel}
        cancelLabel={confirmState.cancelLabel}
        variant={confirmState.variant}
        onConfirm={confirmState.handleConfirm}
        onCancel={confirmState.handleCancel}
      />
    </ConfirmContext.Provider>
  );
}
