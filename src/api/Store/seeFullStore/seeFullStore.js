import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullStore: async (_, args) => {
      const { id } = args;
      return prisma.store({ id });
    }
  }
};  