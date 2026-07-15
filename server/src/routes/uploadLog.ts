import { Router } from "express";
import { prisma } from "../db/prismaClient";
import { parseDateLoose, formatDateMMDDYYYY } from "../lib/parseDate";

export const uploadLogRouter = Router();

uploadLogRouter.get("/", async (req, res) => {
  const clientId = req.query.clientId ? Number(req.query.clientId) : undefined;
  const sourceSystemId = req.query.sourceSystemId ? Number(req.query.sourceSystemId) : undefined;

  const batches = await prisma.uploadBatch.findMany({
    where: {
      sourceSystemId,
      sourceSystem: clientId ? { clientId } : undefined,
    },
    include: {
      sourceSystem: { include: { client: true } },
      records: { select: { date: true } },
    },
    orderBy: { uploadedAt: "desc" },
  });

  const rows = batches.map((batch) => {
    const validDates = batch.records
      .map((r) => (r.date ? parseDateLoose(r.date) : null))
      .filter((d): d is Date => d !== null);

    let dateRangeMin: string | null = null;
    let dateRangeMax: string | null = null;
    if (validDates.length > 0) {
      const times = validDates.map((d) => d.getTime());
      dateRangeMin = formatDateMMDDYYYY(new Date(Math.min(...times)));
      dateRangeMax = formatDateMMDDYYYY(new Date(Math.max(...times)));
    }

    return {
      batchId: batch.id,
      clientId: batch.sourceSystem.clientId,
      clientName: batch.sourceSystem.client.name,
      sourceSystemId: batch.sourceSystemId,
      sourceSystemName: batch.sourceSystem.name,
      fileName: batch.fileName,
      recordCount: batch.records.length,
      dateRangeMin,
      dateRangeMax,
      uploadedAt: batch.uploadedAt,
    };
  });

  res.json({ rows });
});
