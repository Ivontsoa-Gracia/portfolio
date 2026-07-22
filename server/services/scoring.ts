export function scoreProject(project: any, profile: Record<string, number>) {
    let score = 0
  
    // catégorie (très important)
    if (project.category) {
      score += (profile[project.category] || 0) * 3
    }
  
    // services
    for (const service of project.services || []) {
      score += (profile[service.name] || 0) * 2
    }
  
    // stacks
    for (const stack of project.stacks || []) {
      score += (profile[stack.name] || 0) * 1
    }
  
    // domains
    for (const domain of project.domains || []) {
      score += (profile[domain.name] || 0) * 2
    }
  
    return score
  }