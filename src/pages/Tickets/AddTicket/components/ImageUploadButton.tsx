import { FiPlus } from "react-icons/fi";
import Button from "../../../../components/common/Button/Button";

interface ImageUploadButtonProps {
  onUpload: () => void;
}

export default function ImageUploadButton({
  onUpload,
}: ImageUploadButtonProps) {
  return (
    <Button
      type="button"
      variant="soft"
      size="tiny"
      onClick={onUpload}
      className="gap-1.5 bg-softPink text-crimson hover:bg-primary/15 rounded-lg font-yekanMedium"
    >
      <FiPlus size={14} />
      <span>افزودن فایل</span>
    </Button>
  );
}
