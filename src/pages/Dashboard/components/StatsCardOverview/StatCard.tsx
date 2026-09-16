import { Link } from "react-router";
import { HiArrowSmallLeft } from "react-icons/hi2";
import type { Stat } from "../../../../types";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="h-34 rounded-xl bg-offWhite pr-4 pb-4 pl-4 sm:h-38">
      <div className="flex flex-col items-start justify-between overflow-hidden">
        <div
          className={`${stat.color} -mt-8 mb-2 flex h-21.25 items-end rounded-full p-3 text-white`}
        >
          <span className="sm:hidden">
            <stat.icon size={20} />
          </span>
          <span className="hidden sm:block">
            <stat.icon size={32} />
          </span>
        </div>

        <h3 className="mt-2 w-full text-right font-yekanHeavy text-2xl text-balticSea-400 lg:text-3xl xl:text-4xl">
          {stat.value.toLocaleString("fa-IR")}
        </h3>

        <Link
          className="flex w-full items-center justify-between"
          to={stat.href}
        >
          <p className="font-yekanBold text-xs text-balticSea-400 sm:text-sm">
            {stat.title}
          </p>
          <span className="text-balticSea-400">
            <HiArrowSmallLeft size={16} className="sm:hidden" />
            <HiArrowSmallLeft size={20} className="hidden sm:block" />
          </span>
        </Link>
      </div>
    </div>
  );
}
