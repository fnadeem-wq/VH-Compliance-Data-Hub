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

    const searchTerm = q.trim();

    // Search using Prisma with case-insensitive matching
    // SQL Server's default collation is case-insensitive for LIKE operator
    const results = await prisma.organizationDirectory.findMany({
      where: {
        companyName: {
          startsWith: searchTerm,
        },
      },
      select: {
        id: true,
        companyName: true,
        applicableManufacturerOrGpoMakingPaymentId: true,
        submittingApplicableManufacturerOrGpoName: true,
      },
      take: 50,
      orderBy: {
        companyName: "asc",
      },
    });

    // Map results to expected format with index-based id fallback
    const resultsWithId = results.map((item, index) => ({
      id: (item as any).id || index + 1,
      companyName: item.companyName,
      applicableManufacturerOrGpoMakingPaymentId: item.applicableManufacturerOrGpoMakingPaymentId,
      submittingApplicableManufacturerOrGpoName: item.submittingApplicableManufacturerOrGpoName,
    }));

    res.json(resultsWithId);
  })
);
