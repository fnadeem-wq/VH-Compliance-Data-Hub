import { Request, Response, Router } from "express";
import { z } from "zod";
import { prisma } from "../db/prismaClient";

interface RecordsParams {
  clientId: string;
  id: string;
}

export const recordsRouter = Router({ mergeParams: true });

const recordSchema = z.object({
  physicianName: z.string().nullable().optional(),
  physicianNpi: z.string().nullable().optional(),
  physicianDesignation: z.string().nullable().optional(),
  transferOfValue: z.string().nullable().optional(),
  amount: z.number().nullable().optional(),
  date: z.string().nullable().optional(),
});

const recordsBodySchema = z.object({
  fileName: z.string().trim().min(1).optional(),
  records: z.array(recordSchema).min(1),
});

recordsRouter.get("/", async (req: Request<RecordsParams>, res: Response) => {
  const sourceSystemId = Number(req.params.id);

  const batches = await prisma.uploadBatch.findMany({
    where: { sourceSystemId },
    orderBy: { uploadedAt: "asc" },
    include: { records: true },
  });

  const records = batches.flatMap((batch) =>
    batch.records.map((record) => ({
      id: record.id,
      uploadedAt: batch.uploadedAt,
      fileName: batch.fileName,
      batchId: batch.id,
      physicianName: record.physicianName,
      physicianNpi: record.physicianNpi,
      physicianDesignation: record.physicianDesignation,
      transferOfValue: record.transferOfValue,
      amount: record.amount,
      date: record.date,
      companyName: record.companyName,
      applicableManufacturerOrGpoMakingPaymentId: record.applicableManufacturerOrGpoMakingPaymentId,
      submittingApplicableManufacturerOrGpoName: record.submittingApplicableManufacturerOrGpoName,
    }))
  );

  res.json({ records });
});

recordsRouter.post("/", async (req: Request<RecordsParams>, res: Response, next) => {
  try {
    const sourceSystemId = Number(req.params.id);
    const { fileName, records } = recordsBodySchema.parse(req.body);

    const sourceSystem = await prisma.sourceSystem.findUnique({
      where: { id: sourceSystemId },
      include: { client: true },
    });
    if (!sourceSystem) {
      res.status(404).json({ error: "Source system not found" });
      return;
    }

    const batch = await prisma.uploadBatch.create({
      data: {
        sourceSystemId,
        fileName,
        records: {
          create: records.map((r) => ({
            physicianName: r.physicianName ?? null,
            physicianNpi: r.physicianNpi ?? null,
            physicianDesignation: r.physicianDesignation ?? null,
            transferOfValue: r.transferOfValue ?? null,
            amount: r.amount ?? null,
            date: r.date ?? null,
            companyName: sourceSystem.client.companyName,
            applicableManufacturerOrGpoMakingPaymentId: sourceSystem.client.applicableManufacturerOrGpoMakingPaymentId,
            submittingApplicableManufacturerOrGpoName: sourceSystem.client.submittingApplicableManufacturerOrGpoName,
          })),
        },
      },
      include: { records: true },
    });

    res.status(201).json({
      batchId: batch.id,
      uploadedAt: batch.uploadedAt,
      records: batch.records.map((record) => ({
        id: record.id,
        uploadedAt: batch.uploadedAt,
        fileName: batch.fileName,
        batchId: batch.id,
        physicianName: record.physicianName,
        physicianNpi: record.physicianNpi,
        physicianDesignation: record.physicianDesignation,
        transferOfValue: record.transferOfValue,
        amount: record.amount,
        date: record.date,
        companyName: record.companyName,
        applicableManufacturerOrGpoMakingPaymentId: record.applicableManufacturerOrGpoMakingPaymentId,
        submittingApplicableManufacturerOrGpoName: record.submittingApplicableManufacturerOrGpoName,
      })),
    });
  } catch (err) {
    next(err);
  }
});

recordsRouter.delete("/:batchId", async (req: Request<RecordsParams & { batchId: string }>, res: Response, next) => {
  try {
    const sourceSystemId = Number(req.params.id);
    const batchId = Number(req.params.batchId);

    const batch = await prisma.uploadBatch.findUnique({
      where: { id: batchId },
    });

    if (!batch) {
      res.status(404).json({ error: "Upload batch not found" });
      return;
    }

    if (batch.sourceSystemId !== sourceSystemId) {
      res.status(403).json({ error: "Batch does not belong to this source system" });
      return;
    }

    await prisma.uploadBatch.delete({
      where: { id: batchId },
    });

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});
