import { prisma } from "../../../generated/prisma-client";

 export default {
   FreePost: {
    files: ({ id }) => prisma.freePost({ id }).freeFiles(),
    comments: ({ id }) => prisma.freePost({ id }).freeComments(),
    user: ({ id }) => prisma.freePost({ id }).user(),
    likes: ({ id }) => prisma.freePost({ id }).freeLikes(),
     isLiked: (parent, _, { request }) => {
       const { user } = request;
       const { id } = parent;
       return prisma.$exists.freeLike({
         AND: [
           {
             user: {
               id: user.id
             }
           },
           {
             post: {
               id
             }
           }
         ]
       });
     },
     likeCount: parent =>
       prisma
         .freeLikesConnection({
           where: { post: { id: parent.id } }
         })
         .aggregate()
         .count(),
     commentCount: parent =>
       prisma
         .freeCommentsConnection({
           where: { post: { id: parent.id } }
         })
         .aggregate()
         .count()
   }
 };