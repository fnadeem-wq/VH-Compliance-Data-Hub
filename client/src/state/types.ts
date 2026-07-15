import type { StandardizedField } from "../constants/standardizedFields";

export type { StandardizedField };

export interface Entity {
  id: number;
  name: string;
}

export interface RawFileData {
  headers: string[];
  rows: Record<string, string | number | null>[];
}

export interface MappingEntry {
  standardizedField: StandardizedField;
  rawColumnName: string;
  constantValue?: string | null;
}

export interface SavedMapping {
  mappings: MappingEntry[];
  updatedAt: string | null;
}

export interface StandardizedRow {
  physicianName: string | null;
  physicianNpi: string | null;
  physicianDesignation: string | null;
  transferOfValue: string | null;
  amount: number | null;
  date: string | null;
}

export interface StoredRecord extends StandardizedRow {
  id: number;
  uploadedAt: string;
  fileName: string | null;
  /** Only populated in the client-wide combined view (all source systems appended together). */
  sourceSystemName?: string;
}

export type AppStep =
  | "AWAITING_UPLOAD"
  | "SHEET_PICKER"
  | "MAPPING_CHOICE"
  | "MAPPING"
  | "APPENDING"
  | "RESULTS";

export interface AppState {
  clients: Entity[];
  sourceSystems: Entity[];
  selectedClientId: number | null;
  selectedSourceSystemId: number | null;
  savedMapping: SavedMapping | null;
  history: StoredRecord[];
  step: AppStep;
  pendingFile: File | null;
  workbookSheetNames: string[] | null;
  rawFileData: RawFileData | null;
  draftMapping: MappingEntry[];
  isLoading: boolean;
  error: string | null;
}
