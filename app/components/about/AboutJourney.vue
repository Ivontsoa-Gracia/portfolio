<template>
  <section class="relative py-24 lg:py-32 bg-[#08080c]">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-sm small-text font-medium mb-2">Parcours</p>

        <h2 class="font-heading text-3xl lg:text-4xl font-bold tracking-tight">
          Expérience & évolution
        </h2>
      </div>

      <div class="relative">
        <div class="timeline-line" />

        <div
          v-for="(item, index) in journeys"
          :key="item.title"
          class="relative pl-16"
          :class="{ 'pb-16': index !== journeys.length - 1 }"
        >
          <div class="timeline-dot" :class="{ active: item.current }" />

          <div
            class="glass-card p-6 rounded-xl hover:border-[#FF9671]/20 transition-all duration-300"
          >
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <span
                v-if="item.current"
                class="text-xs px-2.5 py-1 rounded-full bg-[#FF9671]/10 small-text border border-[#FF9671]/20"
              >
                Current
              </span>

              <span class="text-xs text-white/30">
                {{ item.period }}
              </span>
            </div>

            <h3 class="font-heading text-lg font-semibold mb-1">
              {{ item.title }}
            </h3>

            <p class="text-sm text-white/40 mb-3">
              {{ item.company }}
            </p>

            <p class="text-sm text-white/40 leading-relaxed">
              {{ item.description }}
            </p>

            <a
              v-if="item.credential"
              :href="item.credential.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 mt-4 text-sm small-text hover:underline"
            >
              {{ item.credential.label }}
              <Icon name="lucide:external-link" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const journeys = [
  // {
  //   current: true,
  //   period: "2026 — Aujourd'hui",
  //   title: "Master en Informatique",
  //   company: "IT University · Madagascar",
  //   description:
  //     "Spécialisation en ingénierie logicielle, Machine Learning et intelligence artificielle, avec une approche centrée sur l’innovation, les données et l’expérience utilisateur.",
  // },
  {
    current: true,
    period: "2025 — 2026",
    title: "Développeur Full Stack & Product Designer",
    company: "Entreprise · Madagascar",
    description:
      "Création de produits numériques complets combinant stratégie produit, UX/UI design, identité visuelle, développement d’applications web et mise en production de solutions performantes.",
  },
  {
    current: false,
    period: "2022 — 2026",
    title: "Licence en Informatique",
    company: "IT University · Graphic Design et Communication Digitale",
    description:
      "Formation polyvalente axée sur la conception et le développement de solutions numériques, combinant ingénierie logicielle, UI/UX design, design graphique, communication digitale et conception de produits digitaux.",
    credential: {
      label: "Vérification du diplôme",
      url: "https://www.ituniversity-mg.com/page/check.php?id=xLemjRbmZr3",
    },
  },
];
</script>
