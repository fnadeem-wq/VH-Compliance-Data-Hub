export type StandardizedField =
  | "physician_name"
  | "physician_npi"
  | "physician_designation"
  | "transfer_of_value"
  | "amount"
  | "date";

export interface StandardizedFieldDef {
  field: StandardizedField;
  label: string;
  helpText?: string;
}

export const STANDARDIZED_FIELDS: StandardizedFieldDef[] = [
  { field: "physician_name", label: "Physician Name" },
  { field: "physician_npi", label: "Physician NPI" },
  { field: "physician_designation", label: "Physician Designation" },
  {
    field: "transfer_of_value",
    label: "Nature of Payment",
    helpText: "Category/type of payment, e.g. Meal, Consulting, Transport",
  },
  { field: "amount", label: "Amount", helpText: "Numeric dollar value, e.g. 12.45" },
  { field: "date", label: "Date" },
];
