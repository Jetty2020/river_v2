import { prisma } from "../../../generated/prisma-client";

 export default {
   FreeComment: {
     user: ({ id }) => prisma.freeComment({ id }).user(),
     post: ({ id }) => prisma.freeComment({ id }).freePost()
   }
 };