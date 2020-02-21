import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editStore: async (_, args, { request }) => {
      const { user } = request;
      if(user.authority2) {
        const { id, storename, advertise, open, close, caption, location, action } = args;
        const store = await prisma.$exists.store({ id });
        if (store) {
          if (action === EDIT) {
            return prisma.updateStore({
              data: { storename, advertise, open, close, caption, location },
              where: { id }
            });
          } else if (action === DELETE) {
            return prisma.deleteStore({ id });
          }
        } else {
          throw Error("You can't do that");
        }
      } else {
        return null;
      }
    }
  }
};  