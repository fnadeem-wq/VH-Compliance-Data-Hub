export const STANDARDIZED_FIELDS = [
  "physician_name",
  "physician_npi",
  "physician_designation",
  "transfer_of_value",
  "amount",
  "date",
] as const;

export type StandardizedField = (typeof STANDARDIZED_FIELDS)[number];
