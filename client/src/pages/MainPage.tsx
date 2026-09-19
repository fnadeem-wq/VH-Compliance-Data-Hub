import { useEffect, useReducer, useRef, useState, useMemo } from "react";
import * as XLSX from "xlsx";
import { clientsApi } from "../api/clients";
import { sourceSystemsApi } from "../api/sourceSystems";
import { mappingApi } from "../api/mapping";
import { recordsApi } from "../api/records";
import { uploadLogApi, type UploadLogRow } from "../api/uploadLog";
import { Button } from "../components/ui/Button";
import { AuditLogTable } from "../components/AuditLogTable";
import { ColumnMappingTable } from "../components/ColumnMappingTable";
import { EntityPicker } from "../components/EntityPicker";
import { DataPreviewStep } from "../components/DataPreviewStep";
import { FileUpload } from "../components/FileUpload";
import { MappingChoiceModal } from "../components/MappingChoiceModal";
import { SheetPickerModal } from "../components/SheetPickerModal";
import { StandardizedResultsTable } from "../components/StandardizedResultsTable";
import { exportCsv } from "../lib/exportCsv";
import { exportExcel } from "../lib/exportExcel";
import { buildStandardizedTable } from "../lib/buildStandardizedTable";
import { parseRawCsvRows, buildRawFileDataFromRows as buildRawFileDataFromCsvRows } from "../lib/parseCsv";
import { parseWorkbookSheet, parseWorkbookSheetRawRows, readWorkbookSheetNames, buildRawFileDataFromRows as buildRawFileDataFromExcelRows } from "../lib/parseExcel";
import { appReducer, initialState } from "../state/appReducer";
import type { MappingEntry, StoredRecord } from "../state/types";

interface MainPageProps {
  clientId: number;
  editSourceSystemId?: number | null;
}

export function MainPage({ clientId, editSourceSystemId }: MainPageProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const workbookRef = useRef<XLSX.WorkBook | null>(null);
  const [clientWideRecords, setClientWideRecords] = useState<StoredRecord[] | null>(null);
  const [isLoadingClientWide, setIsLoadingClientWide] = useState(false);
  const [isPickingSourceSystem, setIsPickingSourceSystem] = useState(false);
  const [auditLogs, setAuditLogs] = useState<UploadLogRow[]>([]);
  const [isLoadingAuditLogs, setIsLoadingAuditLogs] = useState(false);
  const [selectedBatchIds, setSelectedBatchIds] = useState<number[]>([]);

  const selectedClient = state.clients.find((c) => c.id === state.selectedClientId) ?? null;
  const selectedSourceSystem =
    state.sourceSystems.find((s) => s.id === state.selectedSourceSystemId) ?? null;

  useEffect(() => {
    if (state.selectedClientId == null || state.selectedSourceSystemId != null) {
      setClientWideRecords(null);
      return;
    }
    const loadClientRecords = state.selectedClientId;
    setIsLoadingClientWide(true);
    clientsApi
      .records(loadClientRecords)
      .then((res) => setClientWideRecords(res.records))
      .finally(() => setIsLoadingClientWide(false));
  }, [state.selectedClientId, state.selectedSourceSystemId]);

  // Load audit logs for the client
  useEffect(() => {
    if (state.selectedClientId == null || state.selectedSourceSystemId != null) {
      setAuditLogs([]);
      setSelectedBatchIds([]);
      return;
    }
    setIsLoadingAuditLogs(true);
    uploadLogApi
      .list()
      .then((res) => {
        const clientLogs = res.rows.filter((r) => r.clientId === state.selectedClientId);
        setAuditLogs(clientLogs);
        // Pre-select all batches by default
        setSelectedBatchIds(clientLogs.map((r) => r.batchId));
      })
      .finally(() => setIsLoadingAuditLogs(false));
  }, [state.selectedClientId, state.selectedSourceSystemId]);

  // Filter records based on selected batches
  const filteredRecords = useMemo(() => {
    if (!clientWideRecords) return null;
    if (selectedBatchIds.length === 0) return [];
    return clientWideRecords.filter((r) =>
      selectedBatchIds.includes(
        auditLogs.find((a) => a.fileName === r.fileName)?.batchId ?? -1
      )
    );
  }, [clientWideRecords, selectedBatchIds, auditLogs]);

  useEffect(() => {
    (async () => {
      const clients = await clientsApi.list();
      dispatch({ type: "SET_CLIENTS", clients });

      dispatch({ type: "SELECT_CLIENT", clientId });
      const sourceSystems = await sourceSystemsApi.list(clientId);
      dispatch({ type: "SET_SOURCE_SYSTEMS", sourceSystems });
    })();
  }, [clientId]);

  useEffect(() => {
    if (!editSourceSystemId) return;
    (async () => {
      const [savedMapping, recordsRes] = await Promise.all([
        mappingApi.get(clientId, editSourceSystemId),
        recordsApi.list(clientId, editSourceSystemId),
      ]);
      dispatch({
        type: "SELECT_SOURCE_SYSTEM_FOR_EDITING",
        sourceSystemId: editSourceSystemId,
        savedMapping,
        history: recordsRes.records,
      });
    })();
  }, [clientId, editSourceSystemId]);

  async function handleSelectSourceSystem(sourceSystemId: number | null) {
    if (sourceSystemId == null) {
      dispatch({
        type: "SELECT_SOURCE_SYSTEM",
        sourceSystemId: null,
        savedMapping: null,
        history: [],
      });
      setIsPickingSourceSystem(false);
      return;
    }

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
    setIsPickingSourceSystem(false);
  }

  async function handleFileSelected(file: File) {
    dispatch({ type: "FILE_SELECTED", file });
    const extension = file.name.split(".").pop()?.toLowerCase();

    if (extension === "csv") {
      const rawParsedRows = await parseRawCsvRows(file);
      dispatch({ type: "RAW_PARSED_ROWS_READY", rawParsedRows });
      return;
    }

    const { workbook, sheetNames } = await readWorkbookSheetNames(file);
    workbookRef.current = workbook;
    if (sheetNames.length > 1) {
      dispatch({ type: "SHEET_NAMES_READY", sheetNames });
    } else {
      const rawParsedRows = parseWorkbookSheetRawRows(workbook, sheetNames[0]);
      dispatch({ type: "RAW_PARSED_ROWS_READY", rawParsedRows });
    }
  }

  function handleSheetChosen(sheetName: string) {
    if (!workbookRef.current) return;
    const rawParsedRows = parseWorkbookSheetRawRows(workbookRef.current, sheetName);
    dispatch({ type: "RAW_PARSED_ROWS_READY", rawParsedRows });
  }

  function handleSelectStartingRow(startingRowIndex: number) {
    if (!state.rawParsedRows) return;
    const rawFileData = buildRawFileDataFromExcelRows(state.rawParsedRows, startingRowIndex);
    dispatch({ type: "SELECT_STARTING_ROW", startingRowIndex, rawFileData });
  }

  async function handleMappingConfirmed(mapping: MappingEntry[]) {
    if (state.selectedSourceSystemId == null) return;
    const saveResult = await mappingApi.save(
      clientId,
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
    if (!state.rawFileData || state.selectedSourceSystemId == null) {
      return;
    }

    dispatch({ type: "SET_LOADING", isLoading: true });
    const standardizedRows = buildStandardizedTable(state.rawFileData, state.draftMapping);

    recordsApi
      .append(
        clientId,
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
  }, [state.step, clientId]);

  const fileNamePrefix = `${selectedClient?.name ?? "client"}_${
    selectedSourceSystem?.name ?? "source"
  }_standardized`.replace(/\s+/g, "_");

  return (
    <div className="min-h-[calc(100vh-200px)]">
      <div className="mx-auto max-w-[1400px] px-6 py-6 space-y-6">
        {/* Client Name Heading */}
        <h1 className="text-3xl font-bold text-primary">
          {selectedClient?.name ?? "Loading…"}
        </h1>

        {/* Error Message */}
        {state.error && (
          <div className="rounded-lg border-l-4 border-error bg-error/10 px-6 py-4 text-sm text-error">
            <p className="font-semibold mb-1">Error</p>
            <p>{state.error}</p>
          </div>
        )}

        {/* Client-wide Records View */}
        {state.selectedSourceSystemId == null && (
          <section className="space-y-8">
            {/* Audit Log Section */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Complete Audit Log</h3>
              <AuditLogTable
                clientId={clientId}
                rows={auditLogs}
                isLoading={isLoadingAuditLogs}
                onSelectedBatchesChange={setSelectedBatchIds}
                onEditMapping={(clientId, sourceSystemId) => {
                  // Navigate to edit mapping for source system
                }}
              />
            </div>

            {/* Analytics Section */}
            <div className="rounded-lg bg-white p-6 shadow-card">
              {isLoadingClientWide && (
                <div className="flex items-center justify-center py-12">
                  <p className="text-charcoal/70">Loading all records for this client…</p>
                </div>
              )}
              {!isLoadingClientWide && filteredRecords && filteredRecords.length === 0 && (
                <div className="rounded-lg bg-bg-subtle p-8 text-center">
                  <p className="text-charcoal/70 mb-4">
                    No records uploaded yet for this client, across any source system.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setIsPickingSourceSystem(true)}
                  >
                    Upload a new file +
                  </Button>
                </div>
              )}
              {!isLoadingClientWide && filteredRecords && filteredRecords.length > 0 && (
                <div className="space-y-4">
                  <StandardizedResultsTable
                    records={filteredRecords}
                    onDownloadCsv={(rows) =>
                      exportCsv(rows, `${selectedClient?.name ?? "client"}_all_sources_standardized`)
                    }
                    onDownloadExcel={(rows) =>
                      exportExcel(rows, `${selectedClient?.name ?? "client"}_all_sources_standardized`)
                    }
                  />
                  <Button
                    variant="secondary"
                    onClick={() => setIsPickingSourceSystem(true)}
                  >
                    Upload a new file +
                  </Button>
                </div>
              )}
            </div>

            {/* Inline Source System Picker */}
            {isPickingSourceSystem && (
              <div className="mt-6 rounded-lg border-2 border-primary p-6 bg-white">
                <EntityPicker
                  label="Source System"
                  placeholder="Select a source system…"
                  entities={state.sourceSystems}
                  selectedId={state.selectedSourceSystemId}
                  addLabel="Add Source System"
                  addFieldLabel="Source system name"
                  onSelect={handleSelectSourceSystem}
                  onAdd={async (name) => {
                    const created = await sourceSystemsApi.create(clientId, name);
                    dispatch({
                      type: "SET_SOURCE_SYSTEMS",
                      sourceSystems: [...state.sourceSystems, created],
                    });
                    await handleSelectSourceSystem(created.id);
                  }}
                  onRename={async (id, name) => {
                    const updated = await sourceSystemsApi.rename(clientId, id, name);
                    dispatch({
                      type: "SET_SOURCE_SYSTEMS",
                      sourceSystems: state.sourceSystems.map((s) => (s.id === id ? updated : s)),
                    });
                  }}
                  onDelete={async (id) => {
                    await sourceSystemsApi.remove(clientId, id);
                    dispatch({
                      type: "SET_SOURCE_SYSTEMS",
                      sourceSystems: state.sourceSystems.filter((s) => s.id !== id),
                    });
                    if (state.selectedSourceSystemId === id) await handleSelectSourceSystem(null);
                  }}
                  getRecordCount={async (id) =>
                    (await sourceSystemsApi.recordCount(clientId, id)).count
                  }
                />
              </div>
            )}
          </section>
        )}

        {/* Upload Workflow Sections */}
        {state.selectedSourceSystemId != null && (
          <section className="space-y-6">
            <div>
              <button
                onClick={() => handleSelectSourceSystem(null)}
                className="text-primary hover:text-primary-dark hover:underline text-sm font-medium mb-4"
              >
                ‹ Back to {selectedClient?.name} overview
              </button>
            </div>

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

            {state.step === "DATA_PREVIEW" && state.rawParsedRows && (
              <DataPreviewStep
                rawParsedRows={state.rawParsedRows}
                onSelectStartingRow={handleSelectStartingRow}
                isLoading={state.isLoading}
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
              <div className="space-y-4">
                <StandardizedResultsTable
                  records={state.history}
                  onDownloadCsv={(rows) => exportCsv(rows, fileNamePrefix)}
                  onDownloadExcel={(rows) => exportExcel(rows, fileNamePrefix)}
                  onEditMapping={() => dispatch({ type: "EDIT_MAPPING" })}
                />
                <Button
                  variant="secondary"
                  onClick={() => dispatch({ type: "UPLOAD_NEW_FILE" })}
                >
                  Upload another file +
                </Button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
