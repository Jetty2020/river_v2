import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seePost: async (_, __,) => {
      return prisma.posts({
        orderBy: "location_DESC"
      });
    }
  }
}; 