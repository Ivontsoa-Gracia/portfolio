<template>
  <ServicesHero />
  <Services />
  <ServicesProcess />
  <ServicesPricing class="hidden"/>
  <ServicesCTA />
  <Footer />
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import ServicesHero from "~/components/services/ServicesHero.vue";
import Services from "~/components/services/Services.vue";
import ServicesProcess from "~/components/services/ServicesProcess.vue";
import ServicesPricing from "~/components/services/ServicesPricing.vue";
import ServicesCTA from "~/components/services/ServicesCTA.vue";
import Footer from "~/components/Footer.vue";
</script>
