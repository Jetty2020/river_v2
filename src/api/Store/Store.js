import { prisma } from "../../../generated/prisma-client";

export default {
  Store: {
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            store: {
              id
            }
          }
        ]
      });
    },
    likeCount: parent =>
      prisma
        .likesConnection({
          where: { store: { id: parent.id } }
        })
        .aggregate()
        .count(),
    storefiles: ({id}) => prisma.store({id}).storefiles(),
    user: ({id}) => prisma.store({id}).user()
  }
};  