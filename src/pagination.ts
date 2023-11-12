import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// FOR PAGINATION IN SQL
// SELECT * FROM users OFFSET 0 LIMIT 10; => Page 1 with only 10 queries
// SELECT * FROM users OFFSET 10 LIMIT 10; => Page 2 with next 10 queries
// SELECT * FROM users OFFSET 20 LIMIT 10; => Page 3 with next 10 queries
// OFFSET is skip in PRISMA
// LIMIT is take in PRISMA

async function main() {
  // get page 1 of posts with limit 2 posts
  let res = await prisma.post.findMany({
    take: 2,
    skip: 0,
  });

  console.log(res);
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
