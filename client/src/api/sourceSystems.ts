import { http } from "./http";
import type { Entity } from "../state/types";

export const sourceSystemsApi = {
  list: (clientId: number) => http.get<Entity[]>(`/clients/${clientId}/source-systems`),
  create: (clientId: number, name: string) =>
    http.post<Entity>(`/clients/${clientId}/source-systems`, { name }),
  rename: (clientId: number, id: number, name: string) =>
    http.patch<Entity>(`/clients/${clientId}/source-systems/${id}`, { name }),
  remove: (clientId: number, id: number) =>
    http.delete<void>(`/clients/${clientId}/source-systems/${id}`),
  recordCount: (clientId: number, id: number) =>
    http.get<{ count: number }>(`/clients/${clientId}/source-systems/${id}/record-count`),
};
