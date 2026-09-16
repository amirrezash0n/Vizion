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
    <div className="rounded-2xl border border-cloud bg-white p-4">
      <h3 className="mb-3 border-b border-dashed border-cloud pb-2 font-yekanBold text-xs text-balticSea-400">
        {title}
      </h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}
