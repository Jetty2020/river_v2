import { prisma } from "../../../../generated/prisma-client";
import { FULL_TICKET_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeMyTicket: async (_, __, { request }) => {
        const { user } = request;
      return prisma.tickets({
        where: { 
            receiver: {id: user.id} 
        },
        orderBy: "createdAt_DESC"
      }).$fragment(FULL_TICKET_FRAGMENT);
    }
  }
}; 