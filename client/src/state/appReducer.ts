import type {
  AppState,
  Entity,
  MappingEntry,
  RawFileData,
  SavedMapping,
  StoredRecord,
} from "./types";

export const initialState: AppState = {
  clients: [],
  sourceSystems: [],
  selectedClientId: null,
  selectedSourceSystemId: null,
  savedMapping: null,
  history: [],
  step: "AWAITING_UPLOAD",
  pendingFile: null,
  workbookSheetNames: null,
  rawFileData: null,
  rawParsedRows: null,
  startingRowIndex: 0,
  draftMapping: [],
  isLoading: false,
  error: null,
};

export type Action =
  | { type: "SET_CLIENTS"; clients: Entity[] }
  | { type: "SET_SOURCE_SYSTEMS"; sourceSystems: Entity[] }
  | { type: "SELECT_CLIENT"; clientId: number | null }
  | {
      type: "SELECT_SOURCE_SYSTEM";
      sourceSystemId: number | null;
      savedMapping: SavedMapping | null;
      history: StoredRecord[];
    }
  | { type: "SET_LOADING"; isLoading: boolean }
  | { type: "SET_ERROR"; error: string | null }
  | { type: "FILE_SELECTED"; file: File }
  | { type: "SHEET_NAMES_READY"; sheetNames: string[] }
  | { type: "RAW_PARSED_ROWS_READY"; rawParsedRows: string[][] }
  | { type: "RAW_DATA_READY"; rawFileData: RawFileData }
  | { type: "SELECT_STARTING_ROW"; startingRowIndex: number; rawFileData: RawFileData }
  | { type: "CHOOSE_USE_SAVED_MAPPING" }
  | { type: "CHOOSE_CREATE_NEW_MAPPING" }
  | { type: "EDIT_MAPPING" }
  | { type: "MAPPING_CONFIRMED"; mapping: MappingEntry[]; savedMapping: SavedMapping }
  | { type: "APPEND_SUCCESS"; history: StoredRecord[] }
  | { type: "UPLOAD_NEW_FILE" }
  | { type: "RESET_UPLOAD" };

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_CLIENTS":
      return { ...state, clients: action.clients };

    case "SET_SOURCE_SYSTEMS":
      return { ...state, sourceSystems: action.sourceSystems };

    case "SELECT_CLIENT":
      return {
        ...state,
        selectedClientId: action.clientId,
        selectedSourceSystemId: null,
        sourceSystems: [],
        savedMapping: null,
        history: [],
        step: "AWAITING_UPLOAD",
        pendingFile: null,
        workbookSheetNames: null,
        rawFileData: null,
        rawParsedRows: null,
        startingRowIndex: 0,
        draftMapping: [],
        error: null,
      };

    case "SELECT_SOURCE_SYSTEM":
      return {
        ...state,
        selectedSourceSystemId: action.sourceSystemId,
        savedMapping: action.savedMapping,
        history: action.history,
        step: action.history.length > 0 ? "RESULTS" : "AWAITING_UPLOAD",
        pendingFile: null,
        workbookSheetNames: null,
        rawFileData: null,
        rawParsedRows: null,
        startingRowIndex: 0,
        draftMapping: [],
        error: null,
      };

    case "SET_LOADING":
      return { ...state, isLoading: action.isLoading };

    case "SET_ERROR":
      return { ...state, error: action.error, isLoading: false };

    case "FILE_SELECTED":
      return {
        ...state,
        pendingFile: action.file,
        workbookSheetNames: null,
        rawFileData: null,
        error: null,
      };

    case "SHEET_NAMES_READY":
      return { ...state, workbookSheetNames: action.sheetNames, step: "SHEET_PICKER" };

    case "RAW_PARSED_ROWS_READY":
      return {
        ...state,
        rawParsedRows: action.rawParsedRows,
        startingRowIndex: 0,
        step: "DATA_PREVIEW",
      };

    case "SELECT_STARTING_ROW":
      return {
        ...state,
        startingRowIndex: action.startingRowIndex,
        rawFileData: action.rawFileData,
        step: state.savedMapping && state.savedMapping.mappings.length > 0 ? "MAPPING_CHOICE" : "MAPPING",
      };

    case "RAW_DATA_READY":
      return {
        ...state,
        rawFileData: action.rawFileData,
        step: state.savedMapping && state.savedMapping.mappings.length > 0 ? "MAPPING_CHOICE" : "MAPPING",
      };

    case "CHOOSE_USE_SAVED_MAPPING":
      return {
        ...state,
        draftMapping: state.savedMapping?.mappings ?? [],
        step: "APPENDING",
      };

    case "CHOOSE_CREATE_NEW_MAPPING":
      return { ...state, draftMapping: [], step: "MAPPING" };

    case "EDIT_MAPPING":
      return {
        ...state,
        draftMapping: state.savedMapping?.mappings ?? [],
        step: "MAPPING",
        pendingFile: null,
        rawFileData: null,
      };

    case "MAPPING_CONFIRMED":
      return {
        ...state,
        draftMapping: action.mapping,
        savedMapping: action.savedMapping,
        step: "APPENDING",
      };

    case "APPEND_SUCCESS":
      return {
        ...state,
        history: action.history,
        step: "RESULTS",
        pendingFile: null,
        workbookSheetNames: null,
        rawFileData: null,
        rawParsedRows: null,
        startingRowIndex: 0,
        isLoading: false,
      };

    case "UPLOAD_NEW_FILE":
      return {
        ...state,
        step: "AWAITING_UPLOAD",
        pendingFile: null,
        workbookSheetNames: null,
        rawFileData: null,
        rawParsedRows: null,
        startingRowIndex: 0,
        draftMapping: [],
      };

    case "RESET_UPLOAD":
      return {
        ...state,
        pendingFile: null,
        workbookSheetNames: null,
        rawFileData: null,
        rawParsedRows: null,
        startingRowIndex: 0,
        step: "AWAITING_UPLOAD",
      };

    default:
      return state;
  }
}
