<template>
  <section class="relative bg-[#f1f1f1] px-6 md:px-28 py-28 overflow-hidden">


    <div class="relative z-10 max-w-6xl mx-auto flex flex-col gap-16">

      <div class="flex flex-col gap-4 max-w-2xl">
        <p class="sous-titre">
          Services
        </p>

        <h2 class="heading">
          Conception et création<br />
          de produits digitaux
        </h2>

        <p class="text-black/60 text-sm md:text-lg leading-relaxed">
          J’interviens sur la conception, la structure et la réalisation de produits numériques, 
          avec une approche centrée système, clarté et impact utilisateur.
        </p>
      </div>

      <!-- SERVICES GRID -->
      <div class="grid md:grid-cols-3 gap-6">

        <!-- 1 -->
        <div class="group p-6 rounded-2xl border border-black/5 bg-[#FAFAFA] hover:bg-white hover:shadow-xl transition">
          <div class="flex flex-col gap-3">
            <p class="text-xs text-black/40 uppercase tracking-[0.2em]">
              Service 01
            </p>

            <h3 class="text-xl font-semibold text-black">
              UI / UX Design
            </h3>

            <p class="text-sm text-black/60 leading-relaxed">
              Conception d’interfaces claires, intuitives et orientées expérience utilisateur. 
              Chaque écran est pensé comme une partie d’un système global.
            </p>
          </div>
        </div>

        <!-- 2 -->
        <div class="group p-6 rounded-2xl border border-black/5 bg-[#FAFAFA] hover:bg-white hover:shadow-xl transition">
          <div class="flex flex-col gap-3">
            <p class="text-xs text-black/40 uppercase tracking-[0.2em]">
              Service 02
            </p>

            <h3 class="text-xl font-semibold text-black">
              Software Engineering
            </h3>

            <p class="text-sm text-black/60 leading-relaxed">
              Développement de systèmes web robustes, structurés et évolutifs. 
              Architecture propre, logique métier claire et performance.
            </p>
          </div>
        </div>

        <!-- 3 -->
        <div class="group p-6 rounded-2xl border border-black/5 bg-[#FAFAFA] hover:bg-white hover:shadow-xl transition">
          <div class="flex flex-col gap-3">
            <p class="text-xs text-black/40 uppercase tracking-[0.2em]">
              Service 03
            </p>

            <h3 class="text-xl font-semibold text-black">
              Brand Design
            </h3>

            <p class="text-sm text-black/60 leading-relaxed">
              Création d’identités visuelles cohérentes et modernes. 
              Une marque ne se limite pas à un logo, mais à un système visuel complet.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>