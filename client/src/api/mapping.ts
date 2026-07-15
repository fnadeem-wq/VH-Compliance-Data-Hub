import { http } from "./http";
import type { MappingEntry, SavedMapping } from "../state/types";

export const mappingApi = {
  get: (clientId: number, sourceSystemId: number) =>
    http.get<SavedMapping>(`/clients/${clientId}/source-systems/${sourceSystemId}/mapping`),
  save: (clientId: number, sourceSystemId: number, mappings: MappingEntry[]) =>
    http.put<{ mappings: MappingEntry[] }>(
      `/clients/${clientId}/source-systems/${sourceSystemId}/mapping`,
      { mappings }
    ),
};
