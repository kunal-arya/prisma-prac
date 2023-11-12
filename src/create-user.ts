import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      email: "kunal@gmail.com",
      name: "kunal",
    },
  });
}

main()
  .then(async () => {
    console.log("DONE WITH THE QUERY");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
