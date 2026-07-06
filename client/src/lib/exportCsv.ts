import Papa from "papaparse";
import type { StoredRecord } from "../state/types";
import { downloadBlob } from "./downloadBlob";
import { toExportRows } from "./toExportRows";

export function exportCsv(records: StoredRecord[], fileNamePrefix: string) {
  const csv = Papa.unparse(toExportRows(records));
  downloadBlob(new Blob([csv], { type: "text/csv;charset=utf-8;" }), `${fileNamePrefix}.csv`);
}
