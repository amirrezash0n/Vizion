import { createContext, useContext } from "react";
import { useConfirm } from "../hooks/useConfirm";

type ConfirmContextType = ReturnType<typeof useConfirm>;

export const ConfirmContext = createContext<ConfirmContextType | null>(null);

export function useConfirmContext() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirmContext must be used within ConfirmProvider");
  }
  return context;
}
