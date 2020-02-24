import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    freeToggleLike: async (_, args, { request }) => {
      isAuthenticated(request);
      const { postId } = args;
      const { user } = request;
      const filterOptions = {
       AND: [
         {
           user: {
             id: user.id
            }
           },
           {
             post: {
               id: postId
             }
           }
         ]
       };
       try {
         const existingLike = await prisma.$exists.freeLike(filterOptions);
        if (existingLike) {
         await prisma.deleteManyFreeLikes(filterOptions);
       } else {
          await prisma.createFreeLike({
            user: {
              connect: {
                id: user.id
              }
            },
            post: {
              connect: {
                id: postId
              }
            }
          });
        }
        return true;
      } catch {
        return false;
      }
    }
  }
}; 