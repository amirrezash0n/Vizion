import { Link } from "react-router";

interface SidebarTitleProps {
  onMenuClick?: () => void;
}

export default function SidebarTitle({ onMenuClick }: SidebarTitleProps) {
  return (
    <Link
      to="/"
      className="mb-6.25 w-20 text-right font-morabbaBold text-text-22 font-extrabold text-primary"
      onClick={onMenuClick}
    >
      ویزیون
    </Link>
  );
}
