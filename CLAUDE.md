# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**VH Compliance Data Hub** is a full-stack data standardization and upload system for Vector Health. It allows users to:
- Select client/source system contexts
- Upload CSV or Excel files
- Map raw data columns to standardized fields
- Store standardized healthcare records (physician names, NPIs, transfer of value, amounts, dates)

## Architecture

### Monorepo Structure
- **Root `package.json`**: Defines workspaces (`client/`, `server/`) and concurrent dev scripts
- **`client/`**: React 18 SPA with Vite, Tailwind CSS, TypeScript
- **`server/`**: Express.js backend with Prisma ORM, SQLite database

### Client Architecture
- **Pages**: `HomePage` (client/source-system selection) and `MainPage` (file upload workflow)
- **State**: `appReducer.ts` manages a complex workflow with states like `AWAITING_UPLOAD`, `SHEET_PICKER`, `MAPPING`, `APPENDING`, `RESULTS`
- **File Handling**: CSV parsed via PapaParse, Excel via XLSX library
- **API Integration**: HTTP client with interceptors in `src/api/http.ts`

### Server Architecture
- **Express Routes**:
  - `/api/clients` — CRUD for clients
  - `/api/clients/:clientId/source-systems` — source system management
  - `/api/clients/:clientId/source-systems/:id/mapping` — column mappings
  - `/api/clients/:clientId/source-systems/:id/records` — standardized records
  - `/api/upload-log` — file upload history
- **Database** (Prisma/SQLite):
  - `Client` → many `SourceSystem`
  - `SourceSystem` → many `ColumnMapping`, `UploadBatch`
  - `UploadBatch` → many `StandardizedRecord`
  - Cascading deletes ensure referential integrity

### Key Libraries
- **Client**: React, Vite, Tailwind CSS, PapaParse (CSV), XLSX (Excel)
- **Server**: Express, Prisma Client, Zod (validation), CORS
- **Dev**: TSX (dev server), TypeScript, Concurrently (parallel tasks)

## Common Commands

### Development
```bash
npm run dev                 # Start both client (http://localhost:5173) and server (http://localhost:4000)
npm run dev:server         # Server only (tsx watch)
npm run dev:client         # Client only (Vite dev server)
```

### Building
```bash
npm run build --workspace client    # Client: tsc -b && vite build → client/dist/
npm run build --workspace server    # Server: tsc -p tsconfig.json → server/dist/
npm run start --workspace server    # Run compiled server from server/dist/index.js
```

Verify builds in `client/dist/` and `server/dist/` exist before running the compiled server.

### Database
```bash
npm run prisma:migrate --workspace server    # Create/apply database migrations
npm run prisma:generate --workspace server   # Regenerate Prisma Client (after schema changes)
```

## Key Files & Their Purpose

- **`server/src/index.ts`**: Express app setup, route mounting, error handler
- **`server/prisma/schema.prisma`**: Data model definitions (Client, SourceSystem, ColumnMapping, UploadBatch, StandardizedRecord)
- **`client/src/App.tsx`**: Root component with navigation between home and upload views
- **`client/src/state/appReducer.ts`**: Workflow state machine for the multi-step upload process
- **`client/src/pages/MainPage.tsx`**: File upload, sheet selection, column mapping UI
- **`client/src/api/http.ts`**: HTTP client with base URL and error handling
- **`.env`** (server): `DATABASE_URL="file:./dev.db"`, `PORT=4000`
- **`.env`** (client): `VITE_API_BASE_URL=http://localhost:4000`

## Development Notes

### File Upload Workflow & State Machine
The client follows a state-driven workflow via `appReducer.ts`:
1. **AWAITING_UPLOAD** — User selects client and source system (HomePage) and uploads a file (MainPage)
2. **SHEET_PICKER** — User selects which sheet from multi-sheet Excel file
3. **MAPPING** — User maps raw data columns to standardized fields; can select from file columns or enter constant values
4. **APPENDING** — Server processes and standardizes the data
5. **RESULTS** — Display results with charts and export options

State transitions include recovery (e.g., re-selecting after error) and the reducer validates schema consistency when using saved mappings.

### Standardized Fields & Column Mapping
Core fields stored for each record:
- `physician_name` (Physician Name)
- `physician_npi` (Physician NPI)
- `physician_designation` (Physician Designation)
- `transfer_of_value` (renamed from "Transfer of Value" to **"Nature of Payment"**)
- `amount` (dollar value)
- `date` (flexible parsing)

**Mapping Features:**
- **Column Selection**: Map raw file columns to standardized fields
- **Constant Values** (recent improvement): For `amount` and `nature_of_payment`, users can enter a constant value instead of selecting a column:
  - **Nature of Payment**: Dropdown with predefined options (Food and Beverage, Travel and Lodging, Education, Honoraria, Consulting Fee)
  - **Amount**: Numeric input field
  - UI shows 50/50 split between constant-value input and column selector
- **Schema Validation** (recent improvement): When loading a saved mapping, the client validates that the current file's columns match the saved mapping's schema; mismatches show an error to prevent data misalignment

Client and server share field definitions via `standardizedFields.ts`.

### Database Location
SQLite database is at `server/prisma/dev.db` (created on first migration). Migrations live in `server/prisma/migrations/`.

### Error Handling
The server uses a two-tier error pattern:
- **HttpError**: Custom error class with status code, thrown to return client errors (4xx)
  - Example: `throw new HttpError(400, "Invalid mapping")`
- **Zod Validation**: Automatic request validation; `ZodError` is caught by errorHandler and returns 400 with field details
- **errorHandler Middleware**: Catches all errors, distinguishes between validation errors, HttpErrors, and unexpected errors; logs unexpected errors to console
- **asyncHandler**: Wraps async route handlers to catch rejections and pass to errorHandler

Example flow: route validates with Zod → throws HttpError → errorHandler catches → sends JSON response.

### Date Parsing
The `parseDateLoose()` utility in `server/src/lib/parseDate.ts` handles multiple date formats to standardize inconsistent user input:
- Slash or dash formats: `MM/DD/YYYY`, `MM-DD-YY` (with optional time suffix)
- ISO format: `YYYY-MM-DD`
- JavaScript fallback: any string parseable by `new Date()`
- Returns `null` for unparseable input; applies century logic for 2-digit years (≤69 → 20xx, >69 → 19xx)

Use `formatDateMMDDYYYY()` to convert back to `MM/DD/YYYY` for display/export.

### Environment Setup
Both client and server require `.env` files to run:

**Server** (`.env` in `server/`):
```
DATABASE_URL="file:./dev.db"
PORT=4000
```

**Client** (`.env` in `client/`):
```
VITE_API_BASE_URL=http://localhost:4000
```

Note: `.env` files are in `.gitignore`; create them locally on first setup.

## Testing

**Status**: No test suite is currently configured. This is a future addition — integration tests for the upload workflow and unit tests for date parsing and standardization logic would be valuable.

## Ports & URLs
- **Client**: http://localhost:5173 (Vite dev server, also used in `.env`)
- **Server**: http://localhost:4000 (Express, exposed in VITE_API_BASE_URL)
- **Health check**: `GET http://localhost:4000/api/health`

## Git Workflow

**Important**: As work is completed, commit changes to Git and push to GitHub regularly to maintain a complete backup and history of all work.

### Commit Guidelines
- Make commits after completing discrete tasks or features
- Use clear, descriptive commit messages in the format: `type: brief description`
  - Examples: `feat: Add column mapping UI`, `fix: Handle null dates in standardization`, `docs: Update API endpoint docs`
- Common prefixes: `feat` (new feature), `fix` (bug fix), `refactor` (code reorganization), `docs` (documentation), `test` (tests), `chore` (build/tooling)
- Keep messages concise (under 72 characters for subject line)

### Push to GitHub
- After each commit, push to GitHub: `git push origin master`
- This ensures the work is backed up and accessible from any location
- Makes it easy to revert changes if needed by returning to a previous commit

### Example Workflow
```bash
# 1. Make code changes
# 2. Test the changes locally
# 3. Stage and commit
git add <files>
git commit -m "feat: Add new column mapping functionality"

# 4. Push to GitHub
git push origin master

# 5. If you need to revert to a previous state, use:
git log                    # See commit history
git revert <commit-hash>   # Revert a specific commit
git reset --hard <commit-hash>  # Go back to a specific commit
```

**Status Preservation**: Regular commits and pushes ensure that:
- No work is lost due to local issues
- Complete history is available for review and debugging
- Easy rollback if changes introduce problems
- GitHub serves as the source of truth for project state
