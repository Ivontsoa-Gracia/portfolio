<template>
  <div class="min-h-screen bg-white text-black overflow-y-hidden">
    <Hero />
    <section id="about">
      <About />
    </section>
    <Competences />
    <Projets />
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Footer from "~/components/Footer.vue";
import Competences from "~/components/Competences.vue";
import Projets from "~/components/Projets.vue";
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
