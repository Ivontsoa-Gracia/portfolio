<template>
  <section class="w-full px-6 md:px-28 py-24 bg-[#F1F1F1]">

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

      <div class="md:col-span-1 flex flex-col gap-6 sticky top-24">

        <div class="flex flex-col gap-2">
  <p class="text-xs uppercase tracking-[0.3em] text-black/40">
    Expertise
  </p>

  <h3 class="text-lg font-medium text-black">
    Capacités
  </h3>

  <p class="text-sm text-black/50 leading-relaxed">
    Conception et développement de systèmes digitaux complets.
  </p>
</div>

        <button
          v-for="(item, index) in items"
          :key="index"
          @click="active = index"
          class="flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-300"
          :class="
            active === index
              ? 'bg-[#9A0130] text-white'
              : 'bg-white/40 text-black/60 hover:bg-black/5'
          "
        >
          <i :class="`bx ${item.icon}`"></i>
          <span>{{ item.title }}</span>
        </button>

      </div>

      <!-- MAIN CONTENT -->
      <div class="md:col-span-3 flex flex-col gap-10">

        <!-- HEADER -->
        <div class="flex flex-col gap-3">
          <h2 class="text-2xl md:text-3xl font-medium text-black">
            {{ items[active].heading }}
          </h2>

          <p class="text-black/50 text-sm md:text-base max-w-xl leading-relaxed">
            {{ items[active].description }}
          </p>
        </div>

        <!-- CONTENT -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">

          <div
            v-for="(skill, i) in items[active].skills"
            :key="i"
            class="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/50 border border-black/5 hover:-translate-y-1 hover:shadow-md transition"
          >
            <img :src="skill.logo" class="w-8 h-8" />
            <span class="text-xs text-black/60">{{ skill.name }}</span>
          </div>

        </div>

      </div>

      <!-- RIGHT PANEL -->
      <div class="md:col-span-1">

        <div class="p-6 rounded-2xl bg-white border border-black/5 sticky top-24">

          <p class="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
            Soft skills
          </p>

          <div class="flex flex-col gap-3 text-sm text-black/60">

            <span>Autonomie & exécution</span>
            <span>Organisation produit</span>
            <span>Résolution de problèmes</span>
            <span>Adaptabilité</span>
            <span>Apprentissage rapide</span>

          </div>

          <div class="mt-6 pt-6 border-t border-black/5 text-xs text-black/40 leading-relaxed">
            Je ne manipule pas seulement des outils.<br />
            Je conçois des systèmes complets.
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
    title: "Frontend",
    icon: "bx-layout",
    heading: "Interfaces & expériences produit",
    description:
      "Conception d’interfaces claires, évolutives et centrées utilisateur, intégrées dans une logique produit globale.",
    skills: [
      { name: "Nuxt", logo: "/logos/nuxt.png" },
      { name: "Vue", logo: "/logos/vuejs.png" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
    ],
  },

  {
    title: "Backend",
    icon: "bx-server",
    heading: "Architecture & logique métier",
    description:
      "Développement de systèmes backend robustes, structurés et pensés pour évoluer dans le temps.",
    skills: [
      { name: "Spring Boot", logo: "/logos/spring.png" },
      { name: "Laravel", logo: "/logos/laravel.png" },
      { name: "Django", logo: "/logos/django.png" },
    ],
  },

  {
    title: "Données",
    icon: "bx-data",
    heading: "Bases de données & structure",
    description:
      "Conception de structures de données cohérentes, optimisées et maintenables dans le temps.",
    skills: [
      { name: "PostgreSQL", logo: "/logos/postgres.png" },
      { name: "MySQL", logo: "/logos/mysql.png" },
    ],
  },

  {
    title: "Outils",
    icon: "bx-wrench",
    heading: "Outils de développement",
    description:
      "Environnement de développement moderne pour construire, tester et déployer efficacement.",
    skills: [
      { name: "Git", logo: "/logos/git.png" },
      { name: "GitHub", logo: "/logos/25231.png" },
      { name: "Postman", logo: "/logos/postman.png" },
    ],
  },

  {
    title: "Design",
    icon: "bx-palette",
    heading: "UI / UX & identité produit",
    description:
      "Création d’interfaces et d’identités visuelles cohérentes, orientées produit et expérience utilisateur.",
    skills: [
      { name: "Figma", logo: "/logos/figma.png" },
      { name: "Illustrator", logo: "/logos/illustrator.png" },
      { name: "Photoshop", logo: "/logos/photoshop.png" },
    ],
  },
];
</script>

<style scoped></style>
