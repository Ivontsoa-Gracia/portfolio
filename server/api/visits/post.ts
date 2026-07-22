import { prisma } from '~~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { visitorId, projectId, duration } = body

  await prisma.projectVisit.create({
    data: {
      visitorId,
      projectId,
      duration
    }
  })

  return { success: true }
})