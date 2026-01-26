<template>
  <div class="min-h-screen bg-white text-black overflow-y-hidden">
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import Contact from "~/components/Contact.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.link {
  @apply text-white hover:text-gray-300 transition duration-300;
}
.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
</style>
