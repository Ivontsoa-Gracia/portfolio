<template>
  <section class="relative bg-[#f1f1f1] px-6 md:p-28 py-12 overflow-hidden">
    <div class="relative z-10 mx-auto flex flex-col gap-16">
      <div class="flex flex-col gap-6">
        <p class="sous-titre">Vision / Mindset</p>

        <h1 class="heading">
          Construire des systèmes<br />
          qui créent de la valeur réelle
        </h1>

        <p class="text-black/60 text-sm leading-relaxed max-w-2xl">
          Ma vision ne se limite pas à créer des interfaces ou du code. Je
          construis des produits pensés comme des systèmes complets, capables
          d’évoluer, de résoudre un problème réel et de générer un impact
          concret.
        </p>
      </div>

      <div class="relative mt-6">
        <div
          class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-black/10"
        ></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-20">
          <div class="flex md:justify-end">
            <div class="flex gap-4 max-w-md md:text-right">
              <div
                class="w-3 h-3 rounded-full bg-[#9A0130] mt-2 shrink-0 md:order-last"
              ></div>

              <div class="flex flex-col gap-2">
                <h3 class="text-base md:text-lg font-semibold text-black">
                  Penser comme un créateur de produit
                </h3>
                <p class="text-black/60 text-sm leading-relaxed">
                  Chaque projet commence par un problème réel. Le but n’est
                  jamais de “faire un site”, mais de construire une solution
                  utile, adoptée et compréhensible.
                </p>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="flex gap-4 max-w-md">
              <div
                class="w-3 h-3 rounded-full bg-[#9A0130] mt-2 shrink-0"
              ></div>

              <div class="flex flex-col gap-2">
                <h3 class="text-base md:text-lg font-semibold text-black">
                  Systèmes avant interfaces
                </h3>
                <p class="text-black/60 text-sm leading-relaxed">
                  Une interface n’est que la surface visible. La vraie valeur
                  est dans la logique métier, les flux et l’architecture qui la
                  rendent possible.
                </p>
              </div>
            </div>
          </div>

          <div class="flex md:justify-end">
            <div class="flex gap-4 max-w-md md:text-right">
              <div
                class="w-3 h-3 rounded-full bg-[#9A0130] mt-2 shrink-0 md:order-last"
              ></div>

              <div class="flex flex-col gap-2">
                <h3 class="text-base md:text-lg font-semibold text-black">
                  Discipline & scalabilité
                </h3>
                <p class="text-black/60 text-sm leading-relaxed">
                  Un système bien pensé dès le départ évite la dette future. La
                  simplicité est une décision d’ingénierie, pas un style.
                </p>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="flex gap-4 max-w-md">
              <div
                class="w-3 h-3 rounded-full bg-[#9A0130] mt-2 shrink-0"
              ></div>

              <div class="flex flex-col gap-2">
                <h3 class="text-base md:text-lg font-semibold text-black">
                  Exigence & clarté
                </h3>
                <p class="text-black/60 text-sm leading-relaxed">
                  Chaque choix doit réduire la complexité. La clarté n’est pas
                  un objectif esthétique, c’est un principe de conception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="border-l-2 border-[#9A0130] pl-6 text-black/70 text-sm leading-relaxed"
      >
        Je ne me vois pas comme un simple exécutant, mais comme un concepteur de
        systèmes digitaux pensés pour durer. Je crée des produits clairs,
        évolutifs et utiles, avec une conviction simple : la technologie doit
        rester au service des humains, rendre les choses plus compréhensibles,
        et contribuer, même modestement, à un monde plus accessible et plus
        juste.
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  @apply bg-white border border-black/5 rounded-2xl p-6 flex flex-col gap-3
    transition duration-300 hover:-translate-y-1 hover:shadow-xl;
}

.card h3 {
  @apply text-black font-semibold text-base md:text-lg;
}

.card p {
  @apply text-black/60 text-sm leading-relaxed;
}
</style>
