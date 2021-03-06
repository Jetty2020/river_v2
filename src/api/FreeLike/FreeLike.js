import { prisma } from "../../../generated/prisma-client";

export default {
  FreeLike: {
    post: ({ id }) => prisma.freeLike({ id }).freePost(),
    user: ({ id }) => prisma.freeLike({ id }).user()
  }
};