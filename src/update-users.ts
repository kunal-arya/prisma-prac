import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  const user = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "Kunal Arya",
    },
  });

  console.log("USER", user);
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
