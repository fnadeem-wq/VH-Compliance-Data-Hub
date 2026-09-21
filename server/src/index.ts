import cors from "cors";
import express from "express";
import { clientsRouter } from "./routes/clients";
import { sourceSystemsRouter } from "./routes/sourceSystems";
import { mappingRouter } from "./routes/mapping";
import { recordsRouter } from "./routes/records";
import { uploadLogRouter } from "./routes/uploadLog";
import { organizationDirectoryRouter } from "./routes/organizationDirectory";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/clients", clientsRouter);
app.use("/api/clients/:clientId/source-systems", sourceSystemsRouter);
app.use("/api/clients/:clientId/source-systems/:id/mapping", mappingRouter);
app.use("/api/clients/:clientId/source-systems/:id/records", recordsRouter);
app.use("/api/upload-log", uploadLogRouter);
app.use("/api/organization-directory", organizationDirectoryRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
