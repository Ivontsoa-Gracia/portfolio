<template>
  <div
    class="absolute inset-0 bg-[#8249CC]/90 flex flex-col justify-end p-4 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
  >
    <NuxtLink
      :to="`/portfolio/${toSlug(proj.titre)}`"
      class="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 texte hover:underline"
    >
      {{ proj.titre }}
    </NuxtLink>

    <!-- <p class="text-gray-200 text-xs sm:text-sm texte">{{ proj.description }}</p> -->
  </div>
</template>

<script setup>
defineProps({
  proj: {
    type: Object,
    required: true,
  },
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

<style scoped>
.texte {
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}
</style>
