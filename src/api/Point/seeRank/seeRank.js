import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeRank: async (_, __,) => {
      return prisma.points({
        orderBy: "sum_DESC"
      });
    }
  }
}; 