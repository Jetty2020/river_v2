import { prisma } from "../../../generated/prisma-client";

 export default {
   Point: {
        receiver: ({id}) => prisma.point({id}).receiver(),
        user: ({id}) => prisma.point({id}).user(),
        addPoint: parent => {
            const { currentPoint, previousPoint } = parent;
            const addPoint = Math.floor(currentPoint - previousPoint);
            return addPoint;
        },
        rank: async parent =>{
          const count = await prisma
            .pointsConnection({
              where: { currentPoint_gt: parent.currentPoint }
            })
            .aggregate()
            .count();
          const rank = Math.floor(count + 1);
          return rank;
          }
    }
}; 