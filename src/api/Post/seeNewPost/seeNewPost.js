import { prisma } from "../../../../generated/prisma-client";
import { FULL_POST_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeNewPost: async (_, __,) => {
      return prisma.posts({
        where: { finished: false },
        orderBy: "location_DESC"
      }).$fragment(FULL_POST_FRAGMENT);
    }
  }
}; 