import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seePost: async (_, __,) => {
      return prisma.freePosts({
        orderBy: "createdAt_DESC"
      });
    }
  }
}; 