import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  await prisma.post.create({
    data: {
      title: "title of the post 1",
      content: "this is the content for the post 1",
      published: false,
      author: {
        connect: {
          id: 1,
        },
      },
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
