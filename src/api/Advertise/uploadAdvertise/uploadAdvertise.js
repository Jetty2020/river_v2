import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
    uploadAdvertise: async (_, args, { request, isAuthenticated }) => {
       isAuthenticated(request);
       const { user } = request;
       const { caption,pass, advertisefiles } = args;
       if(user.authority2) {
        try {
            try {
              const existingAdvertise = await prisma.$exists.advertise();
             if (existingAdvertise) {
              await prisma.deleteManyAdvertises( { createdAt_gte: pass } );
              const advertise = await prisma.createAdvertise({
                caption,
              });
              advertisefiles.forEach(
                async advertisefile =>
                  await prisma.createAdvertiseFile({
                    url: advertisefile,
                    advertise: {
                      connect: {
                        id: advertise.id
                      }
                    }
                  })
              );
              return advertise;
            } else {
                const advertise = await prisma.createAdvertise({
                  caption,
                });
                advertisefiles.forEach(
                  async advertisefile =>
                    await prisma.createAdvertiseFile({
                      url: advertisefile,
                      advertise: {
                        connect: {
                          id: advertise.id
                        }
                      }
                    })
                );
                return advertise;
             }
           } catch {
             return null;
           }
        } catch {
          return null;
        }
    } else {
      return null;
    }
     }
   }
 }; 