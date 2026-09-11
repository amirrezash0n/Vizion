// src/components/dashboard/DashboardTableHeader/DashboardTableHeader.tsx
import { Link } from "react-router";
import PageTitle from "../../../../components/common/PageTitle/PageTitle.tsx";
import { IoIosArrowBack } from "react-icons/io";

interface DashboardTableHeaderProps {
  title: string;
  linkTo?: string;
  linkText?: string;
  showLink?: boolean;
}

export default function DashboardTableHeader({
  title,
  linkTo,
  linkText,
  showLink = true,
}: DashboardTableHeaderProps) {
  return (
    <div className="mb-2.5 flex flex-wrap items-center justify-between">
      <PageTitle title={title} />

      {showLink && linkTo && linkText && (
        <Link
          to={linkTo}
          className="flex items-center font-yekanMedium text-primary"
        >
          <span className="text-sm">{linkText}</span>
          <IoIosArrowBack size={16} />
        </Link>
      )}
    </div>
  );
}
