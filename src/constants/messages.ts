export const MESSAGES = {
  logout: {
    success: "شما با موفقیت از حساب کاربری خود خارج شدید.",
    confirm: {
      title: "خروج از حساب کاربری",
      message: "آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟",
      confirmLabel: "بله، خارج شو",
      cancelLabel: "انصراف",
      variant: "danger" as const,
    },
  },

  deleteOrder: {
    success: "سفارش با موفقیت حذف شد.",
    confirm: {
      title: "حذف سفارش",
      message: "آیا مطمئن هستید که می‌خواهید این سفارش را حذف کنید؟",
      confirmLabel: "بله، حذف کن",
      cancelLabel: "انصراف",
      variant: "danger" as const,
    },
  },

  cancelOrder: {
    success: "سفارش با موفقیت لغو شد.",
    confirm: {
      title: "لغو سفارش",
      message: "آیا مطمئن هستید که می‌خواهید این سفارش را لغو کنید؟",
      confirmLabel: "بله، لغو کن",
      cancelLabel: "انصراف",
      variant: "primary" as const,
    },
  },
} as const;
