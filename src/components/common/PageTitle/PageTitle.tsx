interface PageTitleProps {
  title: string;
  className?: string;
}

function PageTitle({ title, className = "" }: PageTitleProps) {
  return (
    <h3
      className={`${className} mb-3.5 font-morabbaBold text-xl text-balticSea-400`}
    >
      {title}
    </h3>
  );
}

export default PageTitle;
