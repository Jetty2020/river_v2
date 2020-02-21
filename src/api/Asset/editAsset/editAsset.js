import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editAsset: async (_, args) => {
      const { id, assets, date, action } = args;
      const asset = await prisma.$exists.asset({ id });
        if (asset) {
          if (action === EDIT) {
            return prisma.updateAsset({
              data: { assets, date },
              where: { id }
            });
          } else if (action === DELETE) {
            return prisma.deleteAsset({ id });
          }
        } else {
          throw Error("You can't do that");
        }
    }
  }
}; 