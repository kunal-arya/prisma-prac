import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... get all the users which email ends with gmail.com and there is atleast 1 post published and all get there posts which are published
  const res = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com",
      },
      posts: {
        some: {
          published: true,
        },
      },
    },
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  });

  console.log(JSON.stringify(res));
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
