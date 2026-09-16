import { http } from "./http";
import type { StandardizedRow, StoredRecord } from "../state/types";

export const recordsApi = {
  list: (clientId: number, sourceSystemId: number) =>
    http.get<{ records: StoredRecord[] }>(
      `/clients/${clientId}/source-systems/${sourceSystemId}/records`
    ),
  append: (
    clientId: number,
    sourceSystemId: number,
    records: StandardizedRow[],
    fileName?: string
  ) =>
    http.post<{ batchId: number; uploadedAt: string; records: StoredRecord[] }>(
      `/clients/${clientId}/source-systems/${sourceSystemId}/records`,
      { fileName, records }
    ),
  delete: (clientId: number, sourceSystemId: number, batchId: number) =>
    http.delete<{ success: boolean }>(
      `/clients/${clientId}/source-systems/${sourceSystemId}/records/${batchId}`
    ),
};
