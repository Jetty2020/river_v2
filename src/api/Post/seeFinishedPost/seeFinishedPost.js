import { prisma } from "../../../../generated/prisma-client";
import { FULL_POST_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeFinishedPost: async (_, __,) => {
      return prisma.posts({
        where: { finished: true },
        orderBy: "location_DESC"
      }).$fragment(FULL_POST_FRAGMENT);
    }
  }
}; 