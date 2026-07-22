<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    <div class="aurora-bg">
      <div class="aurora-blob aurora-blob-1" style="opacity: 0.15" />
    </div>

    <div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
      <h2
        class="font-heading text-4xl lg:text-5xl font-bold tracking-tight mb-6"
      >
        Envie de travailler
        <span class="gradient-text">ensemble ?</span>
      </h2>

      <p class="text-white/40 leading-relaxed max-w-xl mx-auto mb-10">
        Je suis toujours ouverte aux nouvelles idées, aux projets ambitieux et
        aux collaborations porteuses de sens.
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink to="/contact" class="magnetic-btn magnetic-btn-primary">
          Contactez-moi

          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
