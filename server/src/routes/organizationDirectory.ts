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

    try {
      // Use raw SQL with template literals for proper Prisma parameterization
      const searchPattern = searchTerm + '%';
      const results = await prisma.$queryRaw<Array<{
        Company_Name: string;
        Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_ID: string | null;
      }>>`
        SELECT TOP 50
          Company_Name,
          Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_ID
        FROM [GPT].[dbo].[Organization_Directory]
        WHERE Company_Name LIKE ${searchPattern}
        ORDER BY Company_Name ASC
      `;

      // Map to expected format
      const resultsWithId = results.map((item, index) => ({
        id: index + 1,
        companyName: item.Company_Name,
        applicableManufacturerOrGpoMakingPaymentId: item.Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_ID,
        submittingApplicableManufacturerOrGpoName: null,
      }));

      res.json(resultsWithId);
    } catch (error) {
      console.error("Search error:", error);
      throw error;
    }
  })
);
