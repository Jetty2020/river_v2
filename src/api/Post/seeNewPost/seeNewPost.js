import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeNewPost: async (_, __,) => {
      return prisma.posts({
        where: { finished: false },
        orderBy: "createdAt_DESC"
      });
    }
  }
}; 