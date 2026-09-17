import { PrismaClient as SqlitePrismaClient } from "../src/generated/sqlite-legacy-client";
import { PrismaClient as SqlServerPrismaClient } from "@prisma/client";

const sqliteClient = new SqlitePrismaClient();
const sqlServerClient = new SqlServerPrismaClient();

interface MigrationStats {
  table: string;
  sqliteRows: number;
  sqlServerRows: number;
  status: "✓" | "✗";
}

const stats: MigrationStats[] = [];

async function migrateClients() {
  console.log("\n📋 Migrating Clients...");
  const clients = await sqliteClient.client.findMany();
  console.log(`  Found ${clients.length} clients in SQLite`);

  if (clients.length > 0) {
    await sqlServerClient.$executeRawUnsafe(`SET IDENTITY_INSERT [Client] ON`);
    await sqlServerClient.client.createMany({
      data: clients.map((c) => ({
        id: c.id,
        name: c.name,
        createdAt: c.createdAt,
      })),
    });
    await sqlServerClient.$executeRawUnsafe(`SET IDENTITY_INSERT [Client] OFF`);
  }

  const sqlServerCount = await sqlServerClient.client.count();
  stats.push({
    table: "Client",
    sqliteRows: clients.length,
    sqlServerRows: sqlServerCount,
    status: clients.length === sqlServerCount ? "✓" : "✗",
  });
  console.log(
    `  Migrated: ${sqlServerCount}/${clients.length}`,
    clients.length === sqlServerCount ? "✓" : "✗"
  );
}

async function migrateSourceSystems() {
  console.log("\n📋 Migrating SourceSystems...");
  const sourceSystems = await sqliteClient.sourceSystem.findMany();
  console.log(`  Found ${sourceSystems.length} source systems in SQLite`);

  if (sourceSystems.length > 0) {
    await sqlServerClient.$executeRawUnsafe(
      `SET IDENTITY_INSERT [SourceSystem] ON`
    );
    await sqlServerClient.sourceSystem.createMany({
      data: sourceSystems.map((s) => ({
        id: s.id,
        clientId: s.clientId,
        name: s.name,
        createdAt: s.createdAt,
      })),
    });
    await sqlServerClient.$executeRawUnsafe(
      `SET IDENTITY_INSERT [SourceSystem] OFF`
    );
  }

  const sqlServerCount = await sqlServerClient.sourceSystem.count();
  stats.push({
    table: "SourceSystem",
    sqliteRows: sourceSystems.length,
    sqlServerRows: sqlServerCount,
    status: sourceSystems.length === sqlServerCount ? "✓" : "✗",
  });
  console.log(
    `  Migrated: ${sqlServerCount}/${sourceSystems.length}`,
    sourceSystems.length === sqlServerCount ? "✓" : "✗"
  );
}

async function migrateColumnMappings() {
  console.log("\n📋 Migrating ColumnMappings...");
  const mappings = await sqliteClient.columnMapping.findMany();
  console.log(`  Found ${mappings.length} column mappings in SQLite`);

  if (mappings.length > 0) {
    await sqlServerClient.$executeRawUnsafe(
      `SET IDENTITY_INSERT [ColumnMapping] ON`
    );
    await sqlServerClient.columnMapping.createMany({
      data: mappings.map((m) => ({
        id: m.id,
        sourceSystemId: m.sourceSystemId,
        standardizedField: m.standardizedField,
        rawColumnName: m.rawColumnName,
        constantValue: m.constantValue,
        createdAt: m.createdAt,
        updatedAt: m.updatedAt,
      })),
    });
    await sqlServerClient.$executeRawUnsafe(
      `SET IDENTITY_INSERT [ColumnMapping] OFF`
    );
  }

  const sqlServerCount = await sqlServerClient.columnMapping.count();
  stats.push({
    table: "ColumnMapping",
    sqliteRows: mappings.length,
    sqlServerRows: sqlServerCount,
    status: mappings.length === sqlServerCount ? "✓" : "✗",
  });
  console.log(
    `  Migrated: ${sqlServerCount}/${mappings.length}`,
    mappings.length === sqlServerCount ? "✓" : "✗"
  );
}

async function migrateUploadBatches() {
  console.log("\n📋 Migrating UploadBatches...");
  const batches = await sqliteClient.uploadBatch.findMany();
  console.log(`  Found ${batches.length} upload batches in SQLite`);

  if (batches.length > 0) {
    await sqlServerClient.$executeRawUnsafe(
      `SET IDENTITY_INSERT [UploadBatch] ON`
    );
    await sqlServerClient.uploadBatch.createMany({
      data: batches.map((b) => ({
        id: b.id,
        sourceSystemId: b.sourceSystemId,
        fileName: b.fileName,
        uploadedAt: b.uploadedAt,
      })),
    });
    await sqlServerClient.$executeRawUnsafe(
      `SET IDENTITY_INSERT [UploadBatch] OFF`
    );
  }

  const sqlServerCount = await sqlServerClient.uploadBatch.count();
  stats.push({
    table: "UploadBatch",
    sqliteRows: batches.length,
    sqlServerRows: sqlServerCount,
    status: batches.length === sqlServerCount ? "✓" : "✗",
  });
  console.log(
    `  Migrated: ${sqlServerCount}/${batches.length}`,
    batches.length === sqlServerCount ? "✓" : "✗"
  );
}

async function migrateStandardizedRecords() {
  console.log("\n📋 Migrating StandardizedRecords...");
  const records = await sqliteClient.standardizedRecord.findMany();
  console.log(`  Found ${records.length} records in SQLite`);

  if (records.length > 0) {
    await sqlServerClient.$executeRawUnsafe(
      `SET IDENTITY_INSERT [StandardizedRecord] ON`
    );

    const batchSize = 250;
    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      await sqlServerClient.standardizedRecord.createMany({
        data: batch.map((r) => ({
          id: r.id,
          uploadBatchId: r.uploadBatchId,
          physicianName: r.physicianName,
          physicianNpi: r.physicianNpi,
          physicianDesignation: r.physicianDesignation,
          transferOfValue: r.transferOfValue,
          amount: r.amount,
          date: r.date,
        })),
      });
      console.log(
        `  Progress: ${Math.min(i + batchSize, records.length)}/${records.length}`
      );
    }

    await sqlServerClient.$executeRawUnsafe(
      `SET IDENTITY_INSERT [StandardizedRecord] OFF`
    );
  }

  const sqlServerCount = await sqlServerClient.standardizedRecord.count();
  stats.push({
    table: "StandardizedRecord",
    sqliteRows: records.length,
    sqlServerRows: sqlServerCount,
    status: records.length === sqlServerCount ? "✓" : "✗",
  });
  console.log(
    `  Migrated: ${sqlServerCount}/${records.length}`,
    records.length === sqlServerCount ? "✓" : "✗"
  );
}

async function main() {
  console.log("🚀 Starting SQLite → SQL Server Migration\n");

  try {
    await migrateClients();
    await migrateSourceSystems();
    await migrateColumnMappings();
    await migrateUploadBatches();
    await migrateStandardizedRecords();

    console.log("\n\n📊 Migration Summary:\n");
    console.log("Table                  | SQLite | SQL Server | Status");
    console.log("---------------------- | ------ | ---------- | ------");
    stats.forEach((s) => {
      const tableStr = s.table.padEnd(22);
      const sqliteStr = String(s.sqliteRows).padStart(6);
      const sqlServerStr = String(s.sqlServerRows).padStart(10);
      console.log(`${tableStr} | ${sqliteStr} | ${sqlServerStr} | ${s.status}`);
    });

    const allOk = stats.every((s) => s.status === "✓");
    if (allOk) {
      console.log("\n✅ Migration completed successfully!");
    } else {
      console.log("\n❌ Migration completed with errors - check row counts above");
      process.exit(1);
    }
  } catch (error) {
    console.error("\n❌ Migration failed:", error);
    process.exit(1);
  } finally {
    await sqliteClient.$disconnect();
    await sqlServerClient.$disconnect();
  }
}

main();
