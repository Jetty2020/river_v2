import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteAllPoints: async (_, args, { request }) => {
      const { user } = request;
      const { point } = args;
      if(user.authority1) {
        await prisma.deleteManyPoints({ point_gte: point });
        return true;
      } else {
        return false;
      }
    }
  }
};  