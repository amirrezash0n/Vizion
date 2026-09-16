import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ChartCard({
  title,
  subtitle,
  children,
}: ChartCardProps) {
  return (
    <div className="rounded-xl border border-white-5 bg-balticSea-300 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-yekanBold text-lg text-whiteSmoke">{title}</h2>
        {subtitle && (
          <span className="font-morabbaMedium text-xs text-dawn">
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
