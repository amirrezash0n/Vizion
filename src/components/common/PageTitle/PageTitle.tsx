import type { PageTitleProps } from "./PageTitle";

function PageTitle({ title, className = "" }: PageTitleProps) {
  return (
    <h3
      className={`${className} text-xl font-morabbaBold text-balticSea-400 mb-3.5`}
    >
      {title}
    </h3>
  );
}

export default PageTitle;
