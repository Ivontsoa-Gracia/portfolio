<template>
  <section class="hero relative w-full min-h-screen  bg-black flex items-center justify-center overflow-hidden">
    <!-- Gradient animé fiable -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute w-[200%] h-full bg-gradient-animated"></div>
    </div>

    <div class="flex flex-col items-center justify-center text-center gap-6">
      <h1 class="my-name text-white text-6xl font-semibold">Ivontsoa Gracia</h1>
      <h2 id="typing-text" class="text-white text-3xl font-light relative pl-16"></h2>

      <div class="media flex flex-col gap-6 mt-8">
        <a href="https://www.facebook.com/profile.php?id=100082271869981" target="_blank" class="social-link">
          <i class='bx bxl-facebook'></i>
        </a>
        <a href="https://www.instagram.com/ivo_andrianah/" target="_blank" class="social-link">
          <i class='bx bxl-instagram'></i>
        </a>
        <a href="https://www.linkedin.com/in/ivontsoa-gracia-andriamihamina-31294133a/" target="_blank" class="social-link">
          <i class='bx bxl-linkedin'></i>
        </a>
        <a href="https://github.com/Ivontsoa-Gracia" target="_blank" class="social-link">
          <i class='bx bxl-github'></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

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
/* Gradient animé par translateX (100% du div) */
.bg-gradient-animated {
  height: 100%;
  width: 200%;
  background: linear-gradient(130deg, #1982c4ff, #6a4c93ff, #ff595eff, #2A777C);
  background-size: cover;
  animation: move-gradient 15s linear infinite;
}

@keyframes move-gradient {
  0% { transform: translateX(0); }
  50% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Typing effect */
#typing-text::after {
  content: "|";
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

/* Nom */
.my-name {
  font-family: 'Inter', sans-serif;
  letter-spacing: 1px;
}

/* Liens réseaux */
.media {
  position: relative;
}

.social-link {
  color: #ffffff;     
  font-size: 24px;
  text-decoration: none; 
  transition: transform 0.6s ease, box-shadow 0.6s ease, background-color 0.6s ease;
}

.social-link:hover {
  transform: rotate(360deg) scale(1.1);
  color: #ffeb3b;
}
</style>
