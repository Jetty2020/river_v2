import { prisma } from "../../../../generated/prisma-client";
import { FULL_POST_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seePost: async (_, __,) => {
      return prisma.posts({
        orderBy: "location_DESC"
      }).$fragment(FULL_POST_FRAGMENT);
    }
  }
}; 