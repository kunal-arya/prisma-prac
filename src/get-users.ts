import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  const users = await prisma.user.findMany();
  console.log("ALL USERS", users);

  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });

  console.log("USER with ID 1 & All his posts", user);
}

main()
  .then(async () => {
    console.log("done");
    prisma.$disconnect();
  })
  .then(async (e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
