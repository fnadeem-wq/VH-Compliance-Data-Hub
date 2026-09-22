import { Router } from "express";
import { prisma } from "../db/prismaClient";
import { asyncHandler } from "../middleware/errorHandler";

export const organizationDirectoryRouter = Router();

organizationDirectoryRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const { q } = req.query;

    // No search terms returns empty list
    if (!q || typeof q !== "string" || !q.trim()) {
      res.json([]);
      return;
    }

    const results = await prisma.organizationDirectory.findMany({
      where: {
        companyName: {
          startsWith: q.trim(),
        },
      },
      select: {
        id: true,
        companyName: true,
        applicableManufacturerOrGpoMakingPaymentId: true,
        submittingApplicableManufacturerOrGpoName: true,
      },
      take: 50,
    });

    res.json(results);
  })
);
