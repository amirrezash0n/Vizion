interface PageTitleProps {
  title: string;
  className?: string;
}

export default function PageTitle({ title, className = "" }: PageTitleProps) {
  return (
    <h3 className={`${className} text-xl font-morabbaBold text-balticSea-400`}>
      {title}
    </h3>
  );
}
