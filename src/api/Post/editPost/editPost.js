import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editPost: async (_, args, { request }) => {
      const { user } = request;
      const { id, title, finished, caption, action } = args;
      const post = await prisma.$exists.post({ id });
      if(user.authority2) {
        if (post) {
          if (action === EDIT) {
            return prisma.updatePost({
              data: { title, finished, caption },
              where: { id }
            });
          } else if (action === DELETE) {
            return prisma.deletePost({ id });
          }
        } else {
          throw Error("You can't do that");
        }
      } else {
        return null;
      }
    }
  }
}; 