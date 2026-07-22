import { prisma } from "~~/server/utils/prisma";

import { buildProfile } from "~~/server/services/profile";
import { scoreProject } from "~~/server/services/scoring";

export default defineEventHandler(async (event) => {
  const visitorId = getQuery(event).visitorId as string;

  const profile = await buildProfile(visitorId);

  const currentProjectId = Number(getQuery(event).currentProjectId);

  if (!currentProjectId) {
    throw createError({
      statusCode: 400,
      statusMessage: "currentProjectId is required"
    })
  }

  const projects = await prisma.project.findMany({
    where: {
      id: {
        not: currentProjectId,
      },
    },
    include: {
      images: true,
      domains: {
        include: { domain: true },
      },
      services: {
        include: { service: true },
      },
      stacks: {
        include: { stack: true },
      },
    },
  });

  const ranked = projects
    .map((project) => ({
      project,
      score: scoreProject(project, profile),
    }))
    .sort((a, b) => b.score - a.score);

  return ranked.slice(0, 3);
});
