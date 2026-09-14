import { FiPlus } from "react-icons/fi";

interface ImageUploadButtonProps {
  onUpload: () => void;
}

export default function ImageUploadButton({
  onUpload,
}: ImageUploadButtonProps) {
  return (
    <button
      type="button"
      onClick={onUpload}
      className="inline-flex items-center gap-1.5 font-yekanMedium text-[10px] xs:text-xs px-3 py-1.5 rounded-lg bg-softPink text-crimson hover:bg-primary/15 transition-colors"
    >
      <FiPlus size={14} />
      <span>افزودن فایل</span>
    </button>
  );
}
