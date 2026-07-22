import { prisma } from "~~/server/utils/prisma";

export default defineEventHandler(async () => {
  return await prisma.service.findMany({
    include: {
      projects: {
        include: {
          project: true,
        },
      },
    },
  });
});