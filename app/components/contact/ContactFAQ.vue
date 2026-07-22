<template>
  <main>
    <section class="relative py-24 bg-[#08080c]">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <p class="text-sm small-text font-medium mb-2">FAQ</p>

          <h2 class="font-heading text-3xl lg:text-4xl font-bold">
            Questions fréquentes
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="glass-card p-6 rounded-xl"
          >
            <h3 class="font-heading font-semibold mb-3">
              {{ faq.question }}
            </h3>

            <p class="text-sm text-white/40 leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: "Sur quels types de projets travailles-tu ?",
    answer:
      "Je travaille sur des produits digitaux, des plateformes SaaS, du branding, des systèmes de design et des applications sur mesure.",
  },

  {
    question: "Quels sont tes délais habituels ?",
    answer:
      "La plupart des projets durent entre 2 et 12 semaines, selon leur portée et leur complexité.",
  },

  {
    question: "Travaille-tu à l’international ?",
    answer:
      "Oui. La majorité des collaborations se font à distance avec des clients du monde entier.",
  },
];
</script>
