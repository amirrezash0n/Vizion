import { FiX } from "react-icons/fi";

export interface SidebarCloseButtonProps {
  onClose: () => void;
}

export default function SidebarCloseButton({
  onClose,
}: SidebarCloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 left-4 z-10 rounded-lg p-2 text-white transition-colors hover:bg-white/10"
    >
      <FiX size={20} />
    </button>
  );
}
