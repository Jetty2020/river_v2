import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchFreePost: async (_, args) =>
      prisma.freePosts({
        where: {
          OR: [
            { title_contains: args.term },
            { caption_contains: args.term }
          ]
        }
      })
  }
};