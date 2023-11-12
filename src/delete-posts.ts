import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  // delete all the posts which are unpublished for the user with id 1
  const post = await prisma.post.deleteMany({
    where: {
      author: {
        id: 1,
      },
      published: false,
    },
  });
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
