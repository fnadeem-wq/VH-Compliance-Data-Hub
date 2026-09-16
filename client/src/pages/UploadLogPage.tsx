import { useEffect, useState } from "react";
import { uploadLogApi, type UploadLogRow } from "../api/uploadLog";
import { recordsApi } from "../api/records";

interface UploadLogPageProps {
  onSelectClient: (clientId: number) => void;
  onEditMapping?: (clientId: number, sourceSystemId: number) => void;
}

export function UploadLogPage({ onSelectClient, onEditMapping }: UploadLogPageProps) {
  const [rows, setRows] = useState<UploadLogRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingBatchId, setDeletingBatchId] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(true);
    uploadLogApi
      .list()
      .then((res) => setRows(res.rows))
      .finally(() => setIsLoading(false));
  }, []);

  async function handleDeleteBatch(clientId: number, sourceSystemId: number, batchId: number) {
    if (!window.confirm("Are you sure you want to delete this upload? This action cannot be undone.")) {
      return;
    }
    setDeletingBatchId(batchId);
    try {
      await recordsApi.delete(clientId, sourceSystemId, batchId);
      setRows((prev) => prev.filter((row) => row.batchId !== batchId));
    } catch (err) {
      alert("Failed to delete upload: " + (err instanceof Error ? err.message : "Unknown error"));
    } finally {
      setDeletingBatchId(null);
    }
  }

  return (
    <div className="min-h-[calc(100vh-200px)]">
      <section className="px-6 py-16 bg-bg-subtle">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-8 text-2xl font-bold text-primary">
            Upload Log ({rows.length} file{rows.length === 1 ? "" : "s"})
          </h2>

          <div className="rounded-lg bg-white shadow-card overflow-hidden">
            <div className="max-h-[560px] overflow-auto">
              <table className="min-w-full divide-y divide-border text-sm">
                <thead className="sticky top-0 z-10 bg-bg-subtle">
                  <tr>
                    <th className="whitespace-nowrap px-6 py-3 text-left font-semibold text-primary">
                      Client Name
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
                  {rows.map((row) => (
                    <tr key={row.batchId} className="hover:bg-bg-subtle transition-colors">
                      <td className="px-6 py-3">
                        <button
                          onClick={() => onSelectClient(row.clientId)}
                          className="font-medium text-primary hover:text-primary-dark hover:underline"
                        >
                          {row.clientName}
                        </button>
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
                      <td className="px-6 py-3 text-center space-x-2 flex justify-center">
                        <button
                          onClick={() => onEditMapping?.(row.clientId, row.sourceSystemId)}
                          className="px-3 py-1 text-sm font-medium text-primary hover:text-white bg-primary/5 hover:bg-primary rounded transition-all border border-primary/20 hover:border-primary/40"
                        >
                          Edit Mapping
                        </button>
                        <button
                          onClick={() => handleDeleteBatch(row.clientId, row.sourceSystemId, row.batchId)}
                          disabled={deletingBatchId === row.batchId}
                          className="px-3 py-1 text-sm font-medium text-error hover:text-white bg-error/5 hover:bg-error rounded transition-all border border-error/20 hover:border-error/40 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {deletingBatchId === row.batchId ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                  {!isLoading && rows.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-charcoal/60">
                        No files uploaded yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
