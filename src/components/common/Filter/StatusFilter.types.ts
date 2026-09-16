export interface StatusOption {
  value: string;
  label: string;
}

export interface StatusFilterProps {
  label: string;
  options: StatusOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}
