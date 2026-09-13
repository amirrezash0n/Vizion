export function toPersianDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function toPersianTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getRelativeTime(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "همین الان";

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${toPersianDigits(diffInMinutes)} دقیقه پیش`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${toPersianDigits(diffInHours)} ساعت پیش`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${toPersianDigits(diffInDays)} روز پیش`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${toPersianDigits(diffInMonths)} ماه پیش`;

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${toPersianDigits(diffInYears)} سال پیش`;
}

function toPersianDigits(input: number | string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return input
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}
