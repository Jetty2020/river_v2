import { prisma } from "../../../generated/prisma-client";

 export default {
   User: {
       isSelf: (parent, _, { request }) => {
           const { user } = request;
           const { id: parentId } = parent;
           return user.id === parentId;
         },
       freeposts: ({ id }) => prisma.user({ id }).freePosts(),
       freelikes: ({ id }) => prisma.user({ id }).freeLikes(),
       freecomments: ({ id }) => prisma.user({ id }).freeComments(),
       freePostsCount: ({ id }) =>
          prisma
            .freepPostsConnection({ where: { user: { id } } })
            .aggregate()
            .count()
       }
     }; 