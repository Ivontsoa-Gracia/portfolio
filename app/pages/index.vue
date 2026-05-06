<template>
  <div
    class="min-h-screen bg-[#f1f1f1] text-black overflow-y-hidden overflow-x-hidden relative"
  >
    <div
      class="absolute top-64 -right-32 w-[800px] h-[500px] sm:bg-[#F5EE6C] opacity-40 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] blur-3xl"
    ></div>

    <div
      class="absolute top-48 -left-80 w-[1000px] h-[400px] sm:bg-[#FC523B] opacity-40 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] blur-3xl"
    ></div>

    <div
      class="absolute -top-48 right-[-100px] w-[800px] h-[400px] bg-[#FF812C] opacity-40 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] blur-3xl"
    ></div>

    <section id="accueil">
      <Hero />
    </section>
    <section id="a-propos">
      <About />
    </section>
    <section id="vision">
      <Vision />
      <Processus />
    </section>
    <section id="expertise">
      <Skills />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="projets">
      <Projets />
    </section>
    <Formations />
    <Footer />
    <div
      ref="magicParticles"
      class="absolute inset-0 pointer-events-none overflow-hidden z-10"
    ></div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Formations from "~/components/Formations.vue";
import Processus from "~/components/Processus.vue";
import Vision from "~/components/Vision.vue";
import Services from "~/components/Services.vue";
import Resultats from "~/components/Resultats.vue";
import Footer from "~/components/Footer.vue";
import Skills from "~/components/Skills.vue";
import Projets from "~/components/Projets.vue";

import { ref, onMounted } from "vue";

onMounted(() => {
  const phrase = "Le centre n’est jamais neutre.";
  const el = document.getElementById("animation-type");

  if (!el) return;

  let letterIndex = 0;
  const speed = 100;

  function type() {
    if (letterIndex <= phrase.length) {
      el.textContent = phrase.slice(0, letterIndex);
      letterIndex++;
      setTimeout(type, speed);
    }
  }

  type();
});

const magicParticles = ref(null);

onMounted(() => {
  const container = magicParticles.value;
  if (!container) return;

  const width = container.offsetWidth;
  const height = container.offsetHeight;

  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = "absolute bg-white rounded-full";
    particle.style.width = "1px";
    particle.style.height = "1px";

    particle.style.left = `${Math.random() * width}px`;
    particle.style.top = `${Math.random() * height}px`;
    particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;

    container.appendChild(particle);

    const deltaX = (Math.random() - 0.5) * 200;
    const deltaY = -50 - Math.random() * 100;
    const duration = 5000 + Math.random() * 3000;

    particle.animate(
      [
        { transform: "translate(0px, 0px)", opacity: particle.style.opacity },
        { transform: `translate(${deltaX}px, ${deltaY}px)`, opacity: 0 },
      ],
      {
        duration: duration,
        easing: "ease-out",
        iterations: 1,
      }
    );

    setTimeout(() => particle.remove(), duration);
  };

  setInterval(() => {
    for (let i = 0; i < 3; i++) {
      createParticle();
    }
  }, 200);
});
</script>

<style scoped>
.link {
  @apply text-white hover:text-gray-300 transition duration-300;
}
.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
</style>
