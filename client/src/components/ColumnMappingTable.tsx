import { useState } from "react";
import { STANDARDIZED_FIELDS } from "../constants/standardizedFields";
import type { MappingEntry, StandardizedField } from "../state/types";
import { Button } from "./ui/Button";
import { Select } from "./ui/Select";

const NOT_MAPPED = "";
const MULTI_COLUMN_FIELDS: StandardizedField[] = ["physician_name"];
const MAX_COLUMNS_PER_FIELD = 2;
const CONSTANT_VALUE_FIELDS: StandardizedField[] = ["transfer_of_value", "amount"];
const TRANSFER_OF_VALUE_OPTIONS = [
  "Food and Beverage",
  "Travel and Lodging",
  "Education",
  "Honoraria",
  "Consulting Fee",
];

interface ColumnMappingTableProps {
  headers: string[];
  initialMapping: MappingEntry[];
  onConfirm: (mapping: MappingEntry[]) => void;
  onCancel?: () => void;
}

interface FieldState {
  columns: string[];
  constantValue: string;
}

export function ColumnMappingTable({
  headers,
  initialMapping,
  onConfirm,
  onCancel,
}: ColumnMappingTableProps) {
  const initialSelections: Record<StandardizedField, FieldState> = Object.fromEntries(
    STANDARDIZED_FIELDS.map((f) => [
      f.field,
      {
        columns: initialMapping
          .filter((m) => m.standardizedField === f.field && !m.constantValue)
          .map((m) => m.rawColumnName),
        constantValue:
          initialMapping.find((m) => m.standardizedField === f.field && m.constantValue)
            ?.constantValue || "",
      },
    ])
  ) as Record<StandardizedField, FieldState>;

  const [selections, setSelections] = useState(initialSelections);

  function setColumnAt(field: StandardizedField, index: number, value: string) {
    setSelections((prev) => {
      const state = { ...prev[field] };
      const columns = [...state.columns];
      if (value === NOT_MAPPED) {
        columns.splice(index, 1);
      } else {
        columns[index] = value;
      }
      return { ...prev, [field]: { ...state, columns } };
    });
  }

  function setConstantValue(field: StandardizedField, value: string) {
    setSelections((prev) => ({
      ...prev,
      [field]: { ...prev[field], constantValue: value },
    }));
  }

  function addColumn(field: StandardizedField) {
    setSelections((prev) => ({
      ...prev,
      [field]: { ...prev[field], columns: [...prev[field].columns, NOT_MAPPED] },
    }));
  }

  function handleConfirm() {
    const mapping: MappingEntry[] = STANDARDIZED_FIELDS.flatMap(({ field }) => {
      const fieldState = selections[field];
      const hasConstantValue = CONSTANT_VALUE_FIELDS.includes(field) && fieldState.constantValue;

      if (hasConstantValue) {
        return [
          {
            standardizedField: field,
            rawColumnName: "",
            constantValue: fieldState.constantValue,
          },
        ];
      }

      return fieldState.columns
        .filter((col) => col !== NOT_MAPPED)
        .map((col) => ({
          standardizedField: field,
          rawColumnName: col,
          constantValue: null,
        }));
    });
    onConfirm(mapping);
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-card">
      <h2 className="mb-1 text-lg font-semibold text-navy">Map your columns</h2>
      <p className="mb-4 text-sm text-charcoal/80">
        Match each standardized field to a column from your uploaded file.
      </p>

      <div className="space-y-4">
        {STANDARDIZED_FIELDS.map(({ field, label, helpText }) => {
          const fieldState = selections[field];
          const columns =
            fieldState.columns.length > 0 ? fieldState.columns : [NOT_MAPPED];
          const isMulti = MULTI_COLUMN_FIELDS.includes(field);
          const canAddAnother =
            isMulti &&
            columns.length < MAX_COLUMNS_PER_FIELD &&
            columns[columns.length - 1] !== NOT_MAPPED;
          const supportsConstantValue = CONSTANT_VALUE_FIELDS.includes(field);

          return (
            <div key={field} className="grid grid-cols-1 items-start gap-2 sm:grid-cols-2">
              <div>
                <div className="text-sm font-medium text-navy">{label}</div>
                {helpText && <div className="text-xs text-charcoal/60">{helpText}</div>}
                {isMulti && (
                  <div className="text-xs text-charcoal/60">
                    Split across two columns? (e.g. First Name + Last Name)
                  </div>
                )}
              </div>
              <div className="space-y-2">
                {supportsConstantValue ? (
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Select
                        value={fieldState.columns[0] || NOT_MAPPED}
                        onChange={(e) => setColumnAt(field, 0, e.target.value)}
                      >
                        <option value={NOT_MAPPED}>— Not mapped —</option>
                        {headers.map((header) => (
                          <option key={header} value={header}>
                            {header}
                          </option>
                        ))}
                      </Select>
                    </div>
                    <div className="flex-1">
                      {field === "transfer_of_value" ? (
                        <select
                          value={fieldState.constantValue}
                          onChange={(e) => setConstantValue(field, e.target.value)}
                          className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal placeholder-charcoal/50 focus:border-primary focus:outline-none"
                        >
                          <option value="">Select value</option>
                          {TRANSFER_OF_VALUE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          placeholder="Constant value"
                          value={fieldState.constantValue}
                          onChange={(e) => setConstantValue(field, e.target.value)}
                          className="w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm text-charcoal placeholder-charcoal/50 focus:border-primary focus:outline-none"
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    {columns.map((value, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Select
                          value={value}
                          onChange={(e) => setColumnAt(field, index, e.target.value)}
                        >
                          <option value={NOT_MAPPED}>— Not mapped —</option>
                          {headers.map((header) => (
                            <option key={header} value={header}>
                              {header}
                            </option>
                          ))}
                        </Select>
                        {isMulti && index > 0 && (
                          <button
                            type="button"
                            title="Remove this column"
                            onClick={() => setColumnAt(field, index, NOT_MAPPED)}
                            className="rounded-md p-2 text-error hover:bg-bg-subtle"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                    {canAddAnother && (
                      <button
                        type="button"
                        onClick={() => addColumn(field)}
                        className="text-sm font-medium text-primary hover:text-primary-dark"
                      >
                        + Add second column
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end gap-3">
        {onCancel && (
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button onClick={handleConfirm}>Confirm Mapping</Button>
      </div>
    </div>
  );
}
