<template>
  <section class="w-full px-6 md:px-28 py-28 bg-[#f1f1f1]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-14">
      <!-- LEFT INTRO -->
      <div class="md:col-span-2 flex flex-col gap-6 sticky top-24">
        <div class="flex flex-col gap-4">
          <p class="sous-titre">Expertise</p>

          <h2 class="heading">
            Une approche produit<br />
            centrée sur la structure
          </h2>

          <p class="text-black/60 text-sm leading-relaxed max-w-xl">
            Je travaille à la jonction entre interface, logique métier et
            structure technique. L’objectif n’est pas de produire des écrans,
            mais de concevoir des systèmes cohérents, capables d’évoluer dans le
            temps.
          </p>
        </div>

        <div
          class="border-l border-black/10 pl-5 text-sm text-black/60 leading-relaxed max-w-lg"
        >
          Un bon produit ne se voit pas uniquement dans son interface, mais dans
          la clarté de son organisation interne.
        </div>
      </div>

      <div class="md:col-span-3 flex flex-col gap-10">
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="card">
            <h3>Interface & expérience produit</h3>
            <p>
              Conception d’interfaces simples, cohérentes et orientées
              utilisateur. Chaque écran est pensé comme une partie d’un système
              global.
            </p>
          </div>

          <div class="card">
            <h3>Architecture système</h3>
            <p>
              Structuration des applications autour de logique métier claire,
              découplée et évolutive dans le temps.
            </p>
          </div>

          <div class="card">
            <h3>Couche données</h3>
            <p>
              Modélisation et organisation des données pour garantir cohérence,
              performance et évolutivité.
            </p>
          </div>

          <div class="card">
            <h3>Exécution technique</h3>
            <p>
              Implémentation avec des outils modernes pour livrer des produits
              fiables, rapides et maintenables.
            </p>
          </div>
        </div>

        <div class="pt-6 border-t border-black/10">
          <p class="sous-titre mb-4">Technologies</p>

          <div class="flex flex-wrap gap-2">
            <span class="badge">Nuxt</span>
            <span class="badge">Tailwind</span>
            <span class="badge">Django</span>
            <span class="badge">Spring Boot</span>
            <span class="badge">Laravel</span>
            <span class="badge">PostgreSQL</span>
            <span class="badge">Git</span>
            <span class="badge">Figma</span>
            <span class="badge">Illustrator</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  @apply bg-white border border-black/5 rounded-2xl p-6 flex flex-col gap-3
  hover:-translate-y-1 transition duration-300;
}

.card h3 {
  @apply text-black font-medium text-base;
}

.card p {
  @apply text-black/60 text-sm leading-relaxed;
}
</style>
