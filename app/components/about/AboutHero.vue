<template>
  <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
    <div class="aurora-bg">
      <div class="aurora-blob aurora-blob-1" style="opacity: 0.15"></div>
      <div class="aurora-blob aurora-blob-2" style="opacity: 0.1"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
        <div class="lg:col-span-2">
          <div class="relative">
            <div
              class="absolute -inset-4 bg-gradient-to-br from-[var(--accent-salmon)]/80 to-[var(--accent-pink)]/80 rounded-3xl blur-2xl"
            ></div>
            <img
              src="/Messenger_creation_5F4AF3AE-6DF0-4059-AFCF-81F297015913.png"
              alt="Profile"
              class="relative w-full rounded-2xl border border-white/10 object-cover aspect-[4/5]"
            />
          </div>
        </div>

        <div class="lg:col-span-3">
          <div class="">
            <p class="text-sm small-text font-medium mb-4">À propos</p>
            <h1
              class="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Concevoir des
              <span class="gradient-text">expériences digitales</span> qui
              allient design et performance
            </h1>
          </div>

          <div class="-delay-1 space-y-4 text-white/50 leading-relaxed">
            <p>
              Je suis développeur full stack, designer UI/UX et brand designer,
              passionnée par la création de produits numériques qui allient
              esthétique, performance et utilité. Pour moi, les meilleures
              expériences digitales naissent de la rencontre entre l'excellence
              technique et le design stratégique.
            </p>

            <p>
              Mon approche repose avant tout sur la compréhension : comprendre
              les utilisateurs, les objectifs d'une entreprise et les enjeux
              d'un projet. Chaque réalisation est pensée pour répondre à un
              besoin réel tout en offrant une expérience fluide, cohérente et
              mémorable.
            </p>

            <p>
              Au fil de mes projets, j'ai accompagné des entrepreneurs, des
              startups et des entreprises dans la conception de sites web,
              d'applications et d'identités visuelles. J'apprécie
              particulièrement les défis qui demandent autant de créativité que
              de réflexion technique, et qui permettent de transformer une idée
              en un produit concret et impactant.
            </p>
          </div>

          <div
            class="flex flex-wrap items-center gap-4 mt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <a
              href="/cv/CV_Gracia_Andriamihamina_2026.pdf"
              download
              class="magnetic-btn magnetic-btn-primary flex items-center gap-2"
            >
              <i class="bx bx-download text-xl"></i>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
