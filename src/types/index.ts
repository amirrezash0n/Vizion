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
