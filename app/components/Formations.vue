<template>
  <section class="relative bg-[#f1f1f1] px-6 md:p-28 py-12 overflow-hidden">
    <div class="mx-auto grid lg:grid-cols-12 gap-24">
      <div class="lg:col-span-5 flex flex-col gap-12">
        <div class="flex flex-col gap-12">
          <p
            class="sous-titre"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Profil
          </p>

          <p
            class="text-sm text-black/60 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Profil hybride orienté produit, combinant développement logiciel et
            design d’expérience utilisateur. Approche centrée sur la clarté des
            systèmes, la qualité d’exécution et la cohérence des interfaces.
            Capable de travailler sur l’ensemble du cycle produit, de la
            conception à la mise en production, avec une attention particulière
            portée à la structure, la fiabilité et l’expérience utilisateur.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div
            class="p-5 rounded-xl bg-white border border-black/5 flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <!-- <div class="flex items-center gap-2 text-black/60">
              <i class="bx bxs-code-alt text-4xl text-[#9A0130]"></i>
            </div> -->

            <p class="text-4xl font-bold text-[#9A0130]">9+</p>
            <p class="text-sm font-semibold text-black">Projets réalisés</p>
            <p class="text-xs text-black/50">
              Projets multidisciplinaires (dev & design)
            </p>
          </div>

          <div
            class="p-5 rounded-xl bg-white border border-black/5 flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div class="flex items-center gap-2 text-black/60">
              <i class="bx bxs-graduation text-4xl text-[#9A0130]"></i>
            </div>

            <p class="text-sm font-semibold text-black">Licence</p>
            <p class="text-xs text-black/50">
              Graphic Design & Communication Digitale
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <p
            class="sous-titre"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Formation
          </p>

          <div
            class="space-y-4 border-l border-black/10 pl-5 flex flex-col gap-6"
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <p class="text-xs text-black/40">2022 - 2025</p>
              <p class="font-medium text-black">Licence en Informatique</p>
              <p class="text-sm text-black/60">
                Graphique Design & Communication Digitale - IT University
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <p class="text-xs text-black/40">En cours</p>
              <p class="font-medium text-black">Master en Informatique</p>
              <p class="text-sm text-black/60">
                Orienté systèmes & ingénierie logicielle avancée - IT University
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-7 flex flex-col gap-12">
        <p
          class="sous-titre"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Expérience
        </p>

        <div
          class="flex flex-col gap-3"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="flex justify-between items-start">
            <h3 class="text-base sm:text-lg font-semibold text-black">
              Système de marketplace agricole
            </h3>
            <span class="text-xs text-black/40">2025</span>
          </div>

          <div class="flex items-center gap-4 text-xs text-black/40">
            <span>Projet en entreprise</span>
            <span class="w-1 h-1 rounded-full bg-black/20"></span>
            <span>SmartSaha</span>
          </div>

          <p class="text-sm text-black/60 leading-relaxed">
            Conception et développement d’un système de marketplace pour le
            secteur agricole, visant à structurer la mise en relation entre
            acteurs et simplifier l’accès aux services.
            <br />

            Conception de l’architecture du système, structuration des
            fonctionnalités principales et mise en place des parcours
            utilisateurs. Mise en place d’un support multilingue. Intégration de
            services externes pour les fonctionnalités clés (paiement, stockage
            des fichiers). Optimisation des performances, de la stabilité et du
            référencement en environnement de production.
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <span class="badge"> Django </span>
            <span class="badge"> Nuxt.js </span>
            <span class="badge"> Tailwind CSS </span>
            <span class="badge"> PostgreSQL </span>
          </div>
        </div>

        <div
          class="h-px bg-black/10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        ></div>

        <div
          class="flex flex-col gap-3"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-base sm:text-lg font-semibold text-black">
              Outil de productivité intelligent pour freelances
            </h3>
            <span class="text-xs text-black/40">2026 - présent</span>
          </div>

          <div class="flex items-center gap-4 text-xs text-black/40">
            <span>Projet personnel</span>
            <!-- <span class="w-1 h-1 rounded-full bg-black/20"></span>
            <span>Client : Levitation</span> -->
          </div>

          <p class="text-sm text-black/60 leading-relaxed">
            Conception et développement d’un système d’assistance intelligent
            destiné à structurer et optimiser le travail des freelances.

            <br />

            Conception de l’architecture logicielle, définition des logiques
            métier et mise en place des flux fonctionnels du système.
            Développement des fonctionnalités principales, intégration de
            services d’intelligence artificielle et conception des interfaces
            utilisateur. Mise en production avec focus sur la performance, la
            stabilité et la qualité globale du système.
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <span class="badge">Flutter</span>
            <span class="badge">Django</span>
            <span class="badge">PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const phrases = ["UI/UX Designer", "Développeur Web"];
  const el = document.getElementById("typing-text");

  if (!el) return;

  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    el.textContent = currentPhrase.slice(0, letterIndex);

    if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      speed = 1000;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 200;
    } else {
      speed = isDeleting ? 50 : 100;
    }

    letterIndex += isDeleting ? -1 : 1;
    setTimeout(type, speed);
  }

  type();
});
</script>

<style scoped>
#typing-text::after {
  content: "|";
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
