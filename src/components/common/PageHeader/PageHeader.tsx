import type { PageHeaderProps } from "./PageHeaderTypes";
import type { RouteHandle } from "../../../routes/router.types";
import { useMatches } from "react-router";

export default function PageHeader({ title, className = "" }: PageHeaderProps) {
  const matches = useMatches();
  const matchedTitle = [...matches]
    .reverse()
    .find((match) => (match.handle as RouteHandle | undefined)?.title);

  const pageTitle =
    title || (matchedTitle?.handle as RouteHandle | undefined)?.title;

  return (
    <div className={`mb-4 sm:mb-5 lg:mb-5.5 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-morabbaBold text-balticSea-400 mt-2">
        {pageTitle}
      </h2>
    </div>
  );
}
