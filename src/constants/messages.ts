export const MESSAGES = {
  login: {
    success: "با موفقیت وارد حساب کاربری شدید.",
    error: "خطا در ورود!",
  },

  signup: {
    success: "ثبت‌نام شما با موفقیت انجام شد.",
    error: "خطا در ثبت‌نام!",
  },

  logout: {
    success: "شما با موفقیت از حساب کاربری خود خارج شدید.",
    confirm: {
      title: "خروج از حساب کاربری",
      message: "آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟",
      confirmLabel: "بله، خارج شو",
      cancelLabel: "انصراف",
      variant: "primary" as const,
    },
  },

  deleteAllNotifications: {
    success: "همه اعلان‌ها با موفقیت حذف شدند.",
    confirm: {
      title: "حذف همه اعلان‌ها",
      message: "آیا مطمئن هستید که می‌خواهید همه اعلان‌ها را حذف کنید؟",
      confirmLabel: "بله، حذف کن",
      cancelLabel: "انصراف",
      variant: "primary" as const,
    },
  },

  markAllAsRead: {
    success: "همه اعلان‌ها خوانده شدند.",
    confirm: {
      title: "خوانده شدن همه اعلان‌ها",
      message: "آیا مطمئن هستید که می‌خواهید همه اعلان‌ها را خوانده‌شده کنید؟",
      confirmLabel: "بله، خوانده کن",
      cancelLabel: "انصراف",
      variant: "primary" as const,
    },
  },

  changePassword: {
    success: "رمز عبور با موفقیت تغییر کرد.",
    error: "خطا در تغییر رمز عبور!",
  },

  saveProfile: {
    success: "اطلاعات پروفایل با موفقیت ذخیره شد.",
    error: "خطا در ذخیره اطلاعات!",
  },

  sendReply: {
    success: "پاسخ شما با موفقیت ارسال شد.",
    error: "خطا در ارسال پاسخ!",
  },

  sendTicket: {
    success: "تیکت شما با موفقیت ارسال شد.",
    error: "خطا در ارسال تیکت!",
  },

  chargeWallet: {
    success: "کیف پول شما با موفقیت شارژ شد.",
    error: "خطا در شارژ کیف پول!",
  },
} as const;
