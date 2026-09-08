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
  icon: React.ComponentType<{ size?: number }>;
  color: string;
  href: string;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  color: string;
}
