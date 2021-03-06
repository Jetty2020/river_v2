import { prisma } from "../../../../generated/prisma-client";

  export default {
    Mutation: {
        uploadStore: async (_, args, { request, isAuthenticated }) => {
        isAuthenticated(request);
        const { user } = request;
        if(user.authority2) {
          const { storename, number, city, location, caption, open, close, storefiles } = args;
          const store = await prisma.createStore({
            storename, 
            number, 
            city,
            location, 
            caption, 
            open, 
            close,
            user: { connect: { id:user.id } }
          });
          storefiles.forEach(
            async storefile =>
              await prisma.createStoreFile({
                url: storefile,
                store: {
                  connect: {
                    id: store.id
                  }
                }
              })
          );
          return store;
        } else {
          return null;
        }
      }
    }
  }; 