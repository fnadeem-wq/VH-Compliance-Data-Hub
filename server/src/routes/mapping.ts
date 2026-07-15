import { Request, Response, Router } from "express";
import { z } from "zod";
import { prisma } from "../db/prismaClient";
import { STANDARDIZED_FIELDS } from "../standardizedFields";

interface MappingParams {
  clientId: string;
  id: string;
}

export const mappingRouter = Router({ mergeParams: true });

const mappingBodySchema = z.object({
  mappings: z.array(
    z.object({
      standardizedField: z.enum(STANDARDIZED_FIELDS),
      rawColumnName: z.string().trim().min(1),
      constantValue: z.string().nullable().optional(),
    })
  ),
});

mappingRouter.get("/", async (req: Request<MappingParams>, res: Response) => {
  const sourceSystemId = Number(req.params.id);
  const mappings = await prisma.columnMapping.findMany({
    where: { sourceSystemId },
    select: { standardizedField: true, rawColumnName: true, constantValue: true, updatedAt: true },
    // Ordered by id (insertion order), not updatedAt, so multi-column fields
    // like Physician Name (First Name + Last Name) keep a stable, predictable
    // column order across saves/reloads instead of being re-sorted by timestamp.
    orderBy: { id: "asc" },
  });

  const latestUpdatedAt = mappings.reduce<Date | null>(
    (latest, m) => (!latest || m.updatedAt > latest ? m.updatedAt : latest),
    null
  );

  res.json({
    mappings: mappings.map(({ standardizedField, rawColumnName, constantValue }) => ({
      standardizedField,
      rawColumnName,
      constantValue: constantValue ?? null,
    })),
    updatedAt: latestUpdatedAt,
  });
});

mappingRouter.put("/", async (req: Request<MappingParams>, res: Response, next) => {
  try {
    const sourceSystemId = Number(req.params.id);
    const { mappings } = mappingBodySchema.parse(req.body);

    await prisma.$transaction([
      prisma.columnMapping.deleteMany({ where: { sourceSystemId } }),
      ...mappings.map((m) =>
        prisma.columnMapping.create({
          data: {
            sourceSystemId,
            standardizedField: m.standardizedField,
            rawColumnName: m.rawColumnName,
            constantValue: m.constantValue ?? null,
          },
        })
      ),
    ]);

    const saved = await prisma.columnMapping.findMany({
      where: { sourceSystemId },
      select: { standardizedField: true, rawColumnName: true, constantValue: true },
      orderBy: { id: "asc" },
    });
    res.json({ mappings: saved.map(m => ({ ...m, constantValue: m.constantValue ?? null })) });
  } catch (err) {
    next(err);
  }
});
