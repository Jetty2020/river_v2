import { prisma } from "../../../generated/prisma-client";

 export default {
   Advertise: {
        advertisefiles: ({id}) => prisma.advertise({id}).advertisefiles(),
       }
     }; 