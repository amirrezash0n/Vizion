import type { ReactNode } from "react";

interface OrderInfoSectionProps {
  title: string;
  children: ReactNode;
}

export default function OrderInfoSection({
  title,
  children,
}: OrderInfoSectionProps) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-cloud">
      <h3 className="font-yekanBold text-xs text-balticSea-400 mb-3 pb-2 border-b border-dashed border-cloud">
        {title}
      </h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}
