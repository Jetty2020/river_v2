import { prisma } from "../../../generated/prisma-client";

 export default {
   Point: {
        receiver: ({id}) => prisma.point({id}).receiver(),
        user: ({id}) => prisma.point({id}).user(),
        sum: parent => {
            const { addPoint, previousPoint } = parent;
            const sum = Math.floor(addPoint + previousPoint);
            return sum;
        }
       }
     }; 