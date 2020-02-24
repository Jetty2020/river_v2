import { isAuthenticated } from "../../../middlewares";
 import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     addFreeComment: async (_, args, { request }) => {
       isAuthenticated(request);
       const { text, postId } = args;
       const { user } = request;
       return prisma.createFreeComment({
         user: {
           connect: {
             id: user.id
           }
         },
         post: {
           connect: {
             id: postId
           }
         },
         text
       });
     }
   }
 };