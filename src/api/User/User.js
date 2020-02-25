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
            .count(),
       points: ({id}) => prisma.user({id}).points(),
       receivePoints: ({id}) => prisma.user({id}).receivePoints(),
       tickets: ({id}) => prisma.user({id}).tickets(),
       receiveTickets: ({id}) => prisma.user({id}).receiveTickets(),
       posts: ({id}) => prisma.user({id}).posts(),
       freeposts: ({id}) => prisma.user({id}).freeposts(),
       freelikes: ({id}) => prisma.user({id}).freelikes(),
       freecomments: ({id}) => prisma.user({id}).freecomments(),
       likes: ({id}) => prisma.user({id}).likes(),
       }
     }; 