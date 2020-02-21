import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeStore: async (_, __,) => {
      return prisma.stores({
        orderBy: "location_DESC"
      });
    }
  }
}; 