import { FaTachometerAlt, FaUsers } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import type { IconType } from "react-icons";

interface NavItems {
  name: string;
  path: string;
  icon: IconType;
}

const navItems: NavItems[] = [
  { name: "داشبورد", path: "/", icon: FaTachometerAlt },
  { name: "کاربران", path: "/users", icon: FaUsers },
  { name: "تنظیمات", path: "/settings", icon: CiSettings },
];

export default navItems;
