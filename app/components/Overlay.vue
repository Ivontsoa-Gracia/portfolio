<template>
  <div
    class="absolute inset-0 bg-[#8249CC]/90 flex flex-col justify-end p-4 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
  >
    <h3 class="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 logo-type">
      {{ proj.titre }}
    </h3>
    <p class="text-gray-200 text-xs sm:text-sm texte">{{ proj.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  proj: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
.texte {
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}
</style>
