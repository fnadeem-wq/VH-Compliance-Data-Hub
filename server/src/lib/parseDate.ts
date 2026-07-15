/**
 * Loosely parses whatever format the standardized Date field happens to hold
 * (MM/DD/YYYY, MM-DD-YY with or without a time suffix, ISO, etc.) into a real
 * Date so batch date ranges can be computed by actual chronological value,
 * not by sorting the raw strings.
 */
export function parseDateLoose(rawValue: string): Date | null {
  const trimmed = rawValue.trim();
  if (!trimmed) return null;

  const slashOrDashMatch = trimmed.match(
    /^(\d{1,2})[/-](\d{1,2})[/-](\d{2}|\d{4})(?:[ T]\d{1,2}:\d{2}(:\d{2})?.*)?$/
  );
  if (slashOrDashMatch) {
    const [, month, day, yearStr] = slashOrDashMatch;
    const year =
      yearStr.length === 4
        ? Number(yearStr)
        : Number(yearStr) <= 69
          ? 2000 + Number(yearStr)
          : 1900 + Number(yearStr);
    const date = new Date(year, Number(month) - 1, Number(day));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const isoMatch = trimmed.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const fallback = new Date(trimmed);
  return Number.isNaN(fallback.getTime()) ? null : fallback;
}

export function formatDateMMDDYYYY(date: Date): string {
  const pad2 = (n: number) => String(n).padStart(2, "0");
  return `${pad2(date.getMonth() + 1)}/${pad2(date.getDate())}/${date.getFullYear()}`;
}
