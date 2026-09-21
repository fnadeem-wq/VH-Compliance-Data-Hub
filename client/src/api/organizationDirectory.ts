import { http } from "./http";

export interface OrganizationDirectoryEntry {
  id: number;
  companyName: string;
  applicableManufacturerOrGpoMakingPaymentId?: string;
  submittingApplicableManufacturerOrGpoName?: string;
}

export const organizationDirectoryApi = {
  search: (query: string) =>
    http.get<OrganizationDirectoryEntry[]>(`/organization-directory?q=${encodeURIComponent(query)}`),
};
