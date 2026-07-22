<template>
  <section class="relative py-8 lg:py-12">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-wrap gap-2 mb-12">
        <button
          v-for="filter in filters"
          :key="filter.value"
          class="filter-tab"
          :class="{ active: activeFilter === filter.value }"
          @click="activeFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="project in filteredProjects"
          :key="project.slug"
          :to="`/work/${project.slug}`"
          class="glass-card glass-card-hover glow-border overflow-hidden group block"
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
                  borderColor: d.domain.color,
                  backgroundColor: d.domain.color + '20'
                }"
              >
                {{ d.domain.label }}
              </span>
            </div>

            <h3
              class="font-heading text-xl font-semibold mb-2 transition-colors group-hover:text-violet-300"
            >
              {{ project.titre }}
            </h3>

            <p class="text-sm text-white/40 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  projects: any[];
  services: any[];
}>();

const activeFilter = ref("all");

const filters = computed(() => {
  console.log("SERVICES :", JSON.stringify(props.services, null, 2));

  return [
    { label: "Tous les projets", value: "all" },
    ...props.services.map((s:any)=>({
      label:s.title,
      value:String(s.id)
    }))
  ];
});

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") return props.projects;
  return props.projects.filter((project: any) =>
    project.services?.some(
      (s: any) => String(s.service?.id) === activeFilter.value
    )
  );
});
</script>
