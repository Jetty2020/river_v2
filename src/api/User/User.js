import { prisma } from "../../../generated/prisma-client";

 export default {
   User: {
       isSelf: (parent, _, { request }) => {
           const { user } = request;
           const { id: parentId } = parent;
           return user.id === parentId;
         }
       }
     }; 