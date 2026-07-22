<template>
  <ProjectsHero />
  <div v-if="isLoading" class="max-w-7xl mx-auto px-6 lg:px-8 py-12">
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="i in 4" :key="i" class="glass-card overflow-hidden">
        <div class="aspect-[16/10] bg-white/10 animate-pulse" />
        <div class="p-6 flex flex-col gap-3">
          <div class="h-4 w-24 bg-white/10 animate-pulse rounded-full" />
          <div class="h-6 w-3/4 bg-white/10 animate-pulse rounded" />
          <div class="h-4 w-full bg-white/10 animate-pulse rounded" />
        </div>
      </div>
    </div>
  </div>
  <Projects v-else :projects="projects" :services="services" />
  <ProjectsCTA />
  <Footer />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

import { ref, onMounted } from "vue";

const projects = ref<any[]>([]);
const services = ref<any[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  const [projectsData, servicesData] = await Promise.all([
    $fetch("/api/projects"),
    $fetch("/api/services"),
  ]);
  projects.value = projectsData as any[];
  services.value = servicesData as any[];
  isLoading.value = false;

  // console.log("✅ projects:", JSON.stringify(projects.value, null, 2));
  // console.log("✅ services:", JSON.stringify(services.value, null, 2));
  // console.log("✅ isLoading:", isLoading.value);
});
</script>
