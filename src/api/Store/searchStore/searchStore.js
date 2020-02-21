import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchStore: async (_, args) =>
      prisma.stores({
        where: {
          OR: [
            { storename_contains: args.term },
            { location_contains: args.term },
            { caption_contains: args.term }
          ]
        }
      })
  }
}; 