import { prisma } from "~~/server/utils/prisma";

export default defineEventHandler(async () => {
  const projects = await prisma.project.findMany({
    include: {
      images: true,
      domains: {
        include: { domain: true }
      },
      services: {
        include: { service: true }
      },
      stacks: {
        include: { stack: true }
      },
    }
  });

  return projects;
});