<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 py-4 px-6 sm:px-12 md:px-16 backdrop-blur-lg"
  >
    <div class="flex justify-between items-center">
      <div
        class="text-2xl font-pirulen tracking-widest text-[#e0e5ea] select-none"
      >
        <img
          src="/logo_gracia.png"
          alt="Ivo andrianah"
          class="h-8 w-auto object-contain"
        />
      </div>

      <button
        @click="toggleMenu"
        class="relative w-8 h-3 flex flex-col justify-between items-start pl-[2px] group z-[60]"
      >
        <span
          :class="[
            'block h-[3px] w-[100%] bg-[#e0e5ea] rounded-full transition-all duration-300 origin-left',
            isOpen ? 'rotate-45 -translate-y-[9px]  w-[50%]' : '',
          ]"
        ></span>
        <span
          :class="[
            'block h-[3px] w-[50%] bg-[#e0e5ea] rounded-full transition-all duration-300 origin-left',
            isOpen ? '-rotate-45 -translate-y-[9px] w-[50%]' : '',
          ]"
        ></span>
      </button>
    </div>

    <transition name="slide-right">
      <div
        v-if="isOpen"
        class="fixed top-0 right-0 h-screen w-[220px] bg-[#030303]/95 backdrop-blur-5l border-l border-[#e0e5ea]/10 shadow-lg z-50 animate-slide-right text-default"
      >
        <div
          class="flex flex-col justify-center items-start h-full space-y-6 px-6"
        >
          <button
            @click="goToHome"
            class="flex items-center gap-3 text-[#e0e5ea] text-lg font-normal hover:text-[#8249CC] transition-all duration-300"
          >
            <i class="bxr bx-home-alt-2 text-xl"></i>
            Accueil
          </button>

          <button
            @click="goToAbout"
            class="flex items-center gap-3 text-[#e0e5ea] text-lg font-normal hover:text-[#8249CC] transition-all duration-300"
          >
            <i class="bxr bx-book-bookmark text-xl"></i>
            À propos
          </button>
          <button
            @click="goToPortfolios"
            class="flex items-center gap-3 text-[#e0e5ea] text-lg font-normal hover:text-[#8249CC] transition-all duration-300"
          >
            <i class="bxr bx-images text-xl"></i>
            Projects
          </button>

          <button
            @click="goToContact"
            class="flex items-center gap-3 text-[#e0e5ea] text-lg font-normal hover:text-[#8249CC] transition-all duration-300"
          >
            <i class="bxr bx-phone-book text-xl"></i>
            Contact
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { navigateTo } from "#app";

const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);

const navigateAndClose = (path) => {
  isOpen.value = false;
  navigateTo(path);
};

const goToHome = () => navigateAndClose("/main");
const goToAbout = () => navigateAndClose("/main#about");
const goToPortfolios = () => navigateAndClose("/portfolio");
const goToContact = () => navigateAndClose("/contact");
const restart = () => navigateAndClose("/");
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.logo-type {
  font-family: "Birthstone-Casual-Regular", sans-serif;
  letter-spacing: 2px;
}

.text-default {
  color: #e0e5ea;
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}

.text-default {
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}
</style>
