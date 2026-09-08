import { Link } from "react-router";
import type { Stat } from "../../../types";
import { HiArrowSmallLeft } from "react-icons/hi2";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="bg-offWhite h-34 sm:h-38 pb-4 pr-4 pl-4 rounded-xl">
      <div className="flex flex-col items-start justify-between overflow-hidden">
        <div
          className={`${stat.color} flex items-end -mt-8 mb-2 p-3 rounded-full h-21.25 text-white`}
        >
          <span className="sm:hidden">
            <stat.icon size={20} />
          </span>
          <span className="hidden sm:block">
            <stat.icon size={32} />
          </span>
        </div>
        <p className="font-yekanHeavy text-3xl sm:text-4xl lg:text-5xl text-right mt-2 w-full text-balticSea-400">
          {stat.value}
        </p>
        <Link
          className="flex items-center justify-between w-full"
          to={stat.href}
        >
          <p className="font-yekanBold text-balticSea-400 text-xs sm:text-sm">
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
