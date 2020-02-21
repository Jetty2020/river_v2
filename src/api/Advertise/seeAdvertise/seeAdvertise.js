import { prisma } from "../../../../generated/prisma-client";
import { FULL_AVDERTISE_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeAdvertise: async (_, __,) => {
      return prisma.advertises({
        orderBy: "createdAt_DESC"
      }).$fragment(FULL_AVDERTISE_FRAGMENT);
    }
  }
}; 