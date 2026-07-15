import { useEffect, useReducer, useRef, useState } from "react";
import * as XLSX from "xlsx";
import { clientsApi } from "../api/clients";
import { sourceSystemsApi } from "../api/sourceSystems";
import { mappingApi } from "../api/mapping";
import { recordsApi } from "../api/records";
import { Button } from "../components/ui/Button";
import { ColumnMappingTable } from "../components/ColumnMappingTable";
import { EntityPicker } from "../components/EntityPicker";
import { FileUpload } from "../components/FileUpload";
import { MappingChoiceModal } from "../components/MappingChoiceModal";
import { SheetPickerModal } from "../components/SheetPickerModal";
import { StandardizedResultsTable } from "../components/StandardizedResultsTable";
import { exportCsv } from "../lib/exportCsv";
import { exportExcel } from "../lib/exportExcel";
import { buildStandardizedTable } from "../lib/buildStandardizedTable";
import { parseCsv } from "../lib/parseCsv";
import { parseWorkbookSheet, readWorkbookSheetNames } from "../lib/parseExcel";
import { appReducer, initialState } from "../state/appReducer";
import type { MappingEntry, StoredRecord } from "../state/types";

interface MainPageProps {
  /** When set (e.g. arriving from the Home Screen's "Upload File" button), this
   * exact Client + Source System pair is selected automatically instead of
   * requiring the user to re-pick it. */
  initialSelection?: { clientId: number; sourceSystemId: number };
}

export function MainPage({ initialSelection }: MainPageProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const workbookRef = useRef<XLSX.WorkBook | null>(null);
  const [clientWideRecords, setClientWideRecords] = useState<StoredRecord[] | null>(null);
  const [isLoadingClientWide, setIsLoadingClientWide] = useState(false);

  const selectedClient = state.clients.find((c) => c.id === state.selectedClientId) ?? null;
  const selectedSourceSystem =
    state.sourceSystems.find((s) => s.id === state.selectedSourceSystemId) ?? null;

  // When a Client is selected but no specific Source System is chosen, show a
  // read-only view combining every record across all of that client's source
  // systems, appended together -- there's no single pair to upload into here.
  useEffect(() => {
    if (state.selectedClientId == null || state.selectedSourceSystemId != null) {
      setClientWideRecords(null);
      return;
    }
    const clientId = state.selectedClientId;
    setIsLoadingClientWide(true);
    clientsApi
      .records(clientId)
      .then((res) => setClientWideRecords(res.records))
      .finally(() => setIsLoadingClientWide(false));
  }, [state.selectedClientId, state.selectedSourceSystemId]);

  useEffect(() => {
    (async () => {
      const clients = await clientsApi.list();
      dispatch({ type: "SET_CLIENTS", clients });

      if (!initialSelection) return;
      const { clientId, sourceSystemId } = initialSelection;

      dispatch({ type: "SELECT_CLIENT", clientId });
      const sourceSystems = await sourceSystemsApi.list(clientId);
      dispatch({ type: "SET_SOURCE_SYSTEMS", sourceSystems });

      const [savedMapping, recordsRes] = await Promise.all([
        mappingApi.get(clientId, sourceSystemId),
        recordsApi.list(clientId, sourceSystemId),
      ]);
      dispatch({
        type: "SELECT_SOURCE_SYSTEM",
        sourceSystemId,
        savedMapping,
        history: recordsRes.records,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSelectClient(clientId: number | null) {
    dispatch({ type: "SELECT_CLIENT", clientId });
    if (clientId == null) return;
    const sourceSystems = await sourceSystemsApi.list(clientId);
    dispatch({ type: "SET_SOURCE_SYSTEMS", sourceSystems });
  }

  async function handleSelectSourceSystem(sourceSystemId: number | null) {
    if (sourceSystemId == null || state.selectedClientId == null) {
      dispatch({
        type: "SELECT_SOURCE_SYSTEM",
        sourceSystemId: null,
        savedMapping: null,
        history: [],
      });
      return;
    }
    const clientId = state.selectedClientId;
    const [savedMapping, recordsRes] = await Promise.all([
      mappingApi.get(clientId, sourceSystemId),
      recordsApi.list(clientId, sourceSystemId),
    ]);
    dispatch({
      type: "SELECT_SOURCE_SYSTEM",
      sourceSystemId,
      savedMapping,
      history: recordsRes.records,
    });
  }

  async function handleFileSelected(file: File) {
    dispatch({ type: "FILE_SELECTED", file });
    const extension = file.name.split(".").pop()?.toLowerCase();

    if (extension === "csv") {
      const rawFileData = await parseCsv(file);
      dispatch({ type: "RAW_DATA_READY", rawFileData });
      return;
    }

    const { workbook, sheetNames } = await readWorkbookSheetNames(file);
    workbookRef.current = workbook;
    if (sheetNames.length > 1) {
      dispatch({ type: "SHEET_NAMES_READY", sheetNames });
    } else {
      const rawFileData = parseWorkbookSheet(workbook, sheetNames[0]);
      dispatch({ type: "RAW_DATA_READY", rawFileData });
    }
  }

  function handleSheetChosen(sheetName: string) {
    if (!workbookRef.current) return;
    const rawFileData = parseWorkbookSheet(workbookRef.current, sheetName);
    dispatch({ type: "RAW_DATA_READY", rawFileData });
  }

  async function handleMappingConfirmed(mapping: MappingEntry[]) {
    if (state.selectedClientId == null || state.selectedSourceSystemId == null) return;
    const saveResult = await mappingApi.save(
      state.selectedClientId,
      state.selectedSourceSystemId,
      mapping
    );
    dispatch({
      type: "MAPPING_CONFIRMED",
      mapping,
      savedMapping: { mappings: saveResult.mappings, updatedAt: new Date().toISOString() },
    });
  }

  useEffect(() => {
    if (state.step !== "APPENDING") return;
    if (
      !state.rawFileData ||
      state.selectedClientId == null ||
      state.selectedSourceSystemId == null
    ) {
      return;
    }

    dispatch({ type: "SET_LOADING", isLoading: true });
    const standardizedRows = buildStandardizedTable(state.rawFileData, state.draftMapping);

    recordsApi
      .append(
        state.selectedClientId,
        state.selectedSourceSystemId,
        standardizedRows,
        state.pendingFile?.name
      )
      .then((res) => {
        dispatch({ type: "APPEND_SUCCESS", history: [...state.history, ...res.records] });
      })
      .catch((err) => {
        dispatch({
          type: "SET_ERROR",
          error: err instanceof Error ? err.message : "Failed to save records",
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.step]);

  const fileNamePrefix = `${selectedClient?.name ?? "client"}_${
    selectedSourceSystem?.name ?? "source"
  }_standardized`.replace(/\s+/g, "_");

  return (
    <div className="min-h-[calc(100vh-200px)]">
      <div className="mx-auto max-w-[1400px] px-6 py-6 space-y-6">
        {/* Selection Header */}
        <section className="rounded-lg bg-white p-6 shadow-card border-l-4 border-primary">
          <h2 className="mb-6 text-2xl font-bold text-primary">Data Upload & Mapping</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <EntityPicker
              label="Client"
              placeholder="Select a client…"
              entities={state.clients}
              selectedId={state.selectedClientId}
              addLabel="Add Client"
              addFieldLabel="Client name"
              onSelect={handleSelectClient}
              onAdd={async (name) => {
                const created = await clientsApi.create(name);
                dispatch({ type: "SET_CLIENTS", clients: [...state.clients, created] });
                await handleSelectClient(created.id);
              }}
              onRename={async (id, name) => {
                const updated = await clientsApi.rename(id, name);
                dispatch({
                  type: "SET_CLIENTS",
                  clients: state.clients.map((c) => (c.id === id ? updated : c)),
                });
              }}
              onDelete={async (id) => {
                await clientsApi.remove(id);
                dispatch({ type: "SET_CLIENTS", clients: state.clients.filter((c) => c.id !== id) });
                if (state.selectedClientId === id) await handleSelectClient(null);
              }}
              getRecordCount={async (id) => (await clientsApi.recordCount(id)).count}
            />

            <EntityPicker
              label="Source System"
              placeholder="Select a source system…"
              entities={state.sourceSystems}
              selectedId={state.selectedSourceSystemId}
              disabled={state.selectedClientId == null}
              addLabel="Add Source System"
              addFieldLabel="Source system name"
              onSelect={handleSelectSourceSystem}
              onAdd={async (name) => {
                if (state.selectedClientId == null) return;
                const created = await sourceSystemsApi.create(state.selectedClientId, name);
                dispatch({
                  type: "SET_SOURCE_SYSTEMS",
                  sourceSystems: [...state.sourceSystems, created],
                });
                await handleSelectSourceSystem(created.id);
              }}
              onRename={async (id, name) => {
                if (state.selectedClientId == null) return;
                const updated = await sourceSystemsApi.rename(state.selectedClientId, id, name);
                dispatch({
                  type: "SET_SOURCE_SYSTEMS",
                  sourceSystems: state.sourceSystems.map((s) => (s.id === id ? updated : s)),
                });
              }}
              onDelete={async (id) => {
                if (state.selectedClientId == null) return;
                await sourceSystemsApi.remove(state.selectedClientId, id);
                dispatch({
                  type: "SET_SOURCE_SYSTEMS",
                  sourceSystems: state.sourceSystems.filter((s) => s.id !== id),
                });
                if (state.selectedSourceSystemId === id) await handleSelectSourceSystem(null);
              }}
              getRecordCount={async (id) =>
                state.selectedClientId == null
                  ? 0
                  : (await sourceSystemsApi.recordCount(state.selectedClientId, id)).count
              }
            />
          </div>
          <Button
            variant="secondary"
            className="mt-6"
            disabled={state.selectedSourceSystemId == null}
            onClick={() => dispatch({ type: "UPLOAD_NEW_FILE" })}
          >
            Upload New File
          </Button>
        </section>

        {/* Error Message */}
        {state.error && (
          <div className="rounded-lg border-l-4 border-error bg-error/10 px-6 py-4 text-sm text-error">
            <p className="font-semibold mb-1">Error</p>
            <p>{state.error}</p>
          </div>
        )}

        {/* Client-wide Records View */}
        {state.selectedClientId != null && state.selectedSourceSystemId == null && (
          <section className="rounded-lg bg-white p-6 shadow-card">
            {isLoadingClientWide && (
              <div className="flex items-center justify-center py-12">
                <p className="text-charcoal/70">Loading all records for this client…</p>
              </div>
            )}
            {!isLoadingClientWide && clientWideRecords && clientWideRecords.length === 0 && (
              <div className="rounded-lg bg-bg-subtle p-8 text-center">
                <p className="text-charcoal/70">
                  No records uploaded yet for this client, across any source system.
                </p>
              </div>
            )}
            {!isLoadingClientWide && clientWideRecords && clientWideRecords.length > 0 && (
              <StandardizedResultsTable
                records={clientWideRecords}
                onDownloadCsv={(rows) =>
                  exportCsv(rows, `${selectedClient?.name ?? "client"}_all_sources_standardized`)
                }
                onDownloadExcel={(rows) =>
                  exportExcel(rows, `${selectedClient?.name ?? "client"}_all_sources_standardized`)
                }
              />
            )}
          </section>
        )}

        {/* Upload Workflow Sections */}
        {state.selectedSourceSystemId != null && (
          <section className="space-y-6">
            {(state.step === "AWAITING_UPLOAD" || state.step === "SHEET_PICKER") && (
              <FileUpload onFileSelected={handleFileSelected} />
            )}

            {state.step === "SHEET_PICKER" && state.workbookSheetNames && (
              <SheetPickerModal
                sheetNames={state.workbookSheetNames}
                onChoose={handleSheetChosen}
                onClose={() => dispatch({ type: "RESET_UPLOAD" })}
              />
            )}

            {state.step === "MAPPING_CHOICE" && selectedClient && selectedSourceSystem && (
              <MappingChoiceModal
                clientName={selectedClient.name}
                sourceSystemName={selectedSourceSystem.name}
                updatedAt={state.savedMapping?.updatedAt ?? null}
                onUseSaved={() => {
                  if (state.rawFileData && state.savedMapping) {
                    const savedColumnNames = new Set(
                      state.savedMapping.mappings.map((m) => m.rawColumnName).filter((name) => name)
                    );
                    const currentHeaders = new Set(state.rawFileData.headers);

                    const allColumnsMatch = [...savedColumnNames].every((col) =>
                      currentHeaders.has(col)
                    );

                    if (!allColumnsMatch) {
                      dispatch({
                        type: "SET_ERROR",
                        error:
                          "Schema is different from the previous file. The columns do not match. Please create a new mapping.",
                      });
                      return;
                    }
                  }
                  dispatch({ type: "CHOOSE_USE_SAVED_MAPPING" });
                }}
                onCreateNew={() => dispatch({ type: "CHOOSE_CREATE_NEW_MAPPING" })}
                onCancel={() => dispatch({ type: "RESET_UPLOAD" })}
              />
            )}

            {state.step === "MAPPING" && state.rawFileData && (
              <ColumnMappingTable
                headers={state.rawFileData.headers}
                initialMapping={state.draftMapping}
                onConfirm={handleMappingConfirmed}
                onCancel={() => dispatch({ type: "RESET_UPLOAD" })}
              />
            )}

            {state.step === "APPENDING" && (
              <div className="rounded-lg bg-white p-12 text-center shadow-card">
                <div className="inline-block">
                  <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                </div>
                <p className="text-sm text-charcoal font-medium">Saving standardized records…</p>
              </div>
            )}

            {state.step === "RESULTS" && (
              <StandardizedResultsTable
                records={state.history}
                onDownloadCsv={(rows) => exportCsv(rows, fileNamePrefix)}
                onDownloadExcel={(rows) => exportExcel(rows, fileNamePrefix)}
                onEditMapping={() => dispatch({ type: "EDIT_MAPPING" })}
              />
            )}
          </section>
        )}
      </div>
    </div>
  );
}
