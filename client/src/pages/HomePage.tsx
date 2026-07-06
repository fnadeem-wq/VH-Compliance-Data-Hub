import { useEffect, useState } from "react";
import { clientsApi } from "../api/clients";
import { sourceSystemsApi } from "../api/sourceSystems";
import { uploadLogApi, type UploadLogRow } from "../api/uploadLog";
import { EntityPicker } from "../components/EntityPicker";
import { Button } from "../components/ui/Button";
import type { Entity } from "../state/types";

interface HomePageProps {
  onNavigateToUpload: (clientId: number, sourceSystemId: number) => void;
}

export function HomePage({ onNavigateToUpload }: HomePageProps) {
  const [clients, setClients] = useState<Entity[]>([]);
  const [sourceSystems, setSourceSystems] = useState<Entity[]>([]);
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  const [selectedSourceSystemId, setSelectedSourceSystemId] = useState<number | null>(null);
  const [rows, setRows] = useState<UploadLogRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    clientsApi.list().then(setClients);
  }, []);

  async function handleSelectClient(clientId: number | null) {
    setSelectedClientId(clientId);
    setSelectedSourceSystemId(null);
    if (clientId == null) {
      setSourceSystems([]);
      return;
    }
    const list = await sourceSystemsApi.list(clientId);
    setSourceSystems(list);
  }

  useEffect(() => {
    setIsLoading(true);
    uploadLogApi
      .list(selectedClientId ?? undefined, selectedSourceSystemId ?? undefined)
      .then((res) => setRows(res.rows))
      .finally(() => setIsLoading(false));
  }, [selectedClientId, selectedSourceSystemId]);

  const canUpload = selectedClientId != null && selectedSourceSystemId != null;

  return (
    <>
      <section className="rounded-lg bg-white p-6 shadow-card">
        <h2 className="mb-4 text-lg font-semibold text-navy">Upload Raw File</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <EntityPicker
          label="Client"
          placeholder="All clients"
          entities={clients}
          selectedId={selectedClientId}
          addLabel="Add Client"
          addFieldLabel="Client name"
          onSelect={handleSelectClient}
          onAdd={async (name) => {
            const created = await clientsApi.create(name);
            setClients((prev) => [...prev, created]);
            await handleSelectClient(created.id);
          }}
          onRename={async (id, name) => {
            const updated = await clientsApi.rename(id, name);
            setClients((prev) => prev.map((c) => (c.id === id ? updated : c)));
          }}
          onDelete={async (id) => {
            await clientsApi.remove(id);
            setClients((prev) => prev.filter((c) => c.id !== id));
            if (selectedClientId === id) await handleSelectClient(null);
          }}
          getRecordCount={async (id) => (await clientsApi.recordCount(id)).count}
        />

        <EntityPicker
          label="Source System"
          placeholder="All source systems"
          entities={sourceSystems}
          selectedId={selectedSourceSystemId}
          disabled={selectedClientId == null}
          addLabel="Add Source System"
          addFieldLabel="Source system name"
          onSelect={setSelectedSourceSystemId}
          onAdd={async (name) => {
            if (selectedClientId == null) return;
            const created = await sourceSystemsApi.create(selectedClientId, name);
            setSourceSystems((prev) => [...prev, created]);
            setSelectedSourceSystemId(created.id);
          }}
          onRename={async (id, name) => {
            if (selectedClientId == null) return;
            const updated = await sourceSystemsApi.rename(selectedClientId, id, name);
            setSourceSystems((prev) => prev.map((s) => (s.id === id ? updated : s)));
          }}
          onDelete={async (id) => {
            if (selectedClientId == null) return;
            await sourceSystemsApi.remove(selectedClientId, id);
            setSourceSystems((prev) => prev.filter((s) => s.id !== id));
            if (selectedSourceSystemId === id) setSelectedSourceSystemId(null);
          }}
          getRecordCount={async (id) =>
            selectedClientId == null
              ? 0
              : (await sourceSystemsApi.recordCount(selectedClientId, id)).count
          }
        />
        </div>
        <Button
          className="mt-4"
          disabled={!canUpload}
          onClick={() => canUpload && onNavigateToUpload(selectedClientId!, selectedSourceSystemId!)}
        >
          Upload File
        </Button>
      </section>

      <section className="rounded-lg bg-white p-6 shadow-card">
        <h2 className="mb-4 text-lg font-semibold text-navy">
          Upload Log ({rows.length} file{rows.length === 1 ? "" : "s"})
        </h2>

        <div className="max-h-[560px] overflow-auto rounded-md border border-border">
          <table className="min-w-full divide-y divide-border text-sm">
            <thead className="sticky top-0 z-10 bg-bg-subtle">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-navy">
                  Client Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-navy">
                  Source System
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-navy">
                  File Original Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-navy">
                  Date Range
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-center font-semibold text-navy">
                  Number of Records
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.batchId}>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => onNavigateToUpload(row.clientId, row.sourceSystemId)}
                      className="font-medium text-primary hover:text-primary-dark hover:underline"
                    >
                      {row.clientName}
                    </button>
                  </td>
                  <td className="px-4 py-2">{row.sourceSystemName}</td>
                  <td className="px-4 py-2">{row.fileName ?? "—"}</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {row.dateRangeMin && row.dateRangeMax
                      ? row.dateRangeMin === row.dateRangeMax
                        ? row.dateRangeMin
                        : `${row.dateRangeMin} – ${row.dateRangeMax}`
                      : "—"}
                  </td>
                  <td className="px-4 py-2 text-center">{row.recordCount.toLocaleString()}</td>
                </tr>
              ))}
              {!isLoading && rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-charcoal/60">
                    No files uploaded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
