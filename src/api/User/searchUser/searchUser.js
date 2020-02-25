import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: async (_, args) =>
      prisma.users({
        where: {
          OR: [
            { username_contains: args.term },
            { nickname_contains: args.term },
            { phone_contains: args.term }
          ]
        }
      })
  }
};