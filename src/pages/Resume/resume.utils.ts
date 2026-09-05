import type { DateRange } from "./resume.types";

const MONTH_YEAR_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

function formatMonthYear(isoDate: string): string {
  return MONTH_YEAR_FORMAT.format(new Date(`${isoDate}T00:00:00`));
}

export function formatDateRange({ startDate, endDate }: DateRange): string {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : "Present";
  return `${start} - ${end}`;
}
