<template>
  <section class="py-12 bg-[#030303] pt-14 sm:pt-48 min-h-screen">
    <div class="max-w-7xl mx-auto px-6">
      <h1
        class="text-4xl sm:text-3xl font-bold text-[#ECECEC] mb-8 texte text-center uppercase tracking-wide"
      >
        Mes projets
      </h1>

      <div
        class="flex flex-wrap gap-4 mb-24 justify-center text-sm sm:text-base texte"
      >
        <a
          href="#"
          @click.prevent="selectService('')"
          :class="[
            'relative px-3 py-1 text-[#ECECEC] transition-colors after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#ECECEC] after:transition-all',
            selectedService === ''
              ? 'after:w-full'
              : 'hover:after:w-full focus:after:w-full',
          ]"
        >
          Tous
        </a>

        <a
          v-for="(service, index) in uniqueServices"
          :key="index"
          href="#"
          @click.prevent="selectService(service)"
          :class="[
            'relative px-3 py-1 text-[#ECECEC] transition-colors after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#ECECEC] after:transition-all',
            selectedService === service
              ? 'after:w-full'
              : 'hover:after:w-full focus:after:w-full',
          ]"
        >
          {{ service }}
        </a>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 texte"
      >
        <div
          v-for="(proj, index) in filteredProjects"
          :key="index"
          class="relative bg-white/10 backdrop-blur-md rounded-sm shadow-sm cursor-pointer overflow-hidden transition transform hover:scale-105 group"
        >
          <img
            :src="proj.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')"
            :alt="proj.titre"
            class="w-full h-48 sm:h-56 md:h-64 object-cover"
          />

          <div
            class="absolute inset-0 bg-[#8249CC]/90 flex flex-col justify-center items-center p-4 text-center transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out"
          >
            <h3
              class="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 texte"
            >
              {{ proj.titre }}
            </h3>
            <p class="text-gray-200 text-xs sm:text-sm texte">
              {{ proj.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
import { ref, computed } from "vue";
import { portfolio } from "~/utils/portfolio.js";
import Footer from "~/components/Footer.vue";

const selectedService = ref("");

const uniqueServices = [...new Set(portfolio.map((p) => p.service))];

const filteredProjects = computed(() => {
  if (!selectedService.value) return portfolio;
  return portfolio.filter((p) => p.service === selectedService.value);
});

function selectService(service) {
  selectedService.value = service;
}
</script>

<style scoped>
.cursor-pointer {
  transition: all 0.3s ease;
}
.cursor-pointer:hover {
  transform: scale(1.03);
}

.logo-type {
  font-family: "AvenirLTProBlack", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
.texte {
  font-family: "Helvetica", sans-serif;
  letter-spacing: 2px;
}

.hover\:backdrop-blur-sm:hover img {
  @apply backdrop-blur-sm;
}
</style>
