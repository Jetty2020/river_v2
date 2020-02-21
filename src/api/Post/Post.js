import { prisma } from "../../../generated/prisma-client";

 export default {
   Post: {
        postfiles: ({id}) => prisma.post({id}).postfiles(),
        user: ({id}) => prisma.post({id}).user()
       }
     }; 