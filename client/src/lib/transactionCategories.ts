import type { StoredRecord } from "../state/types";

export type CategoryKey =
  | "npi_and_designation"
  | "npi_no_designation"
  | "no_npi_no_designation"
  | "designation_no_npi";

function hasValue(value: string | null): boolean {
  return value != null && value.trim() !== "";
}

export const CATEGORY_DEFS: { key: CategoryKey; label: string; test: (r: StoredRecord) => boolean }[] = [
  {
    key: "npi_and_designation",
    label: "With NPI and Designation Both",
    test: (r) => hasValue(r.physicianNpi) && hasValue(r.physicianDesignation),
  },
  {
    key: "npi_no_designation",
    label: "With NPI and No Designation",
    test: (r) => hasValue(r.physicianNpi) && !hasValue(r.physicianDesignation),
  },
  {
    key: "no_npi_no_designation",
    label: "No NPI and No Designation",
    test: (r) => !hasValue(r.physicianNpi) && !hasValue(r.physicianDesignation),
  },
  {
    key: "designation_no_npi",
    label: "with Designation but No NPI",
    test: (r) => !hasValue(r.physicianNpi) && hasValue(r.physicianDesignation),
  },
];
