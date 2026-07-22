<template>
  <section class="relative py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div
        class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16"
      >
        <div>
          <p class="text-sm small-text font-medium mb-2">Réalisations</p>
          <h2
            class="font-heading text-3xl lg:text-4xl font-bold tracking-tight"
          >
            Projets phares
          </h2>
        </div>
        <NuxtLink
          to="/work"
          class="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
        >
          Découvrir tous les projets
          <Icon
            name="lucide:arrow-right"
            class="w-4 h-4 group-hover:translate-x-1 transition-transform"
          />
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 gap-6 stagger-children">
        <NuxtLink
          v-for="project in projects"
          :key="project.slug"
          :to="`/work/${project.slug}`"
          class="project-card glass-card glass-card-hover glow-border overflow-hidden group block"
        >
          <div class="project-card-img aspect-[16/10] overflow-hidden">
            <img
              :src="project.images?.[0]?.url"
              :alt="project.titre"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="d in project.domains"
                :key="d.domain.key"
                class="text-xs px-2.5 py-1 rounded-full border"
                :style="{
                  color: d.domain.color,
                  borderColor: d.domain.color + '60',
                  backgroundColor: d.domain.color + '15',
                }"
              >
                {{ d.domain.label }}
              </span>
            </div>
            <h3
              class="font-heading text-xl text-white font-semibold mb-2 group-hover:text-[#FFD1C2] transition-colors"
            >
              {{ project.titre }}
            </h3>
            <p class="text-sm text-white/40 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>
          </div>
        </NuxtLink>

        <NuxtLink
          v-if="featured"
          :to="`/work/${featured.slug}`"
          class="project-card glass-card glass-card-hover glow-border overflow-hidden group block md:col-span-2"
        >
          <div class="grid md:grid-cols-2">
            <div
              class="project-card-img aspect-[16/10] md:aspect-auto overflow-hidden"
            >
              <img
                :src="featured.images?.[0]?.url"
                :alt="featured.titre"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div class="p-8 flex flex-col justify-center">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="d in featured.domains"
                  :key="d.domain.key"
                  class="text-xs px-2.5 py-1 rounded-full border"
                  :style="{
                    color: d.domain.color,
                    borderColor: d.domain.color + '60',
                    backgroundColor: d.domain.color + '15',
                  }"
                >
                  {{ d.domain.label }}
                </span>
              </div>
              <h3
                class="font-heading text-white text-2xl lg:text-3xl font-semibold mb-3 group-hover:text-[#FFD1C2] transition-colors"
              >
                {{ featured.titre }}
              </h3>
              <p
                class="text-sm text-white/40 leading-relaxed mb-8 line-clamp-6"
              >
                {{ featured.description }}
              </p>
              <div class="flex items-center gap-6 text-sm">
                <div>
                  <span class="text-white/80 font-semibold">
                    {{ featured.metric1 }}
                  </span>
                </div>

                <div>
                  <span class="text-white/80 font-semibold">
                    {{ featured.metric2 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  projects: { type: Array, default: () => [] },
  featured: { type: Object, default: null },
});

function toSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
</script>
