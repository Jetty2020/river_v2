import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editFreePost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, title, caption, action } = args;
      const { user } = request;
      const post = await prisma.$exists.freePost({ id, user: { id: user.id } });
      if (post) {
        if (action === EDIT) {
          return prisma.updateFreePost({
            data: { title, caption },
            where: { id }
          });
        } else if (action === DELETE) {
          return prisma.deleteFreePost({ id });
        }
      } else {
        throw Error("You can't do that");
      }
    }
  }
};