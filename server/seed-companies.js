const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const companies = [
    {
      companyName: 'Kedrion',
      applicableManufacturerOrGpoMakingPaymentId: 'MFR-123456',
      submittingApplicableManufacturerOrGpoName: 'Kedrion Bio Pharma',
    },
    {
      companyName: 'Kedplasma',
      applicableManufacturerOrGpoMakingPaymentId: 'MFR-123457',
      submittingApplicableManufacturerOrGpoName: 'Ked Plasma Solutions',
    },
    {
      companyName: 'Orthofix',
      applicableManufacturerOrGpoMakingPaymentId: 'MFR-789012',
      submittingApplicableManufacturerOrGpoName: 'Orthofix International',
    },
    {
      companyName: 'Heartflow',
      applicableManufacturerOrGpoMakingPaymentId: 'MFR-345678',
      submittingApplicableManufacturerOrGpoName: 'HeartFlow Diagnostics',
    },
  ];

  for (const company of companies) {
    const result = await prisma.organizationDirectory.create({
      data: company,
    });
    console.log('Created:', result);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
