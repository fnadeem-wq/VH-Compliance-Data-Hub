import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db/prismaClient";
import { asyncHandler, HttpError } from "../middleware/errorHandler";

export const sourceSystemsRouter = Router({ mergeParams: true });

const nameSchema = z.object({ name: z.string().trim().min(1, "Name is required") });

sourceSystemsRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const clientId = Number(req.params.clientId);
    const sourceSystems = await prisma.sourceSystem.findMany({
      where: { clientId },
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    });
    res.json(sourceSystems);
  })
);

sourceSystemsRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const clientId = Number(req.params.clientId);
    const { name } = nameSchema.parse(req.body);

    const client = await prisma.client.findUnique({ where: { id: clientId } });
    if (!client) throw new HttpError(404, "Client not found");

    const existing = await prisma.sourceSystem.findFirst({ where: { clientId, name } });
    if (existing) {
      throw new HttpError(409, `A source system named "${name}" already exists for this client`);
    }

    const sourceSystem = await prisma.sourceSystem.create({ data: { clientId, name } });
    res.status(201).json({ id: sourceSystem.id, name: sourceSystem.name });
  })
);

sourceSystemsRouter.patch(
  "/:id",
  asyncHandler(async (req, res) => {
    const clientId = Number(req.params.clientId);
    const id = Number(req.params.id);
    const { name } = nameSchema.parse(req.body);

    const existing = await prisma.sourceSystem.findFirst({
      where: { clientId, name, NOT: { id } },
    });
    if (existing) {
      throw new HttpError(409, `A source system named "${name}" already exists for this client`);
    }

    const sourceSystem = await prisma.sourceSystem.update({ where: { id }, data: { name } });
    res.json({ id: sourceSystem.id, name: sourceSystem.name });
  })
);

sourceSystemsRouter.get(
  "/:id/record-count",
  asyncHandler(async (req, res) => {
    const sourceSystemId = Number(req.params.id);
    const count = await prisma.standardizedRecord.count({
      where: { uploadBatch: { sourceSystemId } },
    });
    res.json({ count });
  })
);

sourceSystemsRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    await prisma.sourceSystem.delete({ where: { id } });
    res.status(204).send();
  })
);
