import { useLocation } from "react-router";
import pageTitles from "../../../constants/pageTitles";
import type { PageHeaderProps } from "./PageHeaderTypes";

export default function PageHeader({ title, className = "" }: PageHeaderProps) {
  const location = useLocation();
  const pageTitle = title || pageTitles[location.pathname];
  return (
    <div className={`mb-4 sm:mb-5 lg:mb-5.5 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-morabbaBold text-balticSea-400 mt-2 mb-7">
        {pageTitle}
      </h2>
    </div>
  );
}
