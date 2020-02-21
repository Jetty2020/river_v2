import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     createAccount: async (_, args) => {
       const { username, phone } = args;
       const user = await prisma.createUser({
         username,
         phone
       });
       return user;
     }
   }
 }; 