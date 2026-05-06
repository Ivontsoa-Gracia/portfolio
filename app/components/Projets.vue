<template>
  <section class="w-full bg-[#f1f1f1] px-6 md:px-20 py-20 flex justify-center">
    <div class="w-full max-w-6xl flex flex-col gap-12">
      <div class="flex flex-col items-center text-center">
        <span
          class="sous-titre"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Portfolio
        </span>

        <h2
          class="text-2xl md:text-3xl font-semibold text-black"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Mes projets
        </h2>
      </div>

      <div
        class="flex overflow-x-auto gap-2 justify-start md:justify-center pb-3"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          v-for="filter in ['all', ...services]"
          :key="filter"
          @click="selected = filter"
          class="relative px-4 py-1.5 rounded-full text-sm cursor-pointer transition-all duration-300 whitespace-nowrap"
          :class="
            selected === filter
              ? 'text-[#9A0130] font-medium'
              : 'text-black/50 hover:text-[#9A0130]'
          "
        >
          <span
            v-if="selected === filter"
            class="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#9A0130] rounded-full"
          ></span>

          {{ filter === "all" ? "Tous" : filter }}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          v-for="(proj, index) in visibleProjects"
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

      <div
        class="flex justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <button
          v-if="filtered.length > limit"
          class="btn-primary"
          @click="router.push('/portfolio')"
        >
          Voir plus de projets
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { portfolio } from "~/utils/portfolio";
const router = useRouter();

const selected = ref("all");
const limit = ref(6);

const showAll = ref({});

const favorites = ref({});

const toggleFavorite = (i) => {
  favorites.value[i] = !favorites.value[i];
};

// services uniques
const services = [...new Set(portfolio.map((p) => p.service))];

// filtrage
const filtered = computed(() => {
  if (selected.value === "all") return portfolio;
  return portfolio.filter((p) => p.service === selected.value);
});

// projets visibles (limite 6)
const visibleProjects = computed(() => {
  return filtered.value.slice(0, limit.value);
});

const loadMore = () => {
  limit.value = filtered.value.length;
};

const toggle = (i) => {
  showAll.value[i] = !showAll.value[i];
};

const getVisibleStack = (p, i) => {
  if (showAll.value[i]) return p.stack;
  return p.stack.slice(0, 4);
};

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
div::-webkit-scrollbar {
  display: none;
}
</style>
