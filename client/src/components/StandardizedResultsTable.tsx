import { useMemo, useState } from "react";
import type { StoredRecord } from "../state/types";
import { Button } from "./ui/Button";
import { DateHierarchyFilter } from "./DateHierarchyFilter";
import { TransactionCategoryChart } from "./TransactionCategoryChart";
import { TransactionSourceSystemChart } from "./TransactionSourceSystemChart";
import { standardizeDate } from "../lib/standardizeDate";
import { CATEGORY_DEFS, type CategoryKey } from "../lib/transactionCategories";

interface StandardizedResultsTableProps {
  records: StoredRecord[];
  onDownloadCsv: (rows: StoredRecord[]) => void;
  onDownloadExcel: (rows: StoredRecord[]) => void;
  /** Omitted in the client-wide (all source systems) view, where there's no single mapping to edit. */
  onEditMapping?: () => void;
}

interface ColumnDef {
  key: keyof StoredRecord;
  label: string;
  format: (record: StoredRecord) => string;
  /** Underlying comparable value, used to sort each column's dropdown options meaningfully. */
  sortValue: (record: StoredRecord) => number | string;
}

// Sentinel for "no filter active" on a dropdown column -- distinct from "" so an
// actual blank/empty data value can still be selected as its own filter option.
const ALL_VALUES = "__ALL__";

const columns: ColumnDef[] = [
  { key: "id", label: "Transaction ID", format: (r) => String(r.id), sortValue: (r) => r.id },
  { key: "physicianName", label: "Physician Name", format: (r) => r.physicianName ?? "", sortValue: (r) => r.physicianName ?? "" },
  { key: "physicianNpi", label: "Physician NPI", format: (r) => r.physicianNpi ?? "", sortValue: (r) => r.physicianNpi ?? "" },
  {
    key: "physicianDesignation",
    label: "Physician Designation",
    format: (r) => r.physicianDesignation ?? "",
    sortValue: (r) => r.physicianDesignation ?? "",
  },
  {
    key: "date",
    label: "Date",
    // standardizeDate is re-applied here (not just at upload time) so records
    // saved before this normalization existed still display/filter correctly.
    format: (r) => (r.date ? standardizeDate(r.date) : ""),
    sortValue: (r) => (r.date ? standardizeDate(r.date) : ""),
  },
  { key: "transferOfValue", label: "Transfer of Value", format: (r) => r.transferOfValue ?? "", sortValue: (r) => r.transferOfValue ?? "" },
  {
    key: "amount",
    label: "Amount",
    format: (r) => (r.amount != null ? String(r.amount) : ""),
    sortValue: (r) => r.amount ?? -Infinity,
  },
  {
    key: "uploadedAt",
    label: "Uploaded At",
    format: (r) => new Date(r.uploadedAt).toLocaleString(),
    sortValue: (r) => new Date(r.uploadedAt).getTime(),
  },
];

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-bg-subtle px-4 py-3">
      <div className="text-xs text-charcoal/70">{label}</div>
      <div className="text-2xl font-semibold text-navy">{value}</div>
    </div>
  );
}

export function StandardizedResultsTable({
  records,
  onDownloadCsv,
  onDownloadExcel,
  onEditMapping,
}: StandardizedResultsTableProps) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [selectedDates, setSelectedDates] = useState<Set<string> | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);
  const [selectedSourceSystem, setSelectedSourceSystem] = useState<string | null>(null);

  const hasActiveFilters =
    Object.values(filters).some((v) => v !== ALL_VALUES) ||
    selectedDates !== null ||
    selectedCategory !== null ||
    selectedSourceSystem !== null;

  function resetAllFilters() {
    setFilters({});
    setSelectedDates(null);
    setSelectedCategory(null);
    setSelectedSourceSystem(null);
  }

  // Dropdown options are derived from the full (unfiltered) record set for this
  // Client/Source System, so each column offers exactly the values that actually
  // occur in this data -- not a fixed universal list.
  const optionsByColumn = useMemo(() => {
    const result: Record<string, string[]> = {};
    for (const col of columns) {
      const seen = new Map<string, number | string>();
      for (const record of records) {
        const label = col.format(record);
        if (!seen.has(label)) seen.set(label, col.sortValue(record));
      }
      result[col.key] = [...seen.entries()]
        .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
        .map(([label]) => label);
    }
    return result;
  }, [records]);

  const filteredRecords = useMemo(() => {
    const activeFilters = Object.entries(filters).filter(([, value]) => value !== ALL_VALUES);
    const categoryDef = selectedCategory
      ? CATEGORY_DEFS.find((c) => c.key === selectedCategory)
      : null;

    return records.filter((record) => {
      if (selectedDates !== null) {
        const dateColumn = columns.find((c) => c.key === "date")!;
        if (!selectedDates.has(dateColumn.format(record))) return false;
      }
      if (categoryDef && !categoryDef.test(record)) return false;
      if (selectedSourceSystem !== null && record.sourceSystemName !== selectedSourceSystem) {
        return false;
      }
      return activeFilters.every(([key, filterValue]) => {
        const column = columns.find((c) => c.key === key);
        if (!column) return true;
        return column.format(record) === filterValue;
      });
    });
  }, [records, filters, selectedDates, selectedCategory, selectedSourceSystem]);

  const analytics = useMemo(() => {
    const totalTransactions = filteredRecords.length;
    const totalAmount = filteredRecords.reduce((sum, r) => sum + (r.amount ?? 0), 0);
    const uniquePhysicians = new Set(
      filteredRecords
        .map((r) => r.physicianNpi || r.physicianName)
        .filter((v): v is string => Boolean(v))
    ).size;
    return { totalTransactions, totalAmount, uniquePhysicians };
  }, [filteredRecords]);

  return (
    <div className="rounded-lg bg-white p-6 shadow-card">
      <div className="mb-4 flex flex-wrap items-center justify-end gap-3">
        <div className="flex flex-wrap gap-2">
          {onEditMapping && (
            <Button variant="secondary" onClick={onEditMapping}>
              Edit Mapping
            </Button>
          )}
          <Button variant="secondary" onClick={resetAllFilters} disabled={!hasActiveFilters}>
            Reset Filters
          </Button>
          <Button variant="secondary" onClick={() => onDownloadCsv(filteredRecords)}>
            Download CSV
          </Button>
          <Button variant="secondary" onClick={() => onDownloadExcel(filteredRecords)}>
            Download Excel
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <TransactionCategoryChart
          records={records}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <TransactionSourceSystemChart
          records={records}
          selectedSourceSystem={selectedSourceSystem}
          onSelectSourceSystem={setSelectedSourceSystem}
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatTile label="Total transactions" value={analytics.totalTransactions.toLocaleString()} />
        <StatTile
          label="Total amount"
          value={analytics.totalAmount.toLocaleString(undefined, {
            style: "currency",
            currency: "USD",
          })}
        />
        <StatTile label="Unique physicians" value={analytics.uniquePhysicians.toLocaleString()} />
      </div>

      <div className="max-h-[480px] overflow-auto rounded-md border border-border">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="sticky top-0 z-10 bg-bg-subtle">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`whitespace-nowrap px-4 py-2 font-semibold text-navy ${
                    col.key === "id" ? "text-center" : "text-left"
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
            <tr className="bg-bg-subtle">
              {columns.map((col) =>
                col.key === "date" ? (
                  <th key={col.key} className="px-4 pb-2">
                    <DateHierarchyFilter
                      dates={optionsByColumn.date.filter((d) => d !== "")}
                      selected={selectedDates}
                      onChange={setSelectedDates}
                    />
                  </th>
                ) : (
                  <th key={col.key} className="px-4 pb-2">
                    <select
                      value={filters[col.key] ?? ALL_VALUES}
                      onChange={(e) => setFilters((prev) => ({ ...prev, [col.key]: e.target.value }))}
                      className="w-full rounded border border-border bg-white px-2 py-1 text-xs font-normal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value={ALL_VALUES}>All</option>
                      {optionsByColumn[col.key].map((option) => (
                        <option key={option} value={option}>
                          {option === "" ? "(Blank)" : option}
                        </option>
                      ))}
                    </select>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-2 ${
                      col.key === "uploadedAt" ? "whitespace-nowrap text-charcoal/70" : ""
                    } ${col.key === "id" ? "whitespace-nowrap text-center text-charcoal/70" : ""}`}
                  >
                    {col.format(record)}
                  </td>
                ))}
              </tr>
            ))}
            {filteredRecords.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-4 py-6 text-center text-charcoal/60">
                  No rows match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
