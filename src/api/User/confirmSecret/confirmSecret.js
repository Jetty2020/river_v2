import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

 export default {
   Mutation: {
     confirmSecret: async (_, args) => {
       const { phone, secret } = args;
       const user = await prisma.user({ phone });
       if (user.loginSecret === secret) {
        await prisma.updateUser({
          where: { id: user.id },
          data: {
            loginSecret: ""
          }
        });
        return generateToken(user.id);
       } else {
         throw Error("Wrong phone number/secret combination");
       }
     }
   }
 }; 