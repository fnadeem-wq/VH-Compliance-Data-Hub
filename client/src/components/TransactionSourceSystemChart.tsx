import { useMemo } from "react";
import type { StoredRecord } from "../state/types";

interface TransactionSourceSystemChartProps {
  /** Full, unfiltered record set for the current scope. */
  records: StoredRecord[];
  selectedSourceSystem: string | null;
  onSelectSourceSystem: (sourceSystemName: string | null) => void;
}

export function TransactionSourceSystemChart({
  records,
  selectedSourceSystem,
  onSelectSourceSystem,
}: TransactionSourceSystemChartProps) {
  const counts = useMemo(() => {
    const byName = new Map<string, number>();
    for (const record of records) {
      if (!record.sourceSystemName) continue;
      byName.set(record.sourceSystemName, (byName.get(record.sourceSystemName) ?? 0) + 1);
    }
    return [...byName.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [records]);

  // Only meaningful when the current record set actually spans multiple source
  // systems (the client-wide combined view) -- a single-pair view has nothing
  // to break down.
  if (counts.length === 0) return null;

  const maxCount = Math.max(1, ...counts.map((c) => c.count));

  return (
    <div className="mb-4 rounded-md border border-border bg-bg-subtle p-4">
      <h3 className="mb-3 text-center text-sm font-semibold text-navy">
        Transactions by Source System
      </h3>
      <div className="space-y-2">
        {counts.map((c) => {
          const isSelected = selectedSourceSystem === c.name;
          const widthPct = (c.count / maxCount) * 100;
          return (
            <button
              key={c.name}
              type="button"
              onClick={() => onSelectSourceSystem(isSelected ? null : c.name)}
              className="flex w-full items-center gap-3 rounded px-1 py-1 text-left hover:bg-white"
              aria-pressed={isSelected}
            >
              <span
                className={`w-40 shrink-0 truncate text-xs font-medium ${
                  isSelected ? "text-navy underline" : "text-charcoal/80"
                }`}
                title={c.name}
              >
                {c.name}
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
