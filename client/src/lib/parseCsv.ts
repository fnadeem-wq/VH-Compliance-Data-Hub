import Papa from "papaparse";
import type { RawFileData } from "../state/types";
import { dedupeHeaders } from "./dedupeHeaders";

export function parseCsv(file: File): Promise<RawFileData> {
  return new Promise((resolve, reject) => {
    Papa.parse<string[]>(file, {
      header: false,
      skipEmptyLines: true,
      complete: (results) => {
        const [rawHeaderRow, ...dataRows] = results.data;
        if (!rawHeaderRow) {
          resolve({ headers: [], rows: [] });
          return;
        }
        const headers = dedupeHeaders(rawHeaderRow);
        const rows = dataRows.map((row) => {
          const record: Record<string, string | number | null> = {};
          headers.forEach((header, index) => {
            record[header] = row[index] ?? null;
          });
          return record;
        });
        resolve({ headers, rows });
      },
      error: (err) => reject(err),
    });
  });
}
