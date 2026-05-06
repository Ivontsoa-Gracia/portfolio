<template>
  <section class="relative bg-[#F1F1F1] px-6 md:px-28 py-28 overflow-hidden">
    <div class="relative z-10 mx-auto max-w-5xl flex flex-col gap-14">
      <div class="flex flex-col gap-4 max-w-2xl">
        <p class="sous-titre">
          Résultats / impact
        </p>

        <h2 class="heading">
          Des systèmes construits, pas seulement des interfaces
        </h2>

        <p class="text-black/60 text-sm md:text-lg leading-relaxed">
          Chaque projet est pensé comme une solution complète, avec une logique
          produit, technique et utilisateur.
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-6">
        <div class="stat">
          <p class="number">10+</p>
          <p class="label">Projets réalisés</p>
        </div>

        <div class="stat">
          <p class="number">5+</p>
          <p class="label">Systèmes web</p>
        </div>

        <div class="stat">
          <p class="number">6+</p>
          <p class="label">Identités de marque</p>
        </div>

        <div class="stat">
          <p class="number">3</p>
          <p class="label">Domaines maîtrisés</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stat {
  @apply bg-white border border-black/5 rounded-2xl p-6 flex flex-col gap-2
    text-center transition hover:-translate-y-1 hover:shadow-lg;
}

.number {
  @apply text-3xl font-semibold text-[#9A0130];
}

.label {
  @apply text-sm text-black/60;
}
</style>
