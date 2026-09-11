import { Link } from "react-router";
import PageTitle from "../../../../components/common/PageTitle/PageTitle.tsx";
import { IoIosArrowBack } from "react-icons/io";

interface DashboardTableHeaderProps {
  title: string;
  linkTo: string;
  linkText: string;
}

export default function DashboardTableHeader({
  title,
  linkTo,
  linkText,
}: DashboardTableHeaderProps) {
  return (
    <div className="mb-2.5 flex flex-wrap items-center justify-between">
      <PageTitle title={title} />
      <Link
        to={linkTo}
        className="flex items-center font-yekanMedium text-primary"
      >
        <span className="text-sm">{linkText}</span>
        <IoIosArrowBack size={16} />
      </Link>
    </div>
  );
}
