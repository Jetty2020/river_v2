import { isAuthenticated } from "../../../middlewares";
 import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteTicket: async (_, args, { request }) => {
      isAuthenticated(request);
      const { ticketId } = args;
      const { user } = request;
      if(user.authority1) {
          try {
            await prisma.deleteTicket( { id: ticketId } );
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