import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPoint: async (_, args) =>
      prisma.points({
        where: {
          OR: [
            
            { id_contains: args.id }
          ]
        }
      })
  }
}; 