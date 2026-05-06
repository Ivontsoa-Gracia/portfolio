<template>
  <section class="w-full px-6 md:px-28 py-12 sm:py-24 bg-[#F1F1F1]">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start"
    >
      <div
        class="md:col-span-1 flex flex-col gap-2 sticky top-24"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h3 class="sous-titre mb-3">Compétences</h3>

        <button
          v-for="(item, index) in items"
          :key="index"
          @click="active = index"
          class="flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all duration-300"
          :class="
            active === index
              ? 'bg-[#9A0130] text-white shadow-md'
              : 'bg-white/50 text-black/60 hover:bg-black/5'
          "
        >
          <i :class="`bx bxs-${item.sectionIcon.replace('bx-', '')}`"></i>
          <span class="truncate">{{ item.title }}</span>
        </button>
      </div>

      <div class="md:col-span-3 flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <h2
            class="text-2xl md:text-3xl font-semibold text-black"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {{ items[active].heading }}
          </h2>
          <p
            class="text-sm text-black/40"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Sélection de compétences et technologies maîtrisées
          </p>
        </div>

        <transition name="fade-slide" mode="out-in">
          <div :key="active">
            <div
              v-if="items[active].skills"
              class="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div
                v-for="(skill, i) in items[active].skills"
                :key="i"
                class="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/60 border border-black/5 hover:shadow-md hover:-translate-y-1 transition"
              >
                <img :src="skill.logo" class="w-8 h-8" />
                <span class="text-xs text-black/70">{{ skill.name }}</span>
              </div>
            </div>

            <div v-else class="flex flex-wrap gap-2">
              <span
                v-for="(word, i) in splitText(items[active].description)"
                :key="i"
                class="px-3 py-1 text-xs rounded-full bg-white/60 text-black/60 border border-black/5 hover:bg-black/5 transition"
              >
                {{ word }}
              </span>
            </div>
          </div>
        </transition>
      </div>

      <div class="md:col-span-1">
        <div
          class="p-5 rounded-2xl bg-white/60 border border-black/5 sticky top-24"
        >
          <h3
            class="sous-titre mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Soft Skills
          </h3>

          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 text-xs rounded-full bg-[#9A0130] text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Autonomie
            </span>

            <span
              class="px-3 py-1 text-xs rounded-full bg-white border border-[#9A0130]/20 text-[#9A0130]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Organisation
            </span>

            <span
              class="px-3 py-1 text-xs rounded-full bg-white border border-[#9A0130]/20 text-[#9A0130]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Responsabilité
            </span>

            <span
              class="px-3 py-1 text-xs rounded-full bg-white border border-[#9A0130]/20 text-[#9A0130]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Adaptabilité
            </span>

            <span
              class="px-3 py-1 text-xs rounded-full bg-white border border-[#9A0130]/20 text-[#9A0130]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Apprentissage rapide
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);

const toggle = (i) => {
  active.value = active.value === i ? null : i;
};

const splitText = (text) => {
  return text.split(",").map((t) => t.trim());
};

const items = [
  {
    title: "Langages",
    heading: "Langages de programmation",
    sectionIcon: "bx-code-alt",
    skills: [
      { name: "Java", logo: "/logos/java.png" },
      { name: "PHP", logo: "/logos/php.png" },
      // { name: "Python", logo: "/logos/python.png" },
      { name: "JavaScript", logo: "/logos/javascript.png" },
      { name: "TypeScript", logo: "/logos/typescript.png" },
      { name: "HTML5", logo: "/logos/html5.png" },
      { name: "CSS3", logo: "/logos/css3.png" },
    ],
  },

  {
    title: "Backend",
    heading: "Frameworks Back-end",
    sectionIcon: "bx-server",
    skills: [
      { name: "Django", logo: "/logos/django.png" },
      { name: "Laravel", logo: "/logos/laravel.png" },
      { name: "Spring Boot", logo: "/logos/spring.png" },
    ],
  },

  {
    title: "Frontend",
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
    title: "Méthodes",
    heading: "Méthodologies de travail",
    sectionIcon: "bx-check-shield",
    skills: [
      { name: "Agile", logo: "/logos/agile.png" },
      { name: "Scrum", logo: "/logos/scrum.png" },
    ],
  },

  {
    title: "Outils",
    heading: "Outils de développement",
    sectionIcon: "bx-wrench",
    skills: [
      { name: "Git", logo: "/logos/git.png" },
      { name: "GitHub", logo: "/logos/25231.png" },
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
      { name: "Adobe XD", logo: "/logos/xd.png" },
      { name: "Figma", logo: "/logos/figma.png" },
    ],
  },
];
</script>

<style scoped></style>
