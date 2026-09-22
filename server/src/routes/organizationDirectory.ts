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

    // Use raw SQL for case-insensitive search on SQL Server (LIKE is case-insensitive by default)
    const results = await prisma.$queryRaw<Array<{
      companyName: string;
      applicableManufacturerOrGpoMakingPaymentId: string | null;
      submittingApplicableManufacturerOrGpoName: string | null;
    }>>`
      SELECT TOP 50
        Company_Name as companyName,
        Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_ID as applicableManufacturerOrGpoMakingPaymentId,
        Submitting_Applicable_Manufacturer_or_Applicable_GPO_Name as submittingApplicableManufacturerOrGpoName
      FROM [gpt].[dbo].[Organization_Directory]
      WHERE Company_Name LIKE ${searchTerm + "%"}
      ORDER BY Company_Name ASC
    `;

    // Add id based on array position for frontend
    const resultsWithId = results.map((item, index) => ({
      id: index + 1,
      ...item,
    }));

    res.json(resultsWithId);
  })
);
