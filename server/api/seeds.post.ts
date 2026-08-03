// iwr -Uri "http://localhost:3000/api/seeds" -Method POST

import { prisma } from "~~/server/utils/prisma";
export default defineEventHandler(async () => {
  await prisma.projectService.deleteMany();
  await prisma.projectStack.deleteMany();
  await prisma.projectDomain.deleteMany();

  await prisma.projectImage.deleteMany();
  await prisma.projectVisit.deleteMany();

  await prisma.service.deleteMany();
  await prisma.stack.deleteMany();
  await prisma.domain.deleteMany();
  await prisma.process.deleteMany();

  // ======================
  // SERVICES
  // ======================
  await prisma.service.createMany({
    data: [
      {
        title: "UI/UX Design",
        description:
          "Conception d'interfaces modernes, intuitives et centrées utilisateur",
      },
      {
        title: "Développement",
        description:
          "Création de sites et applications performantes et responsives",
      },
      {
        title: "Branding",
        description:
          "Création d'identité visuelle forte et cohérente pour les marques",
      },
    ],
  });

  // ======================
  // STACKS
  // ======================
  await prisma.stack.createMany({
    data: [
      { name: "Nuxt.js" },
      { name: "Vue.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "Lottie" },
      { name: "Figma" },
      { name: "Spring Boot" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Laravel" },
      { name: "Javascript" },
      { name: "MySQL" },
      { name: "Dolibarr" },
      { name: "Django" },
      { name: "Adobe XD" },
    ],
  });

  // ======================
  // DOMAINS
  // ======================
  await prisma.domain.createMany({
    data: [
      // ======================
      // DEVELOPMENT
      // ======================
      {
        key: "full-stack",
        label: "Full-Stack",
        color: "#FF9671",
      },
      {
        key: "frontend",
        label: "Front-end",
        color: "#FF6F91",
      },
      {
        key: "backend",
        label: "Back-end",
        color: "#E85D75",
      },
      {
        key: "bdd",
        label: "Base de données",
        color: "#F4A261",
      },
      {
        key: "api",
        label: "API",
        color: "#D95D8A",
      },
      {
        key: "deploiement",
        label: "Déploiement",
        color: "#C76D9B",
      },
      {
        key: "maintenance",
        label: "Maintenance",
        color: "#E76F51",
      },

      // ======================
      // UI / UX DESIGN
      // ======================
      {
        key: "recherche",
        label: "Recherche utilisateur",
        color: "#FFB4A2",
      },
      {
        key: "architecture-information",
        label: "Architecture de l'information",
        color: "#FEC89A",
      },
      {
        key: "user-flow",
        label: "User Flow",
        color: "#F9C74F",
      },
      {
        key: "wireframes",
        label: "Wireframes",
        color: "#FFC8DD",
      },
      {
        key: "prototypes",
        label: "Prototypage",
        color: "#FFAFCC",
      },
      {
        key: "ui-design",
        label: "UI Design",
        color: "#CDB4DB",
      },
      {
        key: "design-system",
        label: "Design System",
        color: "#B5838D",
      },
      {
        key: "responsive-design",
        label: "Responsive Design",
        color: "#84A59D",
      },
      {
        key: "accessibilite",
        label: "Accessibilité",
        color: "#6D597A",
      },
      {
        key: "tests",
        label: "Tests utilisateurs",
        color: "#A06CD5",
      },
      
      // ======================
      // BRAND DESIGN
      // ======================
      {
        key: "naming",
        label: "Naming",
        color: "#FF758F",
      },
      {
        key: "logo",
        label: "Logo Design",
        color: "#F72585",
      },
      {
        key: "charte-graphique",
        label: "Charte graphique",
        color: "#FB8500",
      },
      {
        key: "identite",
        label: "Identité de marque",
        color: "#9D4EDD",
      },
    ],
  });

  // ======================
  // PROCESS
  // ======================
  await prisma.process.createMany({
    data: [
      {
        number: "01",
        title: "Analyse",
        description: "Compréhension des besoins et objectifs du projet",
      },
      {
        number: "02",
        title: "Design",
        description: "Création des maquettes et interface utilisateur",
      },
      {
        number: "03",
        title: "Développement",
        description: "Intégration et développement de la solution",
      },
      {
        number: "04",
        title: "Livraison",
        description: "Tests, optimisation et mise en production",
      },
    ],
  });

  return {
    success: true,
    message: "Database seeded successfully",
  };
});
