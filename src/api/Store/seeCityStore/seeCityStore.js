import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeCityStore: async (_, args,) => {
      return prisma.stores({
        where: {
            OR: [
              { city_contains: args.city },
            ]
          },
        orderBy: "location_DESC"
      });
    }
  }
}; 