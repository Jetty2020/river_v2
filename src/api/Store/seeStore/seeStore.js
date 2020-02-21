import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeStore: async (_, __,) => {
      return prisma.stores({
        orderBy: "storename_ASC"
      });
    }
  }
}; 