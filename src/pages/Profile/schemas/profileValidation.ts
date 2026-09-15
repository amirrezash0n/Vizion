export const PROFILE_VALIDATION = {
  fullName: {
    required: "نام و نام خانوادگی الزامی است",
    minLength: {
      value: 3,
      message: "نام باید حداقل ۳ کاراکتر باشد",
    },
  },
  phone: {
    required: "شماره تماس الزامی است",
    pattern: {
      value: /^[0-9]{11}$/,
      message: "شماره تماس باید ۱۱ رقم باشد",
    },
  },
  email: {
    required: "ایمیل الزامی است",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "فرمت ایمیل صحیح نیست",
    },
  },
} as const;
