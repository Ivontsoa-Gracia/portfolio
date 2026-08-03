<template>
  <section
    class="hero-parallax relative min-h-screen flex items-center overflow-hidden pt-20 text-white"
  >
    <div class="aurora-bg">
      <div class="aurora-blob aurora-blob-1"></div>
      <div class="aurora-blob aurora-blob-2"></div>
      <div class="aurora-blob aurora-blob-3"></div>
    </div>

    <div class="absolute inset-0 dot-grid opacity-40"></div>

    <div
      class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full"
    >
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div
            class="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card text-sm"
          >
            <span class="status-dot"></span>
            <span class="text-white/70">Disponible pour collaboration</span>
          </div>

          <h1
            class="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <div class="hero-line">
              <div class="hero-line-inner">Je crée</div>
            </div>

            <div class="hero-line">
              <div class="hero-line-inner">
                des <span class="gradient-text">expériences</span>
              </div>
            </div>

            <div class="hero-line">
              <div class="hero-line-inner">
                digitales<span class="text-[#FF9671]">.</span>
              </div>
            </div>
          </h1>

          <p
            class="text-lg lg:text-xl text-white/50 max-w-lg mb-8 leading-relaxed"
          >
            Développeur full stack, designer UI/UX & Brand designer, je crée des
            produits qui allient
            <span class="text-white/80 font-medium">{{ currentWord }}</span>
            <span class="text-[#FF6F91] animate-pulse">|</span>
          </p>

          <div class="flex flex-wrap gap-4 mb-12">
            <NuxtLink
              to="/work"
              class="magnetic-btn magnetic-btn-primary inline-flex items-center gap-2"
            >
            Voir les projets
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>

            <NuxtLink to="/contact" class="magnetic-btn magnetic-btn-secondary">
              Me contacter
            </NuxtLink>
          </div>

          <div class="hero-line">
            <div class="hero-line-inner flex gap-8 lg:gap-12">
              <div v-for="stat in stats" :key="stat.label">
                <div class="text-2xl lg:text-3xl font-heading font-bold">
                  {{ stat.display }}{{ stat.suffix }}
                </div>
                <div class="text-xs text-white/40 mt-1">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden lg:block relative h-[500px]">
          <div
            class="parallax-layer float-element absolute top-4 right-8 w-72 glass-card p-5 rounded-xl border border-white/10 shadow-xl"
          >
            <div class="flex items-center gap-2 mb-4">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <span class="text-[11px] text-white/30 ml-2 font-mono"
                >app.tsx</span
              >
            </div>
            <div
              class="font-mono text-[11px] leading-relaxed space-y-1 text-white/70"
            >
              <div>
                <span class="text-pink-400">const</span>
                <span class="text-cyan-300"> App</span>
                <span class="text-white/50"> = () =&gt; {</span>
              </div>

              <div class="pl-4">
                <span class="text-pink-400">return</span>
                <span class="text-white/50"> (</span>
              </div>

              <div class="pl-8">
                <span class="text-white/50">&lt;</span
                ><span class="text-sky-300">Layout</span
                ><span class="text-white/50">&gt;</span>
              </div>

              <div class="pl-12">
                <span class="text-white/50">&lt;</span
                ><span class="text-emerald-300">Hero</span>
                <span class="text-amber-300"> animate</span
                ><span class="text-white/50"> /&gt;</span>
              </div>

              <div class="pl-12">
                <span class="text-white/50">&lt;</span
                ><span class="text-emerald-300">Projects</span>
                <span class="text-amber-300"> filter</span
                ><span class="text-white/50"> /&gt;</span>
              </div>

              <div class="pl-8">
                <span class="text-white/50">&lt;/</span
                ><span class="text-sky-300">Layout</span
                ><span class="text-white/50">&gt;</span>
              </div>

              <div class="pl-4">
                <span class="text-white/50">)</span>
              </div>

              <div class="text-white/50">}</div>
            </div>
          </div>

          <div
            class="parallax-layer float-element-delayed absolute top-44 left-4 w-56 glass-card p-4 rounded-xl border border-white/10"
          >
            <div class="text-xs text-white/40 mb-2">Design System</div>

            <div class="flex items-end gap-1 h-16">
              <div
                class="w-4 bg-gradient-to-t from-[#FF9671] to-[#FF6F91] rounded-t"
                style="height: 40%"
              ></div>

              <div
                class="w-4 bg-gradient-to-t from-[#FF9671] to-[#FF6F91] rounded-t"
                style="height: 65%"
              ></div>

              <div
                class="w-4 bg-gradient-to-t from-[#FF9671] to-[#FF6F91] rounded-t"
                style="height: 45%"
              ></div>

              <div
                class="w-4 bg-gradient-to-t from-[#FF9671] to-[#FF6F91] rounded-t"
                style="height: 80%"
              ></div>

              <div
                class="w-4 bg-gradient-to-t from-[#FF9671] to-[#FF6F91] rounded-t"
                style="height: 55%"
              ></div>

              <div
                class="w-4 bg-gradient-to-t from-[#FF6F91] to-[#ea5a7b] rounded-t"
                style="height: 90%"
              ></div>

              <div
                class="w-4 bg-gradient-to-t from-[#FF6F91] to-[#ea5a7b] rounded-t"
                style="height: 70%"
              ></div>
            </div>

            <div class="flex justify-between mt-3 text-[10px] text-white/30">
              <span>Components</span>
              <span class="text-[#FF6F91] font-medium">128</span>
            </div>
          </div>

          <div
            class="parallax-layer float-element-delayed-2 absolute bottom-16 right-16 w-64 glass-card p-4 rounded-xl border border-white/10"
          >
            <div class="text-xs text-white/40 mb-3">Brand Palette</div>

            <div class="flex gap-2">
              <div class="w-10 h-10 rounded-lg bg-[#FF6F91]"></div>
              <div class="w-10 h-10 rounded-lg bg-[#FF9671]"></div>
              <div class="w-10 h-10 rounded-lg bg-[#ea5a7b]"></div>
              <div class="w-10 h-10 rounded-lg bg-white/10"></div>
              <div class="w-10 h-10 rounded-lg bg-white/5"></div>
            </div>

            <div class="mt-3 text-[10px] text-white/30 flex justify-between">
              <span>Primary · Accent · Neutral</span>
              <span class="text-[#FF6F91]">5 tokens</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
    >
      <div class="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
    </div> -->
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const words = [
  "design soigné",
  "code propre",
  "pensée stratégique",
  "expérience utilisateur agréable",
];
const currentWord = ref("");
let index = 0;
let char = 0;
let deleting = false;

function type() {
  const word = words[index];

  if (!deleting) {
    currentWord.value = word.slice(0, char++);
    if (char > word.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    currentWord.value = word.slice(0, char--);
    if (char < 0) {
      deleting = false;
      index = (index + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 40 : 80);
}

onMounted(() => {
  type();
});

const stats = ref([
  { value: 2, display: 0, suffix: "+", label: "Years Experience" },
  { value: 10, display: 0, suffix: "+", label: "Projects" },
  // { value: 30, display: 0, suffix: "+", label: "Happy Clients" },
]);

function animateCounter(stat, duration = 1500) {
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    stat.display = Math.round(stat.value * eased);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

onMounted(() => {
  stats.value.forEach((stat, i) => {
    setTimeout(() => animateCounter(stat), i * 150);
  });
});
</script>
