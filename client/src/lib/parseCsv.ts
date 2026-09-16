import Papa from "papaparse";
import type { RawFileData } from "../state/types";
import { dedupeHeaders } from "./dedupeHeaders";

export function parseRawCsvRows(file: File): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    Papa.parse<string[]>(file, {
      header: false,
      complete: (results) => {
        resolve(results.data as string[][]);
      },
      error: (err) => reject(err),
    });
  });
}

export function buildRawFileDataFromRows(
  rawRows: string[][],
  startingRowIndex: number
): RawFileData {
  if (startingRowIndex < 0 || startingRowIndex >= rawRows.length) {
    return { headers: [], rows: [] };
  }

  const headerRow = rawRows[startingRowIndex];
  if (!headerRow || headerRow.length === 0) {
    return { headers: [], rows: [] };
  }

  const headers = dedupeHeaders(headerRow);
  const dataRows = rawRows.slice(startingRowIndex + 1);

  const rows = dataRows.map((row) => {
    const record: Record<string, string | number | null> = {};
    headers.forEach((header, index) => {
      record[header] = row[index] ?? null;
    });
    return record;
  });

  return { headers, rows };
}

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
