import { prisma } from "../../../../generated/prisma-client";
import { FULL_ASSET_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeMyAsset: async (_, __, { request }) => {
        const { user } = request;
      return prisma.assets({
        where: { 
            user: {id: user.id} 
        },
        orderBy: "date_DESC"
      });
    }
  }
}; 