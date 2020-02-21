import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPoint: async (_, args) =>
      prisma.points({
        where: {
          OR: [
            { 
                receiver: {
                id_contains: args.term
                } 
            },
            { id_contains: args.term }
          ]
        }
      })
  }
}; 