<template>
  <section class="w-full px-6 md:px-20 py-20 bg-[#030303] text-white">
    <div class="max-w-4xl mb-14">
      <h2
        class="text-3xl md:text-4xl font-semibold mb-4 texte uppercase tracking-wide"
      >
        Compétences
      </h2>
      <p class="text-sm md:text-base opacity-80 leading-relaxed">
        Je développe des sites et applications web en mettant l’accent sur
        l’expérience utilisateur et le design. Mon approche combine logique
        technique et sens du détail visuel : je crée des interfaces fluides,
        intuitives et esthétiques, où chaque interaction est pensée pour être
        agréable et efficace. Mon objectif est de transformer des idées en
        expériences digitales cohérentes et mémorables.
      </p>
    </div>

    <section class="flex flex-col md:flex-row gap-3 min-h-[420px]">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="activeIndex = index"
        class="group relative flex cursor-pointer overflow-hidden rounded-2xl transition-all duration-500"
        :class="
          activeIndex === index
            ? 'flex-[4] bg-gradient-custom'
            : 'flex-1 bg-[#1A1921]'
        "
      >
        <div class="flex flex-col justify-between items-center py-6 px-3">
          <span
            class="text-lg font-semibold uppercase tracking-wide writing-mode opacity-80"
          >
            {{ item.title }}
          </span>

          <i :class="`bx ${item.sectionIcon} text-2xl`"></i>
        </div>

        <div
          class="flex flex-col justify-end p-6 transition-opacity duration-300 z-50"
          :class="activeIndex === index ? 'opacity-100' : 'opacity-0'"
        >
          <h3 class="text-lg font-semibold mb-6">
            {{ item.heading }}
          </h3>

          <div v-if="item.skills" class="grid grid-cols-3 gap-x-6 gap-y-6">
            <div
              v-for="(skill, i) in item.skills"
              :key="i"
              class="flex flex-col items-center text-center"
            >
              <img
                :src="skill.logo"
                :alt="skill.name"
                class="h-8 md:h-10 object-contain mb-2"
              />
              <span class="text-sm opacity-90">
                {{ skill.name }}
              </span>
            </div>
          </div>

          <p v-else class="text-sm leading-relaxed opacity-80">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

const items = [
  {
    title: "Soft Skills",
    heading: "Compétences humaines",
    sectionIcon: "bx-user",
    description:
      "Autonomie, organisation, sens des responsabilités, engagement et capacité d’apprentissage rapide.",
  },

  {
    title: "Méthodes",
    heading: "Méthodologies de travail",
    sectionIcon: "bx-check-shield",
    description: "Méthodologie Agile / Scrum.",
  },

  {
    title: "Langages",
    heading: "Langages de programmation",
    sectionIcon: "bx-code-alt",
    skills: [
      { name: "Java", logo: "/logos/java.png" },
      { name: "PHP", logo: "/logos/php.png" },
      { name: "JavaScript", logo: "/logos/javascript.png" },
      { name: "TypeScript", logo: "/logos/typescript.png" },
      { name: "HTML5", logo: "/logos/html5.png" },
      { name: "CSS3", logo: "/logos/css3.png" },
    ],
  },

  {
    title: "Back-end",
    heading: "Frameworks Back-end",
    sectionIcon: "bx-server",
    skills: [
      { name: "Django", logo: "/logos/django.png" },
      { name: "Laravel", logo: "/logos/laravel.png" },
      { name: "Spring Boot", logo: "/logos/spring.png" },
    ],
  },

  {
    title: "Front-end",
    heading: "Frameworks & Tech Front-end",
    sectionIcon: "bx-layout",
    skills: [
      { name: "Nuxt.js", logo: "/logos/nuxt.png" },
      { name: "Vue.js", logo: "/logos/vuejs.png" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
      { name: "Bootstrap", logo: "/logos/bootstrap.png" },
    ],
  },

  {
    title: "Bases de données",
    heading: "Bases de données",
    sectionIcon: "bx-data",
    skills: [
      { name: "MySQL", logo: "/logos/mysql.png" },
      { name: "PostgreSQL", logo: "/logos/postgres.png" },
    ],
  },

  {
    title: "Outils",
    heading: "Outils de développement",
    sectionIcon: "bx-wrench",
    skills: [
      { name: "Git", logo: "/logos/git.png" },
      { name: "GitHub", logo: "/logos/github.webp" },
      { name: "Postman", logo: "/logos/postman.png" },
    ],
  },

  {
    title: "Design",
    heading: "Design & UI / UX",
    sectionIcon: "bx-palette",
    skills: [
      { name: "Illustrator", logo: "/logos/illustrator.png" },
      { name: "Photoshop", logo: "/logos/photoshop.png" },
      { name: "InDesign", logo: "/logos/indesign.png" },
      { name: "Figma", logo: "/logos/figma.png" },
    ],
  },
];
</script>

<style scoped>
.writing-mode {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.bg-gradient-custom {
  background: #1a1921;
  position: relative;
}

.bg-gradient-custom::after {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  bottom: -200px;
  right: -150px;
  background: radial-gradient(
    circle,
    rgba(130, 73, 204, 0.5) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.texte {
  font-family: "Helvetica", sans-serif;
  letter-spacing: 2px;
}
</style>
