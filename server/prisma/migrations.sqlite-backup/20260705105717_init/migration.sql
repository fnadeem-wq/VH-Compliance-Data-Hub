-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "SourceSystem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SourceSystem_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ColumnMapping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sourceSystemId" INTEGER NOT NULL,
    "standardizedField" TEXT NOT NULL,
    "rawColumnName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ColumnMapping_sourceSystemId_fkey" FOREIGN KEY ("sourceSystemId") REFERENCES "SourceSystem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UploadBatch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sourceSystemId" INTEGER NOT NULL,
    "fileName" TEXT,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UploadBatch_sourceSystemId_fkey" FOREIGN KEY ("sourceSystemId") REFERENCES "SourceSystem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StandardizedRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uploadBatchId" INTEGER NOT NULL,
    "physicianName" TEXT,
    "physicianNpi" TEXT,
    "physicianDesignation" TEXT,
    "transferOfValue" TEXT,
    "amount" REAL,
    "date" TEXT,
    CONSTRAINT "StandardizedRecord_uploadBatchId_fkey" FOREIGN KEY ("uploadBatchId") REFERENCES "UploadBatch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SourceSystem_clientId_name_key" ON "SourceSystem"("clientId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "ColumnMapping_sourceSystemId_standardizedField_rawColumnName_key" ON "ColumnMapping"("sourceSystemId", "standardizedField", "rawColumnName");
