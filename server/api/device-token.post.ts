import { prisma } from "~~/server/utils/prisma"

export default defineEventHandler(async (event) => {

  const { token, platform } = await readBody(event)

  if (!token) {
    throw createError({
      statusCode: 400,
      statusMessage: "Token manquant"
    })
  }

  const device = await prisma.deviceToken.upsert({
    where: {
      token
    },
    update: {
      platform
    },
    create: {
      token,
      platform
    }
  })

  return {
    success: true,
    device
  }

})