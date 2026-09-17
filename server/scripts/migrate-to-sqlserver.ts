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
    const insertStatements = clients
      .map(
        (client) =>
          `INSERT INTO [Client] ([id], [name], [createdAt]) VALUES (${client.id}, '${client.name.replace(/'/g, "''")}', '${client.createdAt.toISOString()}')`
      )
      .join("; ");

    const fullQuery = `SET IDENTITY_INSERT [Client] ON; ${insertStatements}; SET IDENTITY_INSERT [Client] OFF`;
    await sqlServerClient.$executeRawUnsafe(fullQuery);
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
    const insertStatements = sourceSystems
      .map(
        (ss) =>
          `INSERT INTO [SourceSystem] ([id], [clientId], [name], [createdAt]) VALUES (${ss.id}, ${ss.clientId}, '${ss.name.replace(/'/g, "''")}', '${ss.createdAt.toISOString()}')`
      )
      .join("; ");

    const fullQuery = `SET IDENTITY_INSERT [SourceSystem] ON; ${insertStatements}; SET IDENTITY_INSERT [SourceSystem] OFF`;
    await sqlServerClient.$executeRawUnsafe(fullQuery);
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
    const insertStatements = mappings
      .map((m) => {
        const constantValueStr = m.constantValue
          ? `'${m.constantValue.replace(/'/g, "''")}'`
          : "NULL";
        return `INSERT INTO [ColumnMapping] ([id], [sourceSystemId], [standardizedField], [rawColumnName], [constantValue], [createdAt], [updatedAt]) VALUES (${m.id}, ${m.sourceSystemId}, '${m.standardizedField.replace(/'/g, "''")}', '${m.rawColumnName.replace(/'/g, "''")}', ${constantValueStr}, '${m.createdAt.toISOString()}', '${m.updatedAt.toISOString()}')`;
      })
      .join("; ");

    const fullQuery = `SET IDENTITY_INSERT [ColumnMapping] ON; ${insertStatements}; SET IDENTITY_INSERT [ColumnMapping] OFF`;
    await sqlServerClient.$executeRawUnsafe(fullQuery);
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
    const insertStatements = batches
      .map((batch) => {
        const fileNameStr = batch.fileName
          ? `'${batch.fileName.replace(/'/g, "''")}'`
          : "NULL";
        return `INSERT INTO [UploadBatch] ([id], [sourceSystemId], [fileName], [uploadedAt]) VALUES (${batch.id}, ${batch.sourceSystemId}, ${fileNameStr}, '${batch.uploadedAt.toISOString()}')`;
      })
      .join("; ");

    const fullQuery = `SET IDENTITY_INSERT [UploadBatch] ON; ${insertStatements}; SET IDENTITY_INSERT [UploadBatch] OFF`;
    await sqlServerClient.$executeRawUnsafe(fullQuery);
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
    const batchSize = 500;
    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      const insertStatements = batch
        .map((r) => {
          const physicianName = r.physicianName
            ? `'${r.physicianName.replace(/'/g, "''")}'`
            : "NULL";
          const physicianNpi = r.physicianNpi
            ? `'${r.physicianNpi.replace(/'/g, "''")}'`
            : "NULL";
          const physicianDesignation = r.physicianDesignation
            ? `'${r.physicianDesignation.replace(/'/g, "''")}'`
            : "NULL";
          const transferOfValue = r.transferOfValue
            ? `'${r.transferOfValue.replace(/'/g, "''")}'`
            : "NULL";
          const amount = r.amount !== null ? r.amount : "NULL";
          const date = r.date
            ? `'${r.date.replace(/'/g, "''")}'`
            : "NULL";
          return `INSERT INTO [StandardizedRecord] ([id], [uploadBatchId], [physicianName], [physicianNpi], [physicianDesignation], [transferOfValue], [amount], [date]) VALUES (${r.id}, ${r.uploadBatchId}, ${physicianName}, ${physicianNpi}, ${physicianDesignation}, ${transferOfValue}, ${amount}, ${date})`;
        })
        .join("; ");

      const fullQuery = `SET IDENTITY_INSERT [StandardizedRecord] ON; ${insertStatements}; SET IDENTITY_INSERT [StandardizedRecord] OFF`;
      await sqlServerClient.$executeRawUnsafe(fullQuery);
      console.log(
        `  Progress: ${Math.min(i + batchSize, records.length)}/${records.length}`
      );
    }
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
