import { prisma } from "../../../generated/prisma-client";

 export default {
   Ticket: {
        receiver: ({id}) => prisma.ticket({id}).user(),
        user: ({id}) => prisma.ticket({id}).user()
       }
     }; 