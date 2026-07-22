<template>
  <div class="overflow-y-hidden overflow-x-hidden">
    <ContactHero />
    <ContactQuote />
    <ContactFAQ />
    <ContactCTA />
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import ContactHero from "~/components/contact/ContactHero.vue";
import ContactQuote from "~/components/contact/ContactQuote.vue";
import ContactFAQ from "~/components/contact/ContactFAQ.vue";
import ContactCTA from "~/components/contact/ContactCTA.vue";
import Footer from "~/components/Footer.vue";
</script>
