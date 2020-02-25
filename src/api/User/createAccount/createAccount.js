import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     createAccount: async (_, args) => {
       const { username, nickname, phone } = args;
       const user = await prisma.createUser({
         username,
         nickname,
         phone
       });
       return user;
     }
   }
 }; 