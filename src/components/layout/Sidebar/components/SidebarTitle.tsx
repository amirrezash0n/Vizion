import { Link } from "react-router";

interface SidebarTitleProps {
  onMenuClick?: () => void;
}

export default function SidebarTitle({ onMenuClick }: SidebarTitleProps) {
  return (
    <Link
      to="/"
      className="w-20 text-text-22 mb-6.25 font-morabbaBold font-extrabold text-right text-primary"
      onClick={onMenuClick}
    >
      ویزیون
    </Link>
  );
}
