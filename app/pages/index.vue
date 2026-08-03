<template>
  <div
    class="min-h-screen text-black overflow-y-hidden overflow-x-hidden relative"
  >
    <section id="accueil">
      <HomeHero />
    </section>
    <section>
      <HomeCraft />
    </section>
    <section id="projets">
      <HomeProjects :projects="selectedProjects" :featured="featuredProject" />
    </section>
    <section id="expertise">
      <HomeExpertise />
    </section>
    <section id="HomeServices">
      <HomeServices />
    </section>

    <section id="a-propos">
      <HomeCTA />
    </section>
    <Footer />
    <div
      ref="magicParticles"
      class="absolute inset-0 pointer-events-none overflow-hidden z-10"
    ></div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
import Footer from "~/components/Footer.vue";

import { ref, onMounted } from "vue";
import HomeHero from "~/components/home/HomeHero.vue";
import HomeCraft from "~/components/home/HomeCraft.vue";
import HomeProjects from "~/components/home/HomeProjects.vue";
import HomeExpertise from "~/components/home/HomeExpertise.vue";
import HomeServices from "~/components/home/HomeServices.vue";
import HomeCTA from "~/components/home/HomeCTA.vue";

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

const selectedProjects = ref([]);
const featuredProject = ref(null);

onMounted(async () => {
  const data = await $fetch("/api/projects");
  // console.log("✅ all projects:", JSON.stringify(data));
  
  selectedProjects.value = data.filter((p) => p.isSelected === true);
  featuredProject.value = data.find((p) => p.isFeatured === true) ?? null;
  
  // console.log("✅ selectedProjects:", JSON.stringify(selectedProjects.value.map(p => p.slug), null, 2));
  // console.log("✅ featuredProject:", featuredProject.value?.slug ?? "null");
});

</script>
