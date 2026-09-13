export function toPersianDigits(value: string | number): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return value.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
}

export function toEnglishDigits(value: string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return value.replace(/[۰-۹]/g, (d) => String(persianDigits.indexOf(d)));
}

export function formatPersianNumber(value: string): string {
  if (!value) return "";
  const formatted = Number(value).toLocaleString("en-US");
  return toPersianDigits(formatted);
}
