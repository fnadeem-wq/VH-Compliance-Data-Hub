import { useState, useMemo } from "react";
import type { UploadLogRow } from "../api/uploadLog";
import { recordsApi } from "../api/records";

interface AuditLogTableProps {
  clientId: number;
  rows: UploadLogRow[];
  isLoading: boolean;
  onSelectedBatchesChange?: (batchIds: number[]) => void;
}

export function AuditLogTable({
  clientId,
  rows,
  isLoading,
  onSelectedBatchesChange,
}: AuditLogTableProps) {
  const [selectedBatches, setSelectedBatches] = useState<Set<number>>(
    () => new Set(rows.map((r) => r.batchId))
  );
  const [deletingBatchId, setDeletingBatchId] = useState<number | null>(null);

  const handleToggleBatch = (batchId: number) => {
    const newSelected = new Set(selectedBatches);
    if (newSelected.has(batchId)) {
      newSelected.delete(batchId);
    } else {
      newSelected.add(batchId);
    }
    setSelectedBatches(newSelected);
    onSelectedBatchesChange?.(Array.from(newSelected));
  };

  const handleSelectAll = () => {
    if (selectedBatches.size === rows.length) {
      setSelectedBatches(new Set());
      onSelectedBatchesChange?.([]);
    } else {
      const allBatchIds = new Set(rows.map((r) => r.batchId));
      setSelectedBatches(allBatchIds);
      onSelectedBatchesChange?.(Array.from(allBatchIds));
    }
  };

  async function handleDeleteBatch(clientId: number, sourceSystemId: number, batchId: number) {
    if (!window.confirm("Are you sure you want to delete this upload? This action cannot be undone.")) {
      return;
    }
    setDeletingBatchId(batchId);
    try {
      await recordsApi.delete(clientId, sourceSystemId, batchId);
      // Note: Parent component should handle row removal
    } catch (err) {
      alert("Failed to delete upload: " + (err instanceof Error ? err.message : "Unknown error"));
    } finally {
      setDeletingBatchId(null);
    }
  }

  return (
    <div className="rounded-lg bg-white shadow-card overflow-hidden">
      <div className="max-h-[560px] overflow-auto">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="sticky top-0 z-10 bg-bg-subtle">
            <tr>
              <th className="whitespace-nowrap px-6 py-3 text-left font-semibold text-primary">
                <input
                  type="checkbox"
                  checked={selectedBatches.size === rows.length && rows.length > 0}
                  onChange={handleSelectAll}
                  className="rounded border-primary"
                />
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left font-semibold text-primary">
                Source System
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left font-semibold text-primary">
                File Original Name
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left font-semibold text-primary">
                Date Range
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-center font-semibold text-primary">
                Records
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-center font-semibold text-primary">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {!isLoading && rows.length > 0 ? (
              rows.map((row) => (
                <tr key={row.batchId} className="hover:bg-bg-subtle transition-colors">
                  <td className="px-6 py-3">
                    <input
                      type="checkbox"
                      checked={selectedBatches.has(row.batchId)}
                      onChange={() => handleToggleBatch(row.batchId)}
                      className="rounded border-primary"
                    />
                  </td>
                  <td className="px-6 py-3 text-charcoal">{row.sourceSystemName}</td>
                  <td className="px-6 py-3 text-charcoal">{row.fileName ?? "—"}</td>
                  <td className="whitespace-nowrap px-6 py-3 text-charcoal">
                    {row.dateRangeMin && row.dateRangeMax
                      ? row.dateRangeMin === row.dateRangeMax
                        ? row.dateRangeMin
                        : `${row.dateRangeMin} – ${row.dateRangeMax}`
                      : "—"}
                  </td>
                  <td className="px-6 py-3 text-center text-charcoal">{row.recordCount.toLocaleString()}</td>
                  <td className="px-6 py-3 text-center">
                    <button
                      onClick={() => handleDeleteBatch(row.clientId, row.sourceSystemId, row.batchId)}
                      disabled={deletingBatchId === row.batchId}
                      className="px-3 py-1 text-sm font-medium text-error hover:text-white bg-error/5 hover:bg-error rounded transition-all border border-error/20 hover:border-error/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deletingBatchId === row.batchId ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))
            ) : !isLoading && rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-charcoal/60">
                  No files uploaded yet for this client.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
