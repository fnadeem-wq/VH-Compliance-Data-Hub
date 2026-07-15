import { useEffect, useMemo, useRef, useState } from "react";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface DateHierarchyFilterProps {
  /** Unique standardized "MM/DD/YYYY" date strings present in the current data set. */
  dates: string[];
  /** null means "no filter active" (every date shown). */
  selected: Set<string> | null;
  onChange: (next: Set<string> | null) => void;
}

interface ParsedDate {
  full: string;
  year: number;
  month: number; // 0-11
  day: number;
}

export function DateHierarchyFilter({ dates, selected, onChange }: DateHierarchyFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set());
  const [expandedMonths, setExpandedMonths] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  const parsed = useMemo<ParsedDate[]>(() => {
    return dates
      .map((full) => {
        const m = full.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        if (!m) return null;
        return { full, month: Number(m[1]) - 1, day: Number(m[2]), year: Number(m[3]) };
      })
      .filter((d): d is ParsedDate => d !== null);
  }, [dates]);

  const allDates = useMemo(() => new Set(parsed.map((d) => d.full)), [parsed]);

  const tree = useMemo(() => {
    const byYear = new Map<number, Map<number, ParsedDate[]>>();
    for (const d of parsed) {
      if (!byYear.has(d.year)) byYear.set(d.year, new Map());
      const byMonth = byYear.get(d.year)!;
      if (!byMonth.has(d.month)) byMonth.set(d.month, []);
      byMonth.get(d.month)!.push(d);
    }
    for (const byMonth of byYear.values()) {
      for (const days of byMonth.values()) days.sort((a, b) => a.day - b.day);
    }
    return byYear;
  }, [parsed]);

  const years = useMemo(() => [...tree.keys()].sort((a, b) => b - a), [tree]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  function isDayChecked(full: string) {
    return selected === null || selected.has(full);
  }

  function monthState(days: ParsedDate[]) {
    const checkedCount = days.filter((d) => isDayChecked(d.full)).length;
    return { checked: checkedCount === days.length, indeterminate: checkedCount > 0 && checkedCount < days.length };
  }

  function yearState(year: number) {
    const monthMap = tree.get(year)!;
    const allDays = [...monthMap.values()].flat();
    const checkedCount = allDays.filter((d) => isDayChecked(d.full)).length;
    return { checked: checkedCount === allDays.length, indeterminate: checkedCount > 0 && checkedCount < allDays.length };
  }

  const selectAllChecked = selected === null;
  const selectAllIndeterminate = selected !== null && selected.size > 0 && selected.size < allDates.size;

  function materialize(): Set<string> {
    return selected === null ? new Set(allDates) : new Set(selected);
  }

  function commit(next: Set<string>) {
    onChange(next.size === allDates.size ? null : next);
  }

  function toggleSelectAll() {
    onChange(selectAllChecked ? new Set() : null);
  }

  function toggleDay(full: string) {
    const next = materialize();
    if (next.has(full)) next.delete(full);
    else next.add(full);
    commit(next);
  }

  function toggleMonth(year: number, month: number) {
    const days = tree.get(year)!.get(month)!;
    const { checked } = monthState(days);
    const next = materialize();
    for (const d of days) {
      if (checked) next.delete(d.full);
      else next.add(d.full);
    }
    commit(next);
  }

  function toggleYear(year: number) {
    const monthMap = tree.get(year)!;
    const allDays = [...monthMap.values()].flat();
    const { checked } = yearState(year);
    const next = materialize();
    for (const d of allDays) {
      if (checked) next.delete(d.full);
      else next.add(d.full);
    }
    commit(next);
  }

  function toggleExpandYear(year: number) {
    setExpandedYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) next.delete(year);
      else next.add(year);
      return next;
    });
  }

  function toggleExpandMonth(key: string) {
    setExpandedMonths((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const label = selected === null ? "All" : selected.size === 0 ? "None" : `${selected.size} selected`;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded border border-border bg-white px-2 py-1 text-xs font-normal text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <span className="truncate">{label}</span>
        <span className="ml-1 text-charcoal/50">▾</span>
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-1 max-h-72 w-56 overflow-y-auto rounded-md border border-border bg-white p-2 text-left shadow-card">
          <label className="flex items-center gap-2 border-b border-border px-1 py-1 text-xs font-semibold text-navy">
            <input
              type="checkbox"
              checked={selectAllChecked}
              ref={(el) => {
                if (el) el.indeterminate = selectAllIndeterminate;
              }}
              onChange={toggleSelectAll}
            />
            Select All
          </label>

          {years.map((year) => {
            const { checked: yChecked, indeterminate: yIndeterminate } = yearState(year);
            const isYearExpanded = expandedYears.has(year);
            const monthMap = tree.get(year)!;
            const months = [...monthMap.keys()].sort((a, b) => a - b);

            return (
              <div key={year} className="pl-1">
                <div className="flex items-center gap-1 py-1">
                  <button
                    type="button"
                    onClick={() => toggleExpandYear(year)}
                    className="w-4 text-charcoal/60"
                  >
                    {isYearExpanded ? "▾" : "▸"}
                  </button>
                  <label className="flex items-center gap-2 text-xs text-charcoal">
                    <input
                      type="checkbox"
                      checked={yChecked}
                      ref={(el) => {
                        if (el) el.indeterminate = yIndeterminate;
                      }}
                      onChange={() => toggleYear(year)}
                    />
                    {year}
                  </label>
                </div>

                {isYearExpanded &&
                  months.map((month) => {
                    const days = monthMap.get(month)!;
                    const { checked: mChecked, indeterminate: mIndeterminate } = monthState(days);
                    const monthKey = `${year}-${month}`;
                    const isMonthExpanded = expandedMonths.has(monthKey);

                    return (
                      <div key={monthKey} className="pl-4">
                        <div className="flex items-center gap-1 py-1">
                          <button
                            type="button"
                            onClick={() => toggleExpandMonth(monthKey)}
                            className="w-4 text-charcoal/60"
                          >
                            {isMonthExpanded ? "▾" : "▸"}
                          </button>
                          <label className="flex items-center gap-2 text-xs text-charcoal">
                            <input
                              type="checkbox"
                              checked={mChecked}
                              ref={(el) => {
                                if (el) el.indeterminate = mIndeterminate;
                              }}
                              onChange={() => toggleMonth(year, month)}
                            />
                            {MONTH_NAMES[month]}
                          </label>
                        </div>

                        {isMonthExpanded &&
                          days.map((d) => (
                            <label
                              key={d.full}
                              className="ml-9 flex items-center gap-2 py-0.5 text-xs text-charcoal"
                            >
                              <input
                                type="checkbox"
                                checked={isDayChecked(d.full)}
                                onChange={() => toggleDay(d.full)}
                              />
                              {d.day}
                            </label>
                          ))}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
