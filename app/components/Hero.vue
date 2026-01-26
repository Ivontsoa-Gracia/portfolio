<template>
  <section
    class="relative min-h-screen w-full flex flex-col items-center justify-center px-10 lg:px-24 bg-[#030303] text-white"
  >
    <!-- TEXTE CENTRAL -->
    <div class="text-center space-y-6 z-20">
      <!-- Logo -->
      <h1 data-aos="fade-down">
        <img
          src="/logo_gracia.png"
          alt="Logo Gracia"
          class="mx-auto w-24 sm:w-32 lg:w-48"
        />
      </h1>

      <h2
        class="text-2xl font-light mt-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Exploratrice d’idées, à la recherche d’expériences uniques
      </h2>
    </div>

    <div
      class="flex gap-6 absolute bottom-24 z-20"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <a
        href="https://www.instagram.com/ivo_andrianah/"
        target="_blank"
        class="social"
      >
        <i class="bx bxl-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ivontsoa-gracia-andriamihamina-31294133a/"
        target="_blank"
        class="social"
      >
        <i class="bx bxl-linkedin"></i>
      </a>
      <a
        href="https://github.com/Ivontsoa-Gracia"
        target="_blank"
        class="social"
      >
        <i class="bx bxl-github"></i>
      </a>
      <a href="#" class="social">
        <i class="bx bxl-discord-alt"></i>
      </a>
    </div>

    <!-- PARTICULES -->
    <div
      ref="magicParticles"
      class="absolute inset-0 pointer-events-none overflow-hidden z-10"
    ></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

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
.cursor-dot {
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
}

.bg-grid {
  background-image: linear-gradient(
      to right,
      hsla(207, 18%, 90%, 0.022) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, hsla(207, 18%, 90%, 0.022) 1px, transparent 1px);
  background-size: 40px 40px;
}

.animate-pulse-slow {
  animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.6;
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite alternate;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-15px);
  }
}

.text-default {
  color: #e0e5ea;
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}
.logo-type {
  font-family: "Birthstone-Casual-Regular", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}

.poppins {
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}

.Birthstone-Casual-Regular {
  font-family: "Birthstone-Casual-Regular";
}

.titre {
  font-family: "AvenirLTProBlack";
  letter-spacing: 3px;
}

.dash {
  display: inline-block;
  width: 80px;
  height: 2px;
  background-color: #bfa0ff;
}

.social {
  @apply w-12 h-12
         flex items-center justify-center
         rounded-full
         bg-white/10 backdrop-blur-md
         text-white text-xl
         transition-all duration-300 ease-out
         hover:-translate-y-1 hover:scale-110
         hover:bg-[#8249CC] hover:text-[#ECECEC];
}

/* Animation pour les mots en arrière-plan */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(-10deg);
  }
  50% {
    opacity: 0.3;
    transform: translateY(-10px) rotate(5deg);
  }
  100% {
    opacity: 0.1;
    transform: translateY(0) rotate(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 6s infinite alternate;
}

.animate-delay-0 {
  animation-delay: 0s;
}
.animate-delay-200 {
  animation-delay: 2s;
}
.animate-delay-400 {
  animation-delay: 4s;
}
.animate-delay-600 {
  animation-delay: 6s;
}

/* Style réseaux sociaux */
</style>
