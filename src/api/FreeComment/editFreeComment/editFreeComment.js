import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editFreeComment: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, text, action } = args;
      const { user } = request;
      const post = await prisma.$exists.freeComment({ id, user: { id: user.id } });
      if (post) {
        if (action === EDIT) {
          return prisma.updateFreeComment({
            data: { text },
            where: { id }
          });
        } else if (action === DELETE) {
          return prisma.deleteFreeComment({ id });
        }
      } else {
        throw Error("You can't do that");
      }
    }
  }
};