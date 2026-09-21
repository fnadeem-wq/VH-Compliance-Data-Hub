import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db/prismaClient";
import { asyncHandler, HttpError } from "../middleware/errorHandler";

export const clientsRouter = Router();

const nameSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  companyName: z.string().optional(),
  applicableManufacturerOrGpoMakingPaymentId: z.string().optional(),
  submittingApplicableManufacturerOrGpoName: z.string().optional(),
});

clientsRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    const clients = await prisma.client.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    });
    res.json(clients);
  })
);

clientsRouter.get(
  "/summary",
  asyncHandler(async (_req, res) => {
    const clients = await prisma.client.findMany({
      orderBy: { name: "asc" },
      include: { sourceSystems: { include: { uploadBatches: { select: { uploadedAt: true } } } } },
    });
    const summary = clients.map((c) => {
      const batches = c.sourceSystems.flatMap((s) => s.uploadBatches);
      const totalFiles = batches.length;
      const lastModifiedAt = totalFiles === 0
        ? null
        : new Date(Math.max(...batches.map((b) => b.uploadedAt.getTime()))).toISOString();
      return { id: c.id, name: c.name, lastModifiedAt, totalFiles };
    });
    res.json(summary);
  })
);

clientsRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, companyName, applicableManufacturerOrGpoMakingPaymentId, submittingApplicableManufacturerOrGpoName } = nameSchema.parse(req.body);

    const existing = await prisma.client.findUnique({ where: { name } });
    if (existing) {
      throw new HttpError(409, `A client named "${name}" already exists`);
    }

    const client = await prisma.client.create({
      data: {
        name,
        companyName: companyName || null,
        applicableManufacturerOrGpoMakingPaymentId: applicableManufacturerOrGpoMakingPaymentId || null,
        submittingApplicableManufacturerOrGpoName: submittingApplicableManufacturerOrGpoName || null,
      },
    });
    res.status(201).json({ id: client.id, name: client.name });
  })
);

clientsRouter.patch(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const { name } = nameSchema.parse(req.body);

    const existing = await prisma.client.findFirst({
      where: { name, NOT: { id } },
    });
    if (existing) {
      throw new HttpError(409, `A client named "${name}" already exists`);
    }

    const client = await prisma.client.update({ where: { id }, data: { name } });
    res.json({ id: client.id, name: client.name });
  })
);

clientsRouter.get(
  "/:id/record-count",
  asyncHandler(async (req, res) => {
    const clientId = Number(req.params.id);
    const count = await prisma.standardizedRecord.count({
      where: { uploadBatch: { sourceSystem: { clientId } } },
    });
    res.json({ count });
  })
);

clientsRouter.get(
  "/:id/records",
  asyncHandler(async (req, res) => {
    const clientId = Number(req.params.id);

    const batches = await prisma.uploadBatch.findMany({
      where: { sourceSystem: { clientId } },
      orderBy: { uploadedAt: "asc" },
      include: { records: true, sourceSystem: true },
    });

    const records = batches.flatMap((batch) =>
      batch.records.map((record) => ({
        id: record.id,
        uploadedAt: batch.uploadedAt,
        fileName: batch.fileName,
        batchId: batch.id,
        sourceSystemName: batch.sourceSystem.name,
        physicianName: record.physicianName,
        physicianNpi: record.physicianNpi,
        physicianDesignation: record.physicianDesignation,
        transferOfValue: record.transferOfValue,
        amount: record.amount,
        date: record.date,
      }))
    );

    res.json({ records });
  })
);

clientsRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    await prisma.client.delete({ where: { id } });
    res.status(204).send();
  })
);
