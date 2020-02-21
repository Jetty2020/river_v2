import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editPost: async (_, args, { request }) => {
      const { user } = request;
      const { id, postname, date, caption, location, action } = args;
      const post = await prisma.$exists.post({ id });
      if(user.authority1) {
        if (post) {
          if (action === EDIT) {
            return prisma.updatePost({
              data: { postname, date, caption, location },
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
        ;
      }
    }
  }
}; 