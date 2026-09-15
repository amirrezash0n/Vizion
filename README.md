# 🎨 Vizion - پنل مدیریت فروشگاهی

<div align="center">

![Vizion Logo](https://img.shields.io/badge/Vizion-Panel-FD295C?style=for-the-badge)

**یک پنل مدیریت مدرن، ریسپانسیو و کاربرپسند برای فروشگاه‌های آنلاین**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 📖 درباره پروژه

**Vizion** یک پنل مدیریت فروشگاهی مدرن است که با هدف ارائه یک تجربه کاربری روان، سریع و زیبا طراحی شده است. این پروژه شامل تمام بخش‌های مورد نیاز یک پنل مدیریت حرفه‌ای از جمله مدیریت سفارشات، تیکت‌های پشتیبانی، کیف پول، اعلان‌ها و اطلاعات کاربری می‌باشد.

### ✨ ویژگی‌های کلیدی

- 🎨 **طراحی مدرن و مینیمال** با استفاده از Tailwind CSS نسخه ۴
- 📱 **کاملاً ریسپانسیو** برای موبایل، تبلت و دسکتاپ
- 🌐 **پشتیبانی کامل از RTL** و فونت‌های فارسی (YekanBakh, Morabba)
- ⚡ **عملکرد بالا** با Vite و React 19
- 🎯 **Type-Safe** با TypeScript
- 🔄 **مدیریت State** با Zustand
- 📊 **نمودارهای تعاملی** با Recharts
- 🎬 **انیمیشن‌های نرم** با Framer Motion
- 🔔 **اعلان‌های Toast** با React Hot Toast
- 📝 **مدیریت فرم‌ها** با React Hook Form

---

## 📸 تصاویر پروژه

### 🏠 داشبورد کاربری

![Dashboard](./screenshots/dashboard.png)

_نمای کلی داشبورد با کارت‌های آماری، نمودار فروش هفتگی و وضعیت سفارشات_

### 📦 سفارشات من

![Orders](./screenshots/orders.png)

_مدیریت سفارشات با قابلیت جستجو، فیلتر بر اساس وضعیت پرداخت و صفحه‌بندی هوشمند_

### 💰 کیف پول من

![Wallet](./screenshots/wallet.png)

_مدیریت موجودی، شارژ کیف پول و مشاهده تراکنش‌های اخیر_

### 🎫 تیکت‌ها

![Tickets](./screenshots/tickets.png)

_سیستم تیکتینگ کامل با فیلتر وضعیت، مشاهده جزئیات و امکان پاسخ‌دهی_

### 🔔 اعلان‌ات

![Notifications](./screenshots/notifications.png)

_نمایش اعلان‌ها با گروه‌بندی جدید/خوانده‌شده و نمایش زمان نسبی_

### 👤 اطلاعات حساب کاربری

![Profile](./screenshots/profile.png)

_مدیریت اطلاعات پروفایل و تغییر رمز عبور_

---

## 🛠️ تکنولوژی‌های استفاده شده

### Frontend Core

| تکنولوژی         | نسخه | کاربرد           |
| :--------------- | :--- | :--------------- |
| **React**        | 19.2 | کتابخانه اصلی UI |
| **TypeScript**   | 5.x  | Type-Safety      |
| **Vite**         | 6.x  | Build Tool       |
| **React Router** | 8.3  | مدیریت مسیرها    |

### Styling & UI

| تکنولوژی          | نسخه | کاربرد     |
| :---------------- | :--- | :--------- |
| **Tailwind CSS**  | 4.3  | استایل‌دهی |
| **Framer Motion** | 13.2 | انیمیشن‌ها |
| **React Icons**   | 5.7  | آیکون‌ها   |
| **Recharts**      | 3.10 | نمودارها   |

### State & Data

| تکنولوژی            | نسخه | کاربرد           |
| :------------------ | :--- | :--------------- |
| **Zustand**         | 5.0  | مدیریت State     |
| **Axios**           | 1.20 | درخواست‌های HTTP |
| **React Hook Form** | 7.87 | مدیریت فرم‌ها    |

### Utilities

| تکنولوژی                      | نسخه | کاربرد        |
| :---------------------------- | :--- | :------------ |
| **clsx** + **tailwind-merge** | -    | ترکیب کلاس‌ها |
| **React Hot Toast**           | 2.6  | اعلان‌ها      |

---

## 📂 ساختار پروژه

```
Vizion/
├── public/
│   ├── fonts/                  # فونت‌های فارسی
│   └── images/                 # تصاویر
├── screenshots/                # تصاویر README
├── src/
│   ├── components/
│   │   ├── common/             # کامپوننت‌های مشترک
│   │   │   ├── Button/
│   │   │   ├── DataTable/
│   │   │   ├── EmptyState/
│   │   │   ├── Filter/
│   │   │   ├── PageHeader/
│   │   │   └── Pagination/
│   │   ├── layout/             # Layout اصلی
│   │   ├── notifications/      # کامپوننت‌های اعلان
│   │   └── ui/                 # کامپوننت‌های UI
│   ├── constants/              # ثابت‌ها
│   ├── data/                   # داده‌های نمونه
│   ├── hooks/                  # هوک‌های سفارشی
│   ├── pages/                  # صفحات اصلی
│   │   ├── Dashboard/
│   │   ├── Orders/
│   │   ├── Wallet/
│   │   ├── Tickets/
│   │   ├── Notifications/
│   │   ├── Profile/
│   │   ├── Login/
│   │   └── Signup/
│   ├── router/                 # تنظیمات مسیریابی
│   ├── store/                  # Zustand Stores
│   ├── styles/                 # استایل‌ها و فونت‌ها
│   ├── types/                  # تایپ‌های TypeScript
│   └── utils/                  # توابع کمکی
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 نصب و اجرا

### پیش‌نیازها

- Node.js نسخه ۱۸ یا بالاتر
- npm یا yarn

### مراحل نصب

```bash
# ۱. کلون کردن پروژه
git clone https://github.com/amirrezash0n/vizion.git

# ۲. ورود به پوشه پروژه
cd vizion

# ۳. نصب وابستگی‌ها
npm install

# ۴. اجرای پروژه در حالت توسعه
npm run dev

# ۵. Build برای production
npm run build
```

پروژه در آدرس `http://localhost:5173` در دسترس خواهد بود.

---

## 🎯 ویژگی‌های پیاده‌سازی شده

### ✅ بخش‌های اصلی

- [x] **داشبورد** با کارت‌های آماری و نمودارها
- [x] **سفارشات** با جستجو، فیلتر و صفحه‌بندی
- [x] **کیف پول** با شارژ و تاریخچه تراکنش‌ها
- [x] **تیکت‌ها** با سیستم پاسخ‌دهی
- [x] **اعلان‌ها** با گروه‌بندی و نمایش زمان نسبی
- [x] **پروفایل کاربری** با تغییر رمز عبور
- [x] **صفحات خطا** (404)

### ✅ قابلیت‌های فنی

- [x] **مسیریابی محافظت‌شده** (Protected Routes)
- [x] **مدیریت State** با Zustand + Persist
- [x] **کامپوننت‌های قابل استفاده مجدد**
- [x] **صفحه‌بندی هوشمند** با Ellipsis
- [x] **تبدیل اعداد به فارسی**
- [x] **نمایش زمان نسبی** (Relative Time)
- [x] **RTL** کامل
- [x] **ریسپانسیو** کامل

### 🚧 در حال توسعه

- [ ] **اتصال به Backend** (Supabase)
- [ ] **احراز هویت کامل** (Login/Signup)
- [ ] **تست‌های واحد**
- [ ] **Dark Mode**

---

## 🎨 طراحی

### پالت رنگی

| رنگ               | کد        | کاربرد        |
| :---------------- | :-------- | :------------ |
| **Primary**       | `#FD295C` | رنگ اصلی برند |
| **Secondary**     | `#F32770` | رنگ مکمل      |
| **Success**       | `#25BB85` | وضعیت موفق    |
| **Warning**       | `#ED9446` | هشدار         |
| **Danger**        | `#FF505A` | خطا           |
| **BalticSea-400** | `#24232A` | پس‌زمینه تیره |

### فونت‌ها

- **YekanBakh** (Regular, Medium, Bold, Heavy)
- **Morabba** (Light, Medium, Bold)

---

## 💡 درباره توسعه

این پروژه با تمرکز بر **یادگیری و پیاده‌سازی استانداردهای روز** ساخته شده است. در فرآیند توسعه، از **ابزارهای هوش مصنوعی (DeepSeek)** به عنوان دستیار برای:

- 🔍 **بررسی و رفع باگ‌ها**
- 🏗️ **طراحی معماری کامپوننت‌ها**
- 📐 **بهبود ساختار کد و Type-Safety**
- 🎨 **طراحی UI/UX**

استفاده شده است. تمام کدها **درک شده**، **تست شده** و **مطابق نیاز پروژه** سفارشی‌سازی شده‌اند.

---

## 📌 نکات فنی

### صفحه‌بندی هوشمند

پیاده‌سازی الگوی **Ellipsis** برای صفحه‌بندی با تعداد زیاد صفحات:

```
۱ ۲ ۳ ۴ ... ۵۰
۱ ... ۲۵ ۲۶ ۲۷ ... ۵۰
۱ ... ۴۷ ۴۸ ۴۹ ۵۰
```

### مدیریت State

- **Zustand** برای State سراسری
- **Persist Middleware** برای ذخیره در LocalStorage
- **Partialize** برای ذخیره فقط فیلدهای مورد نیاز

### کامپوننت‌های قابل استفاده مجدد

- `Button` با ۱۰+ واریانت و سایز
- `DataTable` با صفحه‌بندی و اسکرول
- `Pagination` با Ellipsis
- `Filter` برای فیلتر کردن داده‌ها
- `EmptyState` برای حالت‌های خالی

---

## 🤝 مشارکت

اگه می‌خوای به بهبود این پروژه کمک کنی:

1. پروژه رو Fork کن
2. یه Branch جدید بساز (`git checkout -b feature/amazing-feature`)
3. تغییرات رو Commit کن (`git commit -m 'Add amazing feature'`)
4. Branch رو Push کن (`git push origin feature/amazing-feature`)
5. یه Pull Request باز کن

---

## 📄 لایسنس

این پروژه تحت لایسنس **MIT** منتشر شده است.

---

## 📞 تماس با من

<div align="center">

**امیررضا شورورزی**

[![GitHub](https://img.shields.io/badge/GitHub-amirrezash0n-181717?logo=github)](https://github.com/amirrezash0n)
[![Email](https://img.shields.io/badge/Email-shourvarziamirreza@gmail.com-EA4335?logo=gmail)](mailto:shourvarziamirreza@gmail.com)
[![Phone](https://img.shields.io/badge/Phone-09154188878-25D366?logo=whatsapp)](tel:+989154188878)

</div>

---

<div align="center">

**⭐ اگه این پروژه برات مفید بود، یه ستاره بده! ⭐**

Made with ❤️ by [Amirreza Shourvarzi](https://github.com/amirrezash0n)

</div>
