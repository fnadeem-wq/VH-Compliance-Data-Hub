function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function expandYear(yearStr: string): number {
  if (yearStr.length === 4) return parseInt(yearStr, 10);
  // 2-digit year: standard pivot -- 00-69 => 2000-2069, 70-99 => 1970-1999
  const n = parseInt(yearStr, 10);
  return n <= 69 ? 2000 + n : 1900 + n;
}

/**
 * Normalizes whatever date format a raw source column happens to use --
 * "04/21/2026", "04-06-26 0:00", ISO datetimes, Excel-serial-derived ISO
 * strings, etc. -- into a single consistent "MM/DD/YYYY" date-only string,
 * so the standardized Date column never has a time component and never
 * mixes formats across rows.
 */
export function standardizeDate(rawValue: string): string {
  const trimmed = rawValue.trim();
  if (!trimmed) return trimmed;

  // MM/DD/YYYY or MM-DD-YY(YY), optionally followed by a time component
  // (space or "T" separated, with or without seconds).
  const slashOrDashMatch = trimmed.match(
    /^(\d{1,2})[/-](\d{1,2})[/-](\d{2}|\d{4})(?:[ T]\d{1,2}:\d{2}(:\d{2})?.*)?$/
  );
  if (slashOrDashMatch) {
    const [, month, day, year] = slashOrDashMatch;
    return `${pad2(Number(month))}/${pad2(Number(day))}/${expandYear(year)}`;
  }

  // ISO: YYYY-MM-DD, optionally with a "T..." or " HH:MM" time component.
  const isoMatch = trimmed.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return `${pad2(Number(month))}/${pad2(Number(day))}/${year}`;
  }

  // Fallback: let the JS Date parser take a swing (covers things like
  // "April 21, 2026" or "21 Apr 2026").
  const parsed = new Date(trimmed);
  if (!Number.isNaN(parsed.getTime())) {
    return `${pad2(parsed.getMonth() + 1)}/${pad2(parsed.getDate())}/${parsed.getFullYear()}`;
  }

  // Unrecognized format -- leave as-is rather than silently discarding data.
  return trimmed;
}
