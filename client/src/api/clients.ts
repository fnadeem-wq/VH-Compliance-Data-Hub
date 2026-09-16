import { http } from "./http";
import type { Entity, StoredRecord } from "../state/types";

export interface ClientSummary {
  id: number;
  name: string;
  lastModifiedAt: string | null;
  totalFiles: number;
}

export const clientsApi = {
  list: () => http.get<Entity[]>("/clients"),
  summary: () => http.get<ClientSummary[]>("/clients/summary"),
  create: (name: string) => http.post<Entity>("/clients", { name }),
  rename: (id: number, name: string) => http.patch<Entity>(`/clients/${id}`, { name }),
  remove: (id: number) => http.delete<void>(`/clients/${id}`),
  recordCount: (id: number) => http.get<{ count: number }>(`/clients/${id}/record-count`),
  records: (id: number) => http.get<{ records: StoredRecord[] }>(`/clients/${id}/records`),
};
