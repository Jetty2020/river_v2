import { prisma } from "../../../../generated/prisma-client";
import { FULL_POINT_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeMyPoint: async (_, __, { request }) => {
        const { user } = request;
      return prisma.points({
        where: { 
            receiver: {id: user.id} 
        },
        orderBy: "createdAt_DESC"
      }).$fragment(FULL_POINT_FRAGMENT);
    }
  }
}; 