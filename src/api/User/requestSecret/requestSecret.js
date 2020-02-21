import { generateSecret, sendSecretMsg  } from "../../../utils";
 import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
    requestSecret: async (_, args) => {
       const { phone } = args;
       const loginSecret = generateSecret();
       try {
        await sendSecretMsg(phone, loginSecret);
         await prisma.updateUser({ data: { loginSecret }, where: { phone } });
         return true;
       } catch (error) {
         return false;
       }
     }
   }
 }; 