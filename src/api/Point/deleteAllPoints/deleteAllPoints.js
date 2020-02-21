import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteAllPoints: async (_, args, { request }) => {
      const { user } = request;
      const { point } = args;
      if(user.authority2) {
        await prisma.deleteManyPoints({ previousPoint_gte: point });
        return true;
      } else {
        return false;
      }
    }
  }
};  