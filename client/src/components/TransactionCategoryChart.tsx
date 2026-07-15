import { useMemo } from "react";
import type { StoredRecord } from "../state/types";
import { CATEGORY_DEFS, type CategoryKey } from "../lib/transactionCategories";

interface TransactionCategoryChartProps {
  /** Full, unfiltered record set for the current scope -- counts always reflect
   * the complete totals, independent of any table filters currently applied. */
  records: StoredRecord[];
  selectedCategory: CategoryKey | null;
  onSelectCategory: (category: CategoryKey | null) => void;
}

export function TransactionCategoryChart({
  records,
  selectedCategory,
  onSelectCategory,
}: TransactionCategoryChartProps) {
  const counts = useMemo(() => {
    return CATEGORY_DEFS.map((def) => ({
      ...def,
      count: records.filter(def.test).length,
    })).sort((a, b) => b.count - a.count);
  }, [records]);

  const maxCount = Math.max(1, ...counts.map((c) => c.count));

  return (
    <div className="mb-4 rounded-md border border-border bg-bg-subtle p-4">
      <h3 className="mb-3 text-center text-sm font-semibold text-navy">
        Transactions by NPI / Designation completeness
      </h3>
      <div className="space-y-2">
        {counts.map((c) => {
          const isSelected = selectedCategory === c.key;
          const widthPct = (c.count / maxCount) * 100;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => onSelectCategory(isSelected ? null : c.key)}
              className="flex w-full items-center gap-3 rounded px-1 py-1 text-left hover:bg-white"
              aria-pressed={isSelected}
            >
              <span
                className={`w-64 shrink-0 truncate text-xs font-medium ${
                  isSelected ? "text-navy" : "text-charcoal/80"
                } ${isSelected ? "underline" : ""}`}
                title={c.label}
              >
                {c.label}
              </span>
              <span className="flex h-6 flex-1 items-center">
                <span
                  className={`h-6 rounded-r ${isSelected ? "bg-primary-dark" : "bg-primary"}`}
                  style={{ width: `${widthPct}%`, minWidth: c.count > 0 ? "4px" : "0" }}
                />
              </span>
              <span className="w-12 shrink-0 text-right text-sm font-semibold text-navy">
                {c.count.toLocaleString()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
