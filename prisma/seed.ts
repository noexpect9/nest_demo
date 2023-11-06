import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function generateMockData() {
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        username: `User ${i + 1}`,
        sex: ['Male', 'Female'][i % 2],
        phone: `123456789${i}`,
        password: 'password123',
        dept: `Department ${i % 3}`,
        email: `user${i + 1}@example.com`,
        age: 20 + i,
        createdBy: `Creator ${i + 1}`,
      },
    });

    console.log(`Created user with ID: ${user.id}`);
  }

  prisma.$disconnect();
}

generateMockData().catch((error) => {
  console.error(error);
  process.exit(1);
});
