export const variantStyles = {
  primary: "bg-primary text-white hover:bg-opacity-80",
  secondary: "bg-text-primary text-white hover:bg-opacity-80",
  ghost: "bg-transparent text-white hover:bg-white/10",
  icon: "bg-text-primary text-white hover:bg-opacity-80",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",
  pagination: "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100",
  paginationActive: "bg-primary text-white hover:bg-danger",
  link: "bg-transparent text-primary hover:opacity-80",
};

export const sizeStyles = {
  xs: "px-10 sm:px-14 py-2.5 text-base",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  icon: "size-10",
  full: "w-full px-4 py-2 text-base",
  pagination: "h-9 min-w-9 px-3 text-sm",
  link: "p-0 text-sm",
};

export const baseStyles =
  "flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
