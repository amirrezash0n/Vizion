import { TbDashboard } from "react-icons/tb";
import { RiFileList2Line } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { LuUserRound, LuTicketSlash } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";

import type { IconType } from "react-icons";
interface NavItems {
  name: string;
  path: string;
  icon: IconType;
}

const navItems: NavItems[] = [
  { name: "داشبورد کاربری", path: "/", icon: TbDashboard },
  { name: "سفارشات من", path: "/orders", icon: RiFileList2Line },
  { name: "کیف پول من", path: "/wallet", icon: CiWallet },
  { name: "تیکت ها", path: "/tickets", icon: LuTicketSlash },
  { name: "اطلاعات حساب کاربری", path: "/profile", icon: LuUserRound },
  {
    name: "اعلانات",
    path: "/notifications",
    icon: IoMdNotificationsOutline,
  },
];

export default navItems;
