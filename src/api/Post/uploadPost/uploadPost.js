import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     uploadPost: async (_, args, { request, isAuthenticated }) => {
       isAuthenticated(request);
       const { user } = request;
       if(user.authority2) {
        const { postname, caption, postfiles } = args;
        const post = await prisma.createPost({
          postname,
          caption,
          user: { connect: { id: user.id } }
        });
        postfiles.forEach(
          async postfile =>
            await prisma.createPostFile({
              url: postfile,
              post: {
                connect: {
                  id: post.id
                }
              }
            })
        );
        return post;
      } else {
        return null;
      }
     }
   }
 }; 