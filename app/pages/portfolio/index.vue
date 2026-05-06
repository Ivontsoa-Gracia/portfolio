<template>
  <section class="bg-[#f1f1f1] min-h-screen px-4 py-28 sm:p-28">
    <div class="mx-auto">
      <h1
        class="text-xl md:text-3xl font-semibold text-center text-black mb-10 tracking-wide"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Mes projets
      </h1>

      <div class="flex flex-wrap justify-center gap-2 mb-16">
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          @click="selectService('')"
          class="px-4 py-2 rounded-full text-sm transition border"
          :class="
            selectedService === ''
              ? 'bg-black text-white'
              : 'bg-white/40 text-black hover:bg-white'
          "
        >
          Tous
        </button>

        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          v-for="(service, index) in uniqueServices"
          :key="index"
          @click="selectService(service)"
          class="px-4 py-2 rounded-full text-sm transition border"
          :class="
            selectedService === service
              ? 'bg-black text-white'
              : 'bg-white/40 text-black hover:bg-white'
          "
        >
          {{ service }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          v-for="(proj, index) in filteredProjects"
          :key="index"
          class="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div class="relative overflow-hidden h-64">
            <img
              :src="proj.image[0].replace(/\.(jpg|jpeg|png)$/i, '.webp')"
              class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            ></div>
          </div>

          <div class="p-4 flex items-center justify-between">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-[#9A0130]">
                {{ proj.categorie }}
              </span>

              <h3 class="text-sm font-medium text-black line-clamp-1">
                {{ proj.titre }}
              </h3>
            </div>
          </div>

          <div
            class="absolute inset-0 bg-[#9A0130]/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center"
          >
            <NuxtLink
              :to="`/portfolio/${toSlug(proj.titre)}`"
              class="text-white text-sm tracking-wide border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Voir le projet
            </NuxtLink>
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

function toSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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
