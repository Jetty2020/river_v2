import { prisma } from "../../../generated/prisma-client";

 export default {
   Asset: {
        user: ({id}) => prisma.asset({id}).user()
       }
     }; 