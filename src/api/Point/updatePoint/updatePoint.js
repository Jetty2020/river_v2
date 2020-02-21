import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    updatePoint: async (_, args, { request }) => {
      const { userId, point } = args;
      const { user } = request;
      if(user.authority1) {
          try {
              try {
                const existingPoint = await prisma.$exists.point();
               if (existingPoint) {
                await prisma.deleteManyPoints( {receiver: { id: userId }} );
                   await prisma.createPoint({
                       point,
                       user: {
                         connect: {
                           id: user.id
                         }
                       },
                       receiver: {
                         connect: {
                           id: userId
                         }
                       }
                    });
                    return true;
              } else {
                  await prisma.createPoint({
                      point,
                      user: {
                        connect: {
                          id: user.id
                        }
                      },
                      receiver: {
                        connect: {
                          id: userId
                        }
                      }
                    });
                  return true;
               }
             } catch {
               return false;
             }
          } catch {
            return false;
          }
      } else {
        return false;
      }
       
    }
  }
}; 