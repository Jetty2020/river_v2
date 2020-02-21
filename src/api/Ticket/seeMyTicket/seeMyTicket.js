import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeMyTicket: async (_, __, { request }) => {
        const { user } = request;
      return prisma.tickets({
        where: { 
            receiver: {id: user.id} 
        },
        orderBy: "createdAt_DESC"
      });
    }
  }
}; 