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
    <div className="min-h-[calc(100vh-200px)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark px-6 py-20">
        <div className="mx-auto max-w-[1400px] text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            The Gold Standard in Data Standardization
          </h1>
          <p className="mb-8 text-lg text-primary-light max-w-2xl mx-auto">
            Transform raw healthcare data into standardized, compliant records. Upload, map, and standardize with confidence using our proven compliance data hub.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              className="bg-white text-primary hover:bg-primary-light font-semibold"
              onClick={() => {
                document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Upload
            </Button>
            <Button
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => {
                document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-bg-subtle px-6 py-16">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="mb-4 h-12 w-12 rounded-lg bg-accent-light flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Select Context
              </h3>
              <p className="text-charcoal/70">
                Choose your client and source system to establish the compliance context for your data standardization.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="mb-4 h-12 w-12 rounded-lg bg-accent-light flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Upload File
              </h3>
              <p className="text-charcoal/70">
                Upload CSV or Excel files containing your raw healthcare data. Our system intelligently detects and parses your file format.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="mb-4 h-12 w-12 rounded-lg bg-accent-light flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Map & Export
              </h3>
              <p className="text-charcoal/70">
                Map raw columns to standardized fields, define constants, and export compliant records ready for downstream systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload-section" className="px-6 py-16">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-8 text-2xl font-bold text-primary">
            Upload Raw File
          </h2>
          <div className="rounded-lg bg-white p-8 shadow-card">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
              className="mt-6 bg-primary hover:bg-primary-dark text-white"
              disabled={!canUpload}
              onClick={() => canUpload && onNavigateToUpload(selectedClientId!, selectedSourceSystemId!)}
            >
              Upload File
            </Button>
          </div>
        </div>
      </section>

      {/* Upload Log Section */}
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
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((row) => (
                    <tr key={row.batchId} className="hover:bg-bg-subtle transition-colors">
                      <td className="px-6 py-3">
                        <button
                          onClick={() => onNavigateToUpload(row.clientId, row.sourceSystemId)}
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
                    </tr>
                  ))}
                  {!isLoading && rows.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-charcoal/60">
                        No files uploaded yet. Start by uploading your first file above.
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
