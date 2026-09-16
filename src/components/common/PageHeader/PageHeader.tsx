import { useMatches } from "react-router";
import type { PageHeaderProps } from "./PageHeader.types";
import { cn } from "../../../utils/class.utils";
import { getRouteTitle } from "./PageHeader.utils";

export default function PageHeader({ title, className = "" }: PageHeaderProps) {
  const matches = useMatches();
  const pageTitle = title || getRouteTitle(matches);

  return (
    <div className={cn("mb-4 sm:mb-5 lg:mb-5.5", className)}>
      <h2 className="text-2xl sm:text-3xl font-morabbaBold text-balticSea-400 mt-2">
        {pageTitle}
      </h2>
    </div>
  );
}
