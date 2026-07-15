import * as XLSX from "xlsx";
import type { StoredRecord } from "../state/types";
import { toExportRows } from "./toExportRows";

export function exportExcel(records: StoredRecord[], fileNamePrefix: string) {
  const worksheet = XLSX.utils.json_to_sheet(toExportRows(records));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Standardized");
  XLSX.writeFile(workbook, `${fileNamePrefix}.xlsx`);
}
