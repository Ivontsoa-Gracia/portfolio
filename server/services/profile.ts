import { prisma } from '~~/server/utils/prisma'

export async function buildProfile(visitorId: string) {
  const visits = await prisma.projectVisit.findMany({
    where: { visitorId },
    include: {
      project: {
        include: {
          services: {
            include: { service: true }
          },
          stacks: {
            include: { stack: true }
          },
          domains: {
            include: { domain: true }
          }
        }
      }
    }
  })

  const profile: Record<string, number> = {}

  for (const visit of visits) {
    const project = visit.project
    const weight = visit.duration

    if (!project) continue

    // category
    if (project.category) {
      profile[project.category] =
        (profile[project.category] || 0) + weight
    }

    // services
    for (const ps of project.services || []) {
      const key = ps.service?.title
      if (!key) continue

      profile[key] = (profile[key] || 0) + weight
    }

    // stacks
    for (const ps of project.stacks || []) {
      const key = ps.stack?.name
      if (!key) continue

      profile[key] = (profile[key] || 0) + weight
    }

    // domains
    for (const pd of project.domains || []) {
      const key = pd.domain?.label
      if (!key) continue

      profile[key] = (profile[key] || 0) + weight
    }
  }

  return profile
}