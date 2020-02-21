import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeAdStore: async (_, __,) => {
      return prisma.stores({
        where: { advertise: true },
        orderBy: "location_DESC"
      });
    }
  }
}; 