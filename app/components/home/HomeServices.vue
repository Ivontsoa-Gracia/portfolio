<template>
  <section class="relative py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-sm small-text font-medium mb-2">Ce que je fais</p>

          <h2
            class="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-6"
          >
          Des services conçus pour
            <span class="gradient-text">avoir un impact</span>
          </h2>

          <p class="text-white/40 leading-relaxed mb-8">
            J'allie expertise technique, design stratégique et vision produit pour concevoir des solutions numériques complètes qui créent une réelle valeur pour les entreprises.
          </p>

          <NuxtLink to="/services" class="magnetic-btn magnetic-btn-secondary">
            Découvrir mes services
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <div class="space-y-4">
          <div
            v-for="service in services"
            :key="service.title"
            class="glass-card glass-card-hover p-6 rounded-xl flex items-start gap-4 group cursor-pointer"
          >
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 transition-all"
              :class="service.gradient"
            >
              <Icon
                :name="service.icon"
                class="w-5 h-5"
                :class="service.iconColor"
              />
            </div>

            <div>
              <h3 class="font-heading font-semibold mb-1">
                {{ service.title }}
              </h3>

              <p class="text-sm text-white/40">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Développement Full Stack",
    description:
      "Conception et développement d'applications modernes, performantes et évolutives.",
    icon: "i-lucide-monitor",
    gradient:
      "from-[#FF6F91]/20 to-[#FF9671]/20 group-hover:from-[#FF6F91]/30 group-hover:to-[#FF9671]/30",
    iconColor: "text-[#FF6F91]",
  },
  {
    title: "Design UI/UX",
    description:
      "Création d'interfaces intuitives, esthétiques et centrées sur l'expérience utilisateur.",
    icon: "i-lucide-pen-tool",
    gradient:
      "from-[#FF9671]/20 to-[#FFC75F]/20 group-hover:from-[#FF9671]/30 group-hover:to-[#FFC75F]/30",
    iconColor: "text-[#FFC75F]",
  },
  {
    title: "Brand Design",
    description:
      "Développement d'identités visuelles mémorables qui donnent du sens et de la valeur à votre marque.",
    icon: "i-lucide-sparkles",
    gradient:
      "from-[#FF6F91]/20 to-[#FF8FA3]/20 group-hover:from-[#FF6F91]/30 group-hover:to-[#FF8FA3]/30",
    iconColor: "text-[#FF8FA3]",
  },
];
</script>
