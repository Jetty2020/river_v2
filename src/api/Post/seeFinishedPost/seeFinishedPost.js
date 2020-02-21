import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFinishedPost: async (_, __,) => {
      return prisma.posts({
        where: { finished: true },
        orderBy: "location_DESC"
      });
    }
  }
}; 