<template>
  <section
    class="w-full h-auto max-h-[1500px] px-6 md:px-20 py-12 bg-[#030303] text-white relative"
  >
    <div
      class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 sm:gap-0"
    >
      <h2 class="text-3xl sm:text-4xl font-bold texte" data-aos="fade-up">
        Mes projets
      </h2>
      <button
        @click="goToPortfolio"
        class="relative text-white transition flex items-center gap-2 group"
        data-aos="fade-up"
      >
        <span
          class="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
        >
          Voir plus de projets
        </span>
        <i
          class="bx bx-right-arrow-alt text-lg transition-transform duration-300 group-hover:translate-x-1"
        ></i>
      </button>
    </div>

    <div
      class="hidden sm:grid grid-cols-12 grid-rows-6 gap-4 max-h-[900px] overflow-hidden"
    >
      <div
        v-for="(proj, i) in firstProjects"
        :key="i"
        :class="
          getColRowClass(i) +
          ' rounded-2xl overflow-hidden shadow-md relative group cursor-pointer'
        "
      >
        <img :src="proj.image" alt="" class="w-full h-full object-cover" />
        <Overlay :proj="proj" />
      </div>
    </div>

    <div class="sm:hidden relative">
      <div
        ref="slider"
        class="flex transition-transform duration-700 ease-in-out gap-4"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div
          v-for="(proj, index) in firstProjects"
          :key="index"
          class="flex-shrink-0 h-64 relative overflow-hidden rounded-2xl shadow-md"
          :style="{ width: `calc(100% - 1rem)` }"
        >
          <img
            :src="proj.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')"
            alt=""
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-[#131629]/50 flex flex-col justify-end p-4"
          >
            <h3 class="text-white font-bold logo-type">{{ proj.titre }}</h3>
            <p class="text-gray-200 text-sm">{{ proj.service }}</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-4 gap-2">
        <span
          v-for="(proj, index) in firstProjects"
          :key="'dot-' + index"
          @click="activeIndex = index"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="activeIndex === index ? 'bg-white' : 'bg-gray-500/50'"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { portfolio } from "~/utils/portfolio.js";
import Overlay from "~/components/Overlay.vue";
import { useRouter } from "vue-router";

const router = useRouter();
function goToPortfolio() {
  router.push("/portfolio");
}

const firstProjects = portfolio.slice(0, 6);

const activeIndex = ref(0);
let interval = null;
onMounted(() => {
  interval = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % firstProjects.length;
  }, 3000);
});
onBeforeUnmount(() => {
  clearInterval(interval);
});

function getColRowClass(i) {
  switch (i) {
    case 0:
      return "col-span-4 row-span-8 bg-purple-600";
    case 1:
      return "col-span-8 row-span-4 bg-emerald-500";
    case 2:
      return "col-span-4 row-span-4 bg-pink-500";
    case 3:
      return "col-span-4 row-span-4 bg-yellow-500";
    case 4:
      return "col-span-8 row-span-4 bg-blue-500";
    case 5:
      return "col-span-4 row-span-4 bg-red-500";
    default:
      return "col-span-4 row-span-4 bg-gray-700";
  }
}
</script>

<style scoped>
.texte {
  font-family: "Helvetica", sans-serif;
  letter-spacing: 2px;
}
</style>
