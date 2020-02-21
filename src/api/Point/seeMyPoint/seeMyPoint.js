import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeMyPoint: async (_, __, { request }) => {
        const { user } = request;
      return prisma.points({
        where: { 
            receiver: {id: user.id} 
        },
        orderBy: "createdAt_DESC"
      });
    }
  }
}; 