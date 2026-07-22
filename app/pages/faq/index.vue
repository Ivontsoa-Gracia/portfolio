<template>
  <div class="min-h-screen text-black overflow-y-hidden overflow-x-hidden">
    <FAQ />
    <ServicesCTA />
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import ServicesCTA from "~/components/services/ServicesCTA.vue";
import Footer from "~/components/Footer.vue";
import FAQ from "~/components/FAQ.vue";
</script>
