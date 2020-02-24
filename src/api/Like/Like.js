import { prisma } from "../../../generated/prisma-client";

export default {
  Like: {
    store: ({ id }) => prisma.like({ id }).store(),
    user: ({ id }) => prisma.like({ id }).user()
  }
};