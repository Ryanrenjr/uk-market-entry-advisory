import type { Locale } from "@/content/insights";

const EN_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Parsed manually from the YYYY-MM-DD string rather than via `new Date()` +
// a locale formatter, so the displayed day never shifts with the reader's
// timezone.
export function formatArticleDate(isoDate: string, locale: Locale): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (locale === "zh") {
    return `${year}年${month}月${day}日`;
  }
  return `${day} ${EN_MONTHS[month - 1]} ${year}`;
}
