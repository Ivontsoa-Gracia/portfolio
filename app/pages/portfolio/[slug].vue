<template>
    <section class="py-12 bg-[#030303] min-h-screen pt-48">
      <div class="max-w-4xl mx-auto px-6">
        <button @click="$router.back()" class="mb-6 text-[#8249CC] hover:underline">
          ← Retour
        </button>
  
        <h1 class="text-4xl font-bold text-[#ECECEC] mb-6 uppercase tracking-wide">
          {{ project.titre }}
        </h1>
  
        <img
          :src="project.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')"
          :alt="project.titre"
          class="w-full rounded-lg mb-6 object-cover"
        />
  
        <p class="text-[#ECECEC] text-lg sm:text-xl leading-relaxed mb-6 text-justify">{{ project.description }}</p>
  
        <div class="mt-4 flex flex-wrap gap-3">
          <span
            v-for="(tech, index) in project.stack"
            :key="index"
            class="px-3 py-1 bg-[#8249CC] text-[#ECECEC] rounded-full text-sm font-medium"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>
    <Footer />
  </template>
  
  <script setup>
  definePageMeta({
  layout: "custom",
});
  import { useRoute } from 'vue-router';
  import { portfolio } from '~/utils/portfolio.js';
import Footer from "~/components/Footer.vue";
  
  const route = useRoute();
  const slug = route.params.slug;
  
  function toSlug(title) {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  
  const project = portfolio.find(p => toSlug(p.titre) === slug);
  
  if (!project) {
    throw new Error('Projet non trouvé');
  }
  </script>
  
  <style scoped>
  span {
    transition: all 0.2s ease;
  }
  span:hover {
    transform: scale(1.05);
    background-color: #8249CC/30;
  }
  </style>
  