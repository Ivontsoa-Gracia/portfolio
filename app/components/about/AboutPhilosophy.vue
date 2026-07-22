<template>
  <section class="relative py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <p
          class="text-sm small-text font-medium mb-2 tracking-wide uppercase text-opacity-60"
        >
          Philosophie
        </p>

        <h2 class="font-heading text-3xl lg:text-4xl font-bold tracking-tight">
          Ma façon de penser
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="item in philosophies"
          :key="item.title"
          class="glass-card p-8 rounded-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6"
            :class="colorClasses[item.color].card"
          >
            <Icon
              :name="item.icon"
              class="w-6 h-6"
              :class="colorClasses[item.color].text"
            />
          </div>

          <h3 class="font-heading text-xl font-semibold mb-3">
            {{ item.title }}
          </h3>

          <p class="text-sm text-white/40 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const philosophies = [
  {
    title: "Penser avant de construire",
    description:
      "Chaque produit réussi commence par une compréhension profonde du problème. Je privilégie la recherche, la stratégie et les besoins utilisateurs avant d’écrire la moindre ligne de code.",
    icon: "lucide:lightbulb",
    color: "salmon",
  },
  {
    title: "Des systèmes plutôt que des écrans",
    description:
      "Je ne me limite pas à concevoir des pages. Je construis des systèmes évolutifs, des composants réutilisables et des expériences cohérentes capables de grandir avec le produit.",
    icon: "lucide:layers-3",
    color: "orange",
  },
  {
    title: "Création centrée sur l’humain",
    description:
      "La technologie doit rester intuitive. Mon objectif est de concevoir des produits utiles, accessibles et réellement agréables à utiliser au quotidien.",
    icon: "lucide:users",
    color: "pink",
  },
];

const colorClasses = {
  salmon: {
    card: "from-[#FF6F91]/20 to-[#FF9671]/20 group-hover:from-[#FF6F91]/30 group-hover:to-[#FF9671]/30",
    text: "text-[#FF6F91]",
  },
  orange: {
    card: "from-[#FF9671]/20 to-[#FFC75F]/20 group-hover:from-[#FF9671]/30 group-hover:to-[#FFC75F]/30",
    text: "text-[#FFC75F]",
  },
  pink: {
    card: "from-[#FF6F91]/20 to-[#FF8FA3]/20 group-hover:from-[#FF6F91]/30 group-hover:to-[#FF8FA3]/30",
    text: "text-[#FF8FA3]",
  },
};
</script>
