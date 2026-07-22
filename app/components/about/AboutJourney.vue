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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const journeys = [
  {
    current: true,
    period: "2026 — Aujourd'hui",
    title: "Master en Informatique",
    company: "IT University · Madagascar",
    description:
      "Spécialisation en ingénierie logicielle, Machine Learning et intelligence artificielle, avec une approche centrée sur l’innovation, les données et l’expérience utilisateur.",
  },
  {
    current: false,
    period: "2025 — 2026",
    title: "Développeur Full Stack & Product Designer",
    company: "Entreprise · Madagascar",
    description:
      "Participation à la création de produits numériques, de la conception UX/UI jusqu’au développement et au déploiement des applications.",
  },
  {
    current: false,
    period: "2022 — 2025",
    title: "Licence en Informatique",
    company: "IT University · Madagascar",
    description:
      "Formation pluridisciplinaire combinant développement d'applications, UI/UX, design graphique, communication digitale et conception de produits numériques.",
  },
];
</script>
