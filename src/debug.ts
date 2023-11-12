/// https://github.com/prisma/prisma/issues/5026

// We are also logging the values of like $1 and $2 variables in this debug, read above issue

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

async function main() {
  const users = await prisma.user.findMany({
    take: 3,
    skip: 10,
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

prisma.$on("query", async (e) => {
  console.log(`${e.query} ${e.params}`);
});
