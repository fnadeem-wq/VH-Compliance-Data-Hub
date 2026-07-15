import type { StoredRecord } from "../state/types";
import { standardizeDate } from "./standardizeDate";

export function toExportRows(records: StoredRecord[]) {
  return records.map((r) => ({
    "Transaction ID": r.id,
    "Physician Name": r.physicianName ?? "",
    "Physician NPI": r.physicianNpi ?? "",
    "Physician Designation": r.physicianDesignation ?? "",
    Date: r.date ? standardizeDate(r.date) : "",
    "Transfer of Value": r.transferOfValue ?? "",
    Amount: r.amount ?? "",
    "Uploaded At": new Date(r.uploadedAt).toLocaleString(),
  }));
}
