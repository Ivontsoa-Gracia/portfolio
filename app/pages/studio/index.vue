<template>
  <div class="min-h-screen text-black overflow-y-hidden overflow-x-hidden">
    <AboutHero />
    <AboutJourney />
    <AboutPhilosophy />
    <AboutValues />
    <AboutCTA />
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import AboutHero from "~/components/about/AboutHero.vue";
import AboutJourney from "~/components/about/AboutJourney.vue";
import AboutPhilosophy from "~/components/about/AboutPhilosophy.vue";
import AboutValues from "~/components/about/AboutValues.vue";
import AboutCTA from "~/components/about/AboutCTA.vue";
import Footer from "~/components/Footer.vue";
</script>

