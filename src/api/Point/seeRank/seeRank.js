import { prisma } from "../../../../generated/prisma-client";
import { FULL_POINT_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeRank: async (_, __,) => {
      return prisma.points({
        orderBy: "point_DESC"
      }).$fragment(FULL_POINT_FRAGMENT);
    }
  }
}; 