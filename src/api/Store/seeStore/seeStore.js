import { prisma } from "../../../../generated/prisma-client";
import { FULL_STORE_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeStore: async (_, __,) => {
      return prisma.stores({
        orderBy: "storename_ASC"
      }).$fragment(FULL_STORE_FRAGMENT);
    }
  }
}; 