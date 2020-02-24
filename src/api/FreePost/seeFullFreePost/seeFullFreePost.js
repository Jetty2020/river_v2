import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullFreePost: async (_, args) => {
      const { id } = args;
      return prisma.freePost({ id });
    }
  }
};