import { BsCheckLg } from "react-icons/bs";
import { LuLoader, LuTicketSlash } from "react-icons/lu";
import type { Stat } from "../types";

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
];

export default stats;
