import type { MappingEntry, RawFileData, StandardizedRow } from "../state/types";
import { standardizeDate } from "./standardizeDate";

const FIELD_TO_KEY: Record<string, keyof StandardizedRow> = {
  physician_name: "physicianName",
  physician_npi: "physicianNpi",
  physician_designation: "physicianDesignation",
  transfer_of_value: "transferOfValue",
  amount: "amount",
  date: "date",
};

export function buildStandardizedTable(
  rawFileData: RawFileData,
  mapping: MappingEntry[]
): StandardizedRow[] {
  return rawFileData.rows.map((row) => {
    const result: StandardizedRow = {
      physicianName: null,
      physicianNpi: null,
      physicianDesignation: null,
      transferOfValue: null,
      amount: null,
      date: null,
    };

    // physician_name may be mapped to more than one raw column (e.g. separate
    // First Name / Last Name columns), so its parts are collected and joined
    // instead of the later one simply overwriting the earlier one.
    const physicianNameParts: string[] = [];

    for (const entry of mapping) {
      const key = FIELD_TO_KEY[entry.standardizedField];
      const rawValue = row[entry.rawColumnName];
      if (rawValue === undefined || rawValue === null || rawValue === "") continue;

      if (key === "amount") {
        const numeric = typeof rawValue === "number" ? rawValue : parseFloat(String(rawValue));
        result.amount = Number.isNaN(numeric) ? null : numeric;
      } else if (key === "physicianName") {
        physicianNameParts.push(String(rawValue).trim());
      } else if (key === "date") {
        result.date = standardizeDate(String(rawValue));
      } else {
        (result[key] as string | null) = String(rawValue);
      }
    }

    if (physicianNameParts.length > 0) {
      result.physicianName = physicianNameParts.join(" ");
    }

    return result;
  });
}
