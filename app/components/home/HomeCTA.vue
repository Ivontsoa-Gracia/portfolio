<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    <div class="aurora-bg">
      <div class="aurora-blob aurora-blob-1 opacity-20" />
      <div class="aurora-blob aurora-blob-2 opacity-15" />
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <p class="text-sm small-text font-medium mb-4">
        {{ cta.badge }}
      </p>

      <h2
        class="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6"
      >
        {{ cta.title }}
        <span class="gradient-text">
          {{ cta.highlight }}
        </span>
      </h2>

      <p class="text-lg text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed">
        {{ cta.description }}
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink to="/contact/quote" class="magnetic-btn magnetic-btn-primary">
          Discutons de votre projet

          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </NuxtLink>

        <NuxtLink to="/work" class="magnetic-btn magnetic-btn-secondary">
          Découvrir mes réalisations
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cta = {
  badge: "Collaborons",
  title: "Donnons vie à des projets",
  highlight: "d'exception",
  description:
    "J'accompagne les entreprises et les entrepreneurs dans la conception de produits numériques alliant stratégie, design et technologie.",
};
</script>
