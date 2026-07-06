import { useState } from "react";
import { STANDARDIZED_FIELDS } from "../constants/standardizedFields";
import type { MappingEntry, StandardizedField } from "../state/types";
import { Button } from "./ui/Button";
import { Select } from "./ui/Select";

const NOT_MAPPED = "";
const MULTI_COLUMN_FIELDS: StandardizedField[] = ["physician_name"];
const MAX_COLUMNS_PER_FIELD = 2;

interface ColumnMappingTableProps {
  headers: string[];
  initialMapping: MappingEntry[];
  onConfirm: (mapping: MappingEntry[]) => void;
  onCancel?: () => void;
}

export function ColumnMappingTable({
  headers,
  initialMapping,
  onConfirm,
  onCancel,
}: ColumnMappingTableProps) {
  const initialSelections: Record<StandardizedField, string[]> = Object.fromEntries(
    STANDARDIZED_FIELDS.map((f) => [
      f.field,
      initialMapping
        .filter((m) => m.standardizedField === f.field)
        .map((m) => m.rawColumnName),
    ])
  ) as Record<StandardizedField, string[]>;

  const [selections, setSelections] = useState(initialSelections);

  function setColumnAt(field: StandardizedField, index: number, value: string) {
    setSelections((prev) => {
      const columns = [...prev[field]];
      if (value === NOT_MAPPED) {
        columns.splice(index, 1);
      } else {
        columns[index] = value;
      }
      return { ...prev, [field]: columns };
    });
  }

  function addColumn(field: StandardizedField) {
    setSelections((prev) => ({ ...prev, [field]: [...prev[field], NOT_MAPPED] }));
  }

  function handleConfirm() {
    const mapping: MappingEntry[] = STANDARDIZED_FIELDS.flatMap(({ field }) =>
      selections[field]
        .filter((rawColumnName) => rawColumnName !== NOT_MAPPED)
        .map((rawColumnName) => ({ standardizedField: field, rawColumnName }))
    );
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
          const columns = selections[field].length > 0 ? selections[field] : [NOT_MAPPED];
          const isMulti = MULTI_COLUMN_FIELDS.includes(field);
          const canAddAnother = isMulti && columns.length < MAX_COLUMNS_PER_FIELD && columns[columns.length - 1] !== NOT_MAPPED;

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
                {columns.map((value, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Select value={value} onChange={(e) => setColumnAt(field, index, e.target.value)}>
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
