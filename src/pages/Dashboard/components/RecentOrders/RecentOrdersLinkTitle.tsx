import { Link } from "react-router";
import PageTitle from "../../../../components/common/PageTitle";
import { IoIosArrowBack } from "react-icons/io";

export default function RecentOrdersLinkTitle() {
  return (
    <div className="flex items-center flex-wrap justify-between mb-2.5">
      <PageTitle title="لیست سفارشات اخیر شما" />
      <Link
        to="/orders"
        className="flex items-center font-yekanMedium text-primary"
      >
        <span className="text-sm">همه سفارشات</span>
        <IoIosArrowBack size={16} />
      </Link>
    </div>
  );
}
