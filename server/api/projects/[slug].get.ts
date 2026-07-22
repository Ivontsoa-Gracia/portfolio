import { prisma } from '~~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  return await prisma.project.findUnique({
    where: { slug },
    include: {
      domains: { include: { domain: true } },
      services: { include: { service: true } },
      stacks: { include: { stack: true } },
      images: true,
    },
  })
})