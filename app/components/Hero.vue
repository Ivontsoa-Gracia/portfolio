<template>
  <section
    class="relative min-h-screen overflow-hidden w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-24 text-[#08090D]"
  >
    <div
      class="absolute z-10 inset-0 pointer-events-none hidden sm:grid grid-cols-[repeat(4,0.5fr)_6fr_repeat(4,0.5fr)]"
    >
      <div
        v-for="i in 9"
        :key="i"
        :class="['glass-col', i === 5 ? 'glass-center' : '']"
      />
    </div>

    <div class="relative z-40 max-w-2xl text-[#181818] flex flex-col gap-4">
      <span
        class="w-fit text-xs px-3 py-1 rounded-full bg-[#FF812C]/5 border border-[#FF812C]/70 text-[#FF812C]/90"
      >
        Disponible pour collaborer
      </span>

      <h1 class="text-base sm:text-lg text-[#9A0130] font-medium">
        Je suis Ivo Andrianah
      </h1>

      <div class="flex items-start gap-3 sm:gap-4">
        <div
          class="text-3xl sm:text-5xl text-bold tracking-tight leading-[1.1]"
        >
          Software Engineer &<br />
          UI/UX Designer
        </div>

        <span
          class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF812C] mt-2"
        ></span>
      </div>

      <p class="text-black/80 text-sm sm:text-base leading-relaxed max-w-xl">
        Conception et développement de produits numériques centrés sur
        l’utilisateur, combinant architecture logicielle, logique métier et
        design pour créer des systèmes clairs, fiables et évolutifs.
      </p>

      <div class="flex flex-col sm:flex-row sm:items-center gap-6 mt-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <button
          class="group btn-primary flex items-center justify-center gap-2 w-fit"
        >
          Voir projets
          <i
            class="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover:translate-x-1"
          ></i>
        </button>

        <div class="flex gap-5 sm:gap-6 justify-start sm:justify-center">
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
      </div>
    </div>

    <div
      ref="magicParticles"
      class="absolute inset-0 pointer-events-none overflow-hidden z-50"
    ></div>

    <div ref="cursor" class="cursor hidden"></div>
    <canvas ref="canvas" class="cursor-canvas hidden"></canvas>
  </section>
</template>

<script setup>
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
    particle.className = "absolute bg-[#ffffff] rounded-full";
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

const cursor = ref(null);

onMounted(() => {
  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;

    if (cursor.value) {
      cursor.value.style.left = posX + "px";
      cursor.value.style.top = posY + "px";
    }

    requestAnimationFrame(animate);
  };

  animate();

  // Effet hover
  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.value.style.transform = "translate(-50%, -50%) scale(2)";
    });

    el.addEventListener("mouseleave", () => {
      cursor.value.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });
});

const canvas = ref(null);

onMounted(() => {
  const ctx = canvas.value.getContext("2d");

  let particles = [];
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
  });

  document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    for (let i = 0; i < 3; i++) {
      particles.push({
        x: mouse.x,
        y: mouse.y,
        size: Math.random() * 6 + 2,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        life: 100,
      });
    }
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    particles.forEach((p, index) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life--;

      ctx.fillStyle = "rgba(245, 238, 108, 0.7)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      if (p.life <= 0) {
        particles.splice(index, 1);
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
});
</script>
<style scoped>
.cursor-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.cursor-dot {
  width: 2px;
  height: 2px;
  background-color: #f5ee6c;
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

#typing-text::after {
  content: "|";
  animation: blink 0.7s infinite;
}

.cursor {
  width: 20px;
  height: 20px;
  border: 2px solid #f5ee6c;
  /* background-color: #D68DB0; */
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease;
  z-index: 9999;
}
</style>
