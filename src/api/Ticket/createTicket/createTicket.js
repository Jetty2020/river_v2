 import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createTicket: async (_, args, { request }) => {
      const { userId } = args;
      const { user } = request;
      if(user.authority1) {
        try {
            await prisma.createTicket({
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
          } catch {
            return false;
          }
      } else {
        return false;
      }
       
    }
  }
}; 