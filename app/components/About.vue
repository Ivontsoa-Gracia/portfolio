<template>
  <section
    id="me"
    class="me relative flex flex-col lg:flex-row w-screen bg-[#030303]"
  >
    <div class="profil w-full md:w-full lg:w-1/2 min-h-screen px-20">
      <div class="relative flex flex-col gap-3 py-12 text-[#ECECEC]">
        <h1
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="2500"
          class="poppins text-[3.5rem] scale-y-110 font-bold"
        >
          Ivo Andrianah
        </h1>

        <div class="flex items-center gap-4">
          <div class="h-[2px] w-11 bg-[#8249CC]"></div>
          <h2 id="typing-text" class="text-[#8249CC] text-3xl"></h2>
        </div>

        <p
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="2500"
          class="poppins text-md text-[#ECECEC]/70 mt-6 max-w-xl text-justify"
        >
        Je suis passionnée par le développement web et le design UI/UX, et j’aime transformer des idées en projets concrets et impactants. Au fil de mes expériences, j’ai appris à allier technique et sensibilité esthétique, pour créer des solutions à la fois fonctionnelles et agréables à utiliser.
        </p>

        <p
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-duration="2500"
          class="poppins text-md text-[#ECECEC]/70 mt-4 max-w-xl text-justify"
        >
        Curieuse et persévérante, je relève les défis avec autonomie et créativité, en cherchant toujours à améliorer mes compétences et à proposer des projets efficaces et adaptés aux besoins réels. Mon objectif : créer des expériences numériques qui marquent et qui ont du sens.
        </p>

        <div class="flex items-center gap-6 mt-10">
          <a
            href="/cv/Ivo_Andrianah_CV.pdf"
            download
            class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#8249CC] hover:bg-violet-400 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-violet-500/40"
          >
            <i class="bx bx-download text-xl"></i>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>

    <div
      ref="experiences"
      id="experiences"
      class="experiences flex flex-col gap-5 w-[100%] md:w-[100%] lg:w-[50%] min-h-screen lg:h-screen items-center lg:items-start py-12 overflow-y-scroll"
    >
      <div
        class="experiences-card flex gap-8 w-[90%] px-4 py-2 text-white hover:bg-white/5 hover:rounded-2xl hover:backdrop-blur-md hover:border hover:border-white/10"
      >
        <div
          class="date poppins relative flex text-left text-[0.9rem] text-[#ECECEC]/50 w-[25%] h-[100%] py-3"
        >
          <p>2025 — present</p>
        </div>
        <div
          class="description poppins relative flex flex-col w-[75%] h-[100%] text-left py-3 gap-3"
        >
          <h1 class="post relative text-md font-semibold text-[#ECECEC]/70">
            Plateforme web d’agriculture de précision avec assistance IA et marketplace agricole intégrée.
          </h1>
          <p class="details poppins relative text-[#ECECEC]/70 text-sm">
            Conception de l’architecture frontend, élaboration du prototype d’expérience utilisateur et mise en place du design system. Développement de l’interface et du parcours utilisateur avec NuxtJS, intégration des API backend Django et traitement des données JSON. Mise en place du systeme de multi-langue. Mise en production de la plateforme avec optimisation SEO pour améliorer la visibilité et les performances.
          </p>
          <div class="technos relative w-[100%] flex flex-wrap gap-1.5">
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Django</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Nuxt.js</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Tailwind CSS</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >PostgreSQL</span
            >
          </div>
        </div>
      </div>

      <div
        class="experiences-card flex gap-8 w-[90%] px-4 py-2 text-white hover:bg-white/5 hover:rounded-2xl hover:backdrop-blur-md hover:border hover:border-white/10"
      >
        <div
          class="date poppins relative flex text-left text-[0.9rem] text-[#ECECEC]/50 w-[25%] h-[100%] py-3"
        >
          <p>2025</p>
        </div>
        <div
          class="description poppins relative flex flex-col w-[75%] h-[100%] text-left py-3 gap-3"
        >
          <h1 class="post relative text-md font-semibold text-[#ECECEC]/70">
            Site e‑commerce d’huiles essentielles et d’épices.
          </h1>
          <p class="details poppins relative text-[#ECECEC]/70 text-sm">
            Conception de l’architecture frontend et développement de l’interface ainsi que du parcours utilisateur pour un site e‑commerce d’huiles essentielles et d’épices. Déploiement de la plateforme, intégration des API Laravel et traitement des données JSON. Développement de fonctionnalités spécifiques, mise en place du multilingue et optimisation SEO pour améliorer la visibilité et l’expérience utilisateur.
          </p>
          <div class="technos relative w-[100%] flex flex-wrap gap-1.5">
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Laravel</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Html</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Css</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Javascript</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >MySQL</span
            >
          </div>
        </div>
      </div>

      <div
        class="experiences-card flex gap-8 w-[90%] px-4 py-2 text-white hover:bg-white/5 hover:rounded-2xl hover:backdrop-blur-md hover:border hover:border-white/10"
      >
        <div
          class="date poppins relative flex text-left text-[0.9rem] text-[#ECECEC]/50 w-[25%] h-[100%] py-3"
        >
          <p>2025</p>
        </div>
        <div
          class="description poppins relative flex flex-col w-[75%] h-[100%] text-left py-3 gap-3"
        >
          <h1 class="post relative text-md font-semibold text-[#ECECEC]/70">
            Plateforme de gestion des services freelance
          </h1>
          <p class="details poppins relative text-[#ECECEC]/70 text-sm">
            Conception de l’architecture, développement de l’interface et du parcours utilisateur. Intégration des services et mise en place d’un système de prise de contact. Création du logo et du design system. Mise en production avec optimisation SEO.
          </p>
          <div class="technos relative w-[100%] flex flex-wrap gap-1.5">
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Nuxt.js</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Typescript</span
            >

            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >MySQL</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Illustrator</span
            >
            <span class="poppins px-3 py-1 text-xs rounded-full bg-[#8249CC]"
              >Lottie</span
            >
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
