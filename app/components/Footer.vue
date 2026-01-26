<template>
  <footer class="bg-[#030303] text-[#ECECEC] py-16 texte">
    <div class="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
      <h2 class="logo-type text-2xl md:text-7xl font-semibold text-center">
        Ivo Andrianah
      </h2>

      <div
        class="flex w-full md:w-[50%] flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base opacity-90 uppercase tracking-wide"
      >
        <span class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#ECECEC]"></span>
          Développeur Web
        </span>

        <span class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#ECECEC]"></span>
          UI / UX Designer
        </span>

        <span class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#ECECEC]"></span>
          Graphique Créatif
        </span>
      </div>

      <div class="w-full h-px bg-[#ECECEC]/30"></div>

      <div class="flex flex-col items-center gap-10">
        <nav class="flex gap-16 text-sm">
          <a href="#about" class="hover:opacity-70 transition">À propos</a>
          <a href="#skills" class="hover:opacity-70 transition">Compétences</a>
          <a href="#projects" class="hover:opacity-70 transition">Projets</a>
          <a href="#contact" class="hover:opacity-70 transition">Contact</a>
        </nav>

        <div class="flex gap-6 text-2xl">
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
      </div>
    </div>

    <div class="mt-20 text-center text-[#ECECEC]/70 text-sm px-6">
      © 2025 Ivo Andrianah. Tous droits réservés.
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.logo-type {
  font-family: "Birthstone-Casual-Regular", sans-serif;
  letter-spacing: 2px;
}

.texte {
  font-family: "Helvetica", sans-serif;
  letter-spacing: 2px;
}

.social {
  @apply w-12 h-12
         flex items-center justify-center
         rounded-full
         bg-[#8249CC] backdrop-blur-md
         text-white text-xl
         transition-all duration-300 ease-out
         hover:-translate-y-1 hover:scale-110;
}
</style>
