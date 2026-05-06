<template>
  <section class="bg-[#f5f5f7] min-h-screen px-4 sm:p-28">
    <div class="mx-auto flex flex-col gap-6 sm:gap-20">
      <button
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        @click="$router.back()"
        class="text-sm text-black/50 hover:text-black w-fit mt-24"
      >
        ← Retour
      </button>

      <div class="flex flex-col gap-4">
        <h1
          class="text-xl md:text-3xl font-semibold text-black leading-tight"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {{ project.titre }}
        </h1>

        <p
          class="text-black/60 text-sm sm:text-base leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {{ project.description }}
        </p>
      </div>
      <div
        class="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <img
          :src="project.image[0]"
          class="w-full object-contain max-h-[500px] bg-white p-4"
        />
      </div>

      <!-- PROBLEM + IMAGE -->
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div class="flex flex-col gap-3">
          <p
            class="sous-titre"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Problème
          </p>
          <p
            class="text-black/70 text-sm sm:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {{ project.problem }}
          </p>
        </div>

        <div
          class="rounded-2xl overflow-hidden shadow-sm hover:scale-[1.02] transition"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <img
            :src="project.image[1] || project.image[0]"
            class="w-full object-contain max-h-[360px] bg-white p-4"
          />
        </div>
      </div>

      <!-- SOLUTION + IMAGE -->
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div
          class="rounded-2xl overflow-hidden shadow-sm hover:scale-[1.02] transition md:order-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <img
            :src="project.image[2] || project.image[0]"
            class="w-full object-contain max-h-[360px] bg-white p-4"
          />
        </div>

        <div class="flex flex-col gap-3 md:order-2">
          <p
            class="sous-titre"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Solution
          </p>
          <p
            class="text-black/70 text-sm sm:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {{ project.solution }}
          </p>
        </div>
      </div>

      <div v-if="project.image.slice(3).length" class="flex flex-col gap-6">
        <p
          class="sous-titre"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Aperçu du projet
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            v-for="(img, i) in project.image.slice(3)"
            :key="i"
            @click="openImage(img)"
            class="cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm hover:scale-105 transition"
          >
            <img :src="img" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      <div class="pt-10 border-t border-black/10 flex flex-col gap-3 pb-20">
        <p
          class="sous-titre"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Résultat
        </p>

        <p
          class="text-black/70 text-sm sm:text-base leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {{ project.result }}
        </p>

        <div
          class="flex flex-wrap gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <span v-for="(stack, i) in project.stack" :key="i" class="badge">
            {{ stack }}
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      @click="selectedImage = null"
    >
      <img
        :src="selectedImage"
        class="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
      />
    </div>
  </section>

  <Footer />
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import { useRoute } from "vue-router";
import { portfolio } from "~/utils/portfolio.js";
import Footer from "~/components/Footer.vue";

const route = useRoute();
const slug = route.params.slug;

const toSlug = (title) => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

const project = portfolio.find((p) => toSlug(p.titre) === slug);

if (!project) {
  throw new Error("Projet non trouvé");
}

const selectedImage = ref(null);

const openImage = (img) => {
  selectedImage.value = img;
};
</script>

<style scoped>
span {
  transition: all 0.2s ease;
}
span:hover {
  transform: scale(1.05);
  background-color: #8249CC/30;
}
button:focus {
  outline: none;
}
</style>
