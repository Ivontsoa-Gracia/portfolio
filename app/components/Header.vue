<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : ''
    "
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 text-white font-heading"
        >
          <img
            src="/gracia_logo/logo_background.png"
            class="w-10 h-10 rounded-lg"
          />

          <div
            class="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          ></div>

          <div class="flex flex-col leading-tight">
            <span class="text-lg font-light">Portfolio</span>
            <span class="text-[8px] uppercase tracking-[0.2em] text-[white/70]">
              Digital Design & Engineering
            </span>
          </div>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            :class="{ active: route.path === link.to }"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <button
            @click="openCmd"
            class="hidden sm:flex items-center gap-4 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white/40 hover:text-white/60 hover:border-white/20 transition-all"
          >
            <Icon name="lucide:search" class="w-3 h-3" />
            <div class="flex gap-1">
              <span class="bg-[#000]/20 rounded-md px-1.5 py-1">CTRL</span>
            <span class="bg-[#000]/20 rounded-md px-1.5 py-1">K</span>
            </div>

          </button>

          <NuxtLink
            to="/contact"
            class="hidden md:flex btn magnetic-btn-primary text-sm !py-2 !px-5"
          >
          Parlons-en
          </NuxtLink>

          <button @click="mobileOpen = true" class="md:hidden text-white p-2">
            <Icon name="lucide:menu" size="20" />
          </button>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
      >
        <button
          class="absolute top-6 right-6 text-white"
          @click="mobileOpen = false"
        >
          <Icon name="lucide:x" size="28" />
        </button>

        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-2xl font-semibold text-white/70 hover:text-white transition"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </Transition>
  </header>
  <Transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-[999] bg-black/10 backdrop-blur-md flex items-start justify-center pt-[18vh]"
      @click.self="close"
    >
      <div
        class="w-[92%] max-w-xl bg-[#1a1a22] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
      >
        <input
          v-model="query"
          type="text"
          placeholder="Search pages, projects, services..."
          class="cmd-input"
          @keydown.esc="close"
        />

        <div class="cmd-results">
          <NuxtLink
            v-for="item in filteredItems"
            :key="item.to"
            :to="item.to"
            class="cmd-item"
            @click="close"
          >
            <Icon :name="item.icon" class="w-4 h-4" />
            <span class="text-sm">{{ item.label }}</span>
          </NuxtLink>

          <div
            class="cmd-item px-3 py-3 text-xs text-white/30 cursor-default"
            style="color: var(--text-muted)"
          >
            Press <span class="cmd-shortcut">ESC</span> to close ·
            <span class="cmd-shortcut">⌘K</span> to open
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const mobileOpen = ref(false);
const scrolled = ref(false);

const links = [
  { label: "Accueil", to: "/" },
  { label: "Profil", to: "/studio" },
  { label: "Projets", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const open = ref(false);
const query = ref("");

const items = [
  { label: "Home", to: "/", icon: "lucide:home" },
  { label: "About", to: "/studio", icon: "lucide:user" },
  { label: "Projects", to: "/work", icon: "lucide:layers" },
  { label: "Services", to: "/services", icon: "lucide:zap" },
  { label: "Demande de devis", to: "/contact/quote", icon: "lucide:file-text" },
  { label: "Contact", to: "/contact", icon: "lucide:mail" },
];

const filteredItems = computed(() => {
  return items.filter((i) =>
    i.label.toLowerCase().includes(query.value.toLowerCase())
  );
});

const openCmd = () => {
  open.value = true;
  query.value = "";
  setTimeout(() => document.querySelector("input")?.focus(), 50);
};

const close = () => {
  open.value = false;
};

defineExpose({ openCmd });

const handleKey = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    open.value = !open.value;
  }

  if (e.key === "Escape") {
    open.value = false;
  }
};

onMounted(() => window.addEventListener("keydown", handleKey));
onUnmounted(() => window.removeEventListener("keydown", handleKey));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
