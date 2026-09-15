import { FiX } from "react-icons/fi";
import type { SidebarCloseButtonProps } from "../../../../types";

export default function SidebarCloseButton({
  onClose,
}: SidebarCloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 left-4 z-10 text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
    >
      <FiX size={20} />
    </button>
  );
}
