import type { IconType } from "react-icons";

export interface NavItem {
  path: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SidebarProps {
  onNavigate?: () => void;
}

export interface HeaderProps {
  onMenuClick: () => void;
}

export interface Stat {
  id: number;
  title: string;
  value: string;
  icon: IconType;
  color: string;
  href: string;
}

export interface OrderStatusOptions {
  value: "all" | "completed" | "pending" | "cancelled";
  label: string;
}
export interface TicketStatusOptions {
  value: "all" | "answered" | "pending" | "closed";
  label: string;
}
