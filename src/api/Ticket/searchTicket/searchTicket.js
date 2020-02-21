import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchTicket: async (_, args) =>
      prisma.tickets({
        where: {
          OR: [
            {receiver: { username_contains: args.term }} ,
            {receiver: { phone_contains: args.term }}
          ]
        }
      })
  }
}; 