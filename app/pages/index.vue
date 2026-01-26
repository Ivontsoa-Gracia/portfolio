<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-[#030303] px-4 sm:px-6 md:px-8 space-y-4 sm:space-y-6"
  >
    <div
      ref="animationContainer"
      class="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 -mb-4 sm:-mb-6"
    ></div>

    <div
      class="flex flex-col items-center md:items-start -mt-6 sm:-mt-10 md:-mt-12"
    ></div>
  </div>
  <div
    ref="magicParticles"
    class="absolute inset-0 pointer-events-none overflow-hidden z-10"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import lottie from "lottie-web";

const animationContainer = ref(null);
const router = useRouter();

onMounted(async () => {
  const animationData = (await import("~/utils/ivo_logo_animation.json"))
    .default;

  if (!animationContainer.value) return;

  const animation = lottie.loadAnimation({
    container: animationContainer.value,
    renderer: "svg",
    loop: false,
    autoplay: true,
    animationData,
  });

  animation.addEventListener("complete", () => {
    router.push("/main");
  });
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
.agency {
  letter-spacing: 30px;
}

.logo-type {
  letter-spacing: 8px;
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
</style>
