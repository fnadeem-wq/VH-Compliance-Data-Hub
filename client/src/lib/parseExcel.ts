import * as XLSX from "xlsx";
import type { RawFileData } from "../state/types";
import { dedupeHeaders } from "./dedupeHeaders";

export async function readWorkbookSheetNames(file: File): Promise<{
  workbook: XLSX.WorkBook;
  sheetNames: string[];
}> {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array", cellDates: true });
  return { workbook, sheetNames: workbook.SheetNames };
}

export function parseWorkbookSheet(workbook: XLSX.WorkBook, sheetName: string): RawFileData {
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) return { headers: [], rows: [] };

  const rowsAsArrays = XLSX.utils.sheet_to_json<(string | number | Date | null)[]>(sheet, {
    header: 1,
    defval: null,
    raw: true,
  });

  const [rawHeaderRow, ...dataRows] = rowsAsArrays;
  if (!rawHeaderRow) return { headers: [], rows: [] };

  const headers = dedupeHeaders(rawHeaderRow.map((h) => (h == null ? "" : String(h))));
  const rows = dataRows
    .filter((row) => row.some((cell) => cell !== null && cell !== ""))
    .map((row) => {
      const record: Record<string, string | number | null> = {};
      headers.forEach((header, index) => {
        const cell = row[index];
        record[header] = cell instanceof Date ? cell.toISOString() : cell ?? null;
      });
      return record;
    });

  return { headers, rows };
}
