<template>
  <section
    class="mt-24 max-w-7xl mx-auto px-6 lg:px-8"
    v-if="recommendations?.length"
  >
    <div class="mb-10">
      <h2 class="font-heading text-4xl font-bold mb-8">Projets Similaires</h2>
      <p class="text-sm text-white/40 mt-1">
        Sélection personnalisée basée sur votre activité
      </p>
    </div>

    <div
      v-if="!recommendations?.length"
      class="text-white/40 border border-white/10 rounded-2xl p-6"
    >
      Aucun projet recommandé pour le moment
    </div>

    <div v-else class="grid md:grid-cols-3 gap-6">
      <div
        v-for="item in recommendations"
        :key="item.project.id"
        class="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
      >
        <div class="h-48 overflow-hidden">
          <img
            :src="item.project.images?.[0]?.url"
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div class="p-5">
          <h3 class="text-md font-semibold group-hover:text-white transition">
            {{ item.project.titre }}
          </h3>

          <p class="text-sm text-white/50 mt-2 line-clamp-2">
            {{ item.project.description }}
          </p>

          <div class="flex items-center justify-between mt-5">
            <NuxtLink :to="`/work/${item.project.slug}`">
              <span
                class="text-xs small-text group-hover:translate-x-1 transition"
              >
                Voir projet →
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- <div
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#FF9671]/5 via-transparent to-[#FF6F91]/5 pointer-events-none"
        /> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  recommendations: any[];
}>();
</script>
