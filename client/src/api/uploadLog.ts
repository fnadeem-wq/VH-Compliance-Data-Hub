import { http } from "./http";

export interface UploadLogRow {
  batchId: number;
  clientId: number;
  clientName: string;
  sourceSystemId: number;
  sourceSystemName: string;
  fileName: string | null;
  recordCount: number;
  dateRangeMin: string | null;
  dateRangeMax: string | null;
  uploadedAt: string;
}

export const uploadLogApi = {
  list: (clientId?: number, sourceSystemId?: number) => {
    const params = new URLSearchParams();
    if (clientId != null) params.set("clientId", String(clientId));
    if (sourceSystemId != null) params.set("sourceSystemId", String(sourceSystemId));
    const qs = params.toString();
    return http.get<{ rows: UploadLogRow[] }>(`/upload-log${qs ? `?${qs}` : ""}`);
  },
};
