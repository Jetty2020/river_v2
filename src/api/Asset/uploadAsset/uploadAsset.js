import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
    uploadAsset: async (_, args, { request, isAuthenticated }) => {
       isAuthenticated(request);
       const { user } = request;
        const { assets, date } = args;
        const asset = await prisma.createAsset({
          assets,
          date,
          user: { connect: { id: user.id } }
        });
        return asset;
     }
   }
 }; 