import { prisma } from "../../../../generated/prisma-client";
import { FULL_STORE_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeFullStore: async (_, args) => {
      const { id } = args;
      return prisma.store({ id }).$fragment(FULL_STORE_FRAGMENT);
    }
  }
};  