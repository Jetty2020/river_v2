import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFreePost: async (_, __,) => {
      return prisma.freePosts({
        orderBy: "createdAt_DESC"
      });
    }
  }
}; 