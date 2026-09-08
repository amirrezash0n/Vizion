import { LuLoader, LuTicketSlash } from "react-icons/lu";
import { BsCheckLg } from "react-icons/bs";
import type { Stat } from "../types";
import { CiWallet } from "react-icons/ci";

const stats: Stat[] = [
  {
    id: 1,
    title: "سفارشات تکمیل شده",
    value: "21",
    icon: BsCheckLg,
    color: "bg-success",
    href: "/orders",
  },
  {
    id: 2,
    title: "سفارشات در حال انجام",
    value: "10",
    icon: LuLoader,
    color: "bg-warning",
    href: "/orders",
  },
  {
    id: 3,
    title: "تیکت های شما",
    value: "5",
    icon: LuTicketSlash,
    color: "bg-danger",
    href: "/tickets",
  },
  {
    id: 4,
    title: "کیف پول شما",
    value: "2,500,000",
    icon: CiWallet,
    color: "bg-primary",
    href: "/wallet",
  },
];

export default stats;
