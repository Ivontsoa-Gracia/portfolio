<template>
  <header
    class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl transition-all duration-300 rounded-full p-2"
    :class="
      scrolled
        ? 'bg-white/40 backdrop-blur-xl shadow-md border border-white'
        : 'bg-transparent border border-transparent'
    "
  >
    <div class="flex items-center justify-between px-4">
      <div class="text-lg text-[#9A0130] font-semibold">Portfolio</div>

      <nav
        class="hidden md:flex items-center gap-8 text-sm text-black/80 font-medium relative"
      >
        <template v-for="link in links" :key="link.name">
          <a
            v-if="link.type === 'link'"
            :href="link.href"
            class="nav-link"
            @click="closeAll"
          >
            {{ link.name }}
          </a>

          <button v-else @click="scrollToSection(link.target)" class="nav-link">
            {{ link.name }}
          </button>
        </template>

        <div class="relative hidden">
          <button @click="toggleDropdown('blog')" class="nav-link">Blog</button>

          <div v-if="dropdown === 'blog'" class="dropdown">
            <a href="#" class="dropdown-item">Articles</a>
            <a href="#" class="dropdown-item">Tutoriels</a>
          </div>
        </div>
      </nav>

      <button @click="$router.push('/contact')" class="btn-primary">
        Me contacter
      </button>

      <button class="md:hidden text-2xl" @click="isOpen = !isOpen">
        <i :class="isOpen ? 'bx bx-x' : 'bx bx-menu'"></i>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="md:hidden mt-4 rounded-3xl bg-white/90 backdrop-blur-xl border border-black/10 shadow-lg overflow-hidden"
    >
      <div class="flex flex-col gap-4 p-6 text-black/70 text-left">
        <template v-for="link in links" :key="link.name">
          <a
            v-if="link.type === 'link'"
            :href="link.href"
            class=""
            @click="closeAll"
          >
            {{ link.name }}
          </a>

          <button
            v-else
            @click="scrollToSection(link.target)"
            class="text-left"
          >
            {{ link.name }}
          </button>
        </template>

        <button @click="$router.push('/contact')" class="mt-2 btn-primary">
          Me contacter
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const scrollToSection = async (id) => {
  if (route.path !== "/") {
    await router.push("/"); 

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  } else {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const isOpen = ref(false);
const scrolled = ref(false);
const dropdown = ref(null);

const links = [
  { name: "Accueil", type: "scroll", target: "accueil" },
  { name: "À propos", type: "scroll", target: "a-propos" },
  { name: "Expertise", type: "scroll", target: "expertise" },
  { name: "Services", type: "scroll", target: "services" },
  { name: "Vision", type: "scroll", target: "vision" },
  { name: "Projets", type: "scroll", target: "projets" },
  // { name: "Projets", type: "link", href: "/portfolio" },
];

const toggleDropdown = (menu) => {
  dropdown.value = dropdown.value === menu ? null : menu;
};

const closeAll = () => {
  dropdown.value = null;
  isOpen.value = false;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
  dropdown.value = null;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// const scrollToSection = (id) => {
//   const el = document.getElementById(id);
//   if (el) {
//     el.scrollIntoView({ behavior: "smooth" });
//   }
// };
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 4px;
  transition: 0.3s;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 1px;
  background: #000;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* DROPDOWN CLEAN */
.dropdown {
  position: absolute;
  top: 120%;
  left: 0;
  min-width: 160px;
  padding: 10px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dropdown-item {
  padding: 6px 10px;
  border-radius: 10px;
  transition: 0.2s;
}

.dropdown-item:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>
