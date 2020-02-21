import { prisma } from "../../../generated/prisma-client";

 export default {
   Point: {
        receiver: ({id}) => prisma.point({id}).user(),
        user: ({id}) => prisma.point({id}).user()
       }
     }; 