import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    uploadFreePost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { title, caption, files } = args;
      const post = await prisma.createFreePost({
        title,
        caption,
        user: { connect: { id: user.id } }
      });
      if(files) {
        files.forEach(
          async file =>
            await prisma.createFreeFile({
              url: file,
              post: {
                connect: {
                  id: post.id
                }
              }
            })
        );
      }
      return post;
    }
  }
};