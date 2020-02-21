import { prisma } from "../../../../generated/prisma-client";
import { FULL_STORE_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeAdStore: async (_, __,) => {
      return prisma.stores({
        where: { advertise: true },
        orderBy: "location_DESC"
      }).$fragment(FULL_STORE_FRAGMENT);
    }
  }
}; 