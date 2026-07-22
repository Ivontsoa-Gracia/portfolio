<template>
  <section class="relative py-8 lg:py-12">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="glass-card glass-card-hover p-8 rounded-xl group"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 transition-all"
            :class="[service.gradient, service.hoverGradient]"
          >
            <Icon
              :name="service.icon"
              class="w-7 h-7"
              :class="service.iconColor"
            />
          </div>

          <h3 class="font-heading text-xl font-semibold mb-3">
            {{ service.title }}
          </h3>

          <p class="text-sm text-white/40 leading-relaxed mb-6">
            {{ service.description }}
          </p>

          <ul class="space-y-2">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-center gap-2 text-sm text-white/50"
            >
              <Icon
                name="lucide:check"
                class="w-4 h-4"
                :class="service.iconColor"
              />

              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Développement Full Stack",
    icon: "lucide:code-2",
    iconColor: "text-[#FF6F91]",
    gradient: "from-[#FF6F91]/20 to-[#FF9671]/20 ",
    hoverGradient:
      "group-hover:from-[#FF6F91]/30 group-hover:to-[#FF9671]/30",

    description:
      "Applications web performantes et évolutives construites avec des technologies modernes. Des API jusqu’au front-end, je développe des solutions prêtes pour la production.",

    features: [
      "Vue.js & Nuxt.js",
      "Java & Python",
      "Conception de bases de données",
      "Infrastructure cloud",
    ],
  },

  {
    title: "UI/UX Design",
    icon: "lucide:pen-tool",
    iconColor: "text-[#FFC75F]",
    gradient: "from-[#FF9671]/20 to-[#FFC75F]/20 ",
    hoverGradient: "group-hover:from-[#FF9671]/30 group-hover:to-[#FFC75F]/30",

    description:
      "Design centré utilisateur qui équilibre esthétique et ergonomie. Des interfaces pensées à partir de la recherche pour offrir des expériences intuitives et engageantes.",

    features: [
      "Recherche utilisateur",
      "Wireframing & prototypage",
      "Design d’interaction",
      "Tests d’utilisabilité",
    ],
  },

  {
    title: "Identité de marque",
    icon: "lucide:sparkles",
    iconColor: "text-[#FF8FA3]",
    gradient: "from-[#FF6F91]/20 to-[#FF8FA3]/20 ",
    hoverGradient: "group-hover:from-[#FF6F91]/30 group-hover:to-[#FF8FA3]/30",

    description:
      "Identités visuelles distinctives qui racontent une histoire et renforcent la reconnaissance de marque, du logo aux systèmes complets.",

    features: [
      "Stratégie de marque",
      "Logo & identité visuelle",
      "Typographie & couleurs",
      "Charte graphique",
    ],
  },

  {
    title: "Product Design",
    icon: "lucide:layout",
    iconColor: "text-[#ee794f]",
    gradient: "from-[#FF9671]/20 to-[#ee794f]/20",
    hoverGradient: "group-hover:from-[#FF9671]/30 group-hover:to-[#ee794f]/30",

    description:
      "Conception produit de bout en bout, de la découverte jusqu’à la livraison, avec une approche centrée sur l’utilisateur et la valeur produit.",

    features: [
      "Stratégie produit",
      "Priorisation des fonctionnalités",
      "Design sprints",
      "Lancement & itérations",
    ],
  },

  {
    title: "Applications Web",
    icon: "lucide:globe",
    iconColor: "text-[#ea5a7b]",
    gradient: "from-[#FF6F91]/20 to-[#ea5a7b]/20",
    hoverGradient: "group-hover:from-[#FF6F91]/30 group-hover:to-[#ea5a7b]/30",

    description:
      "Applications web sur mesure adaptées à vos besoins métiers. Optimisées pour la performance et conçues pour évoluer.",

    features: [
      "Plateformes SaaS",
      "Dashboards & administration",
      "Solutions e-commerce",
      "Développement d’API",
    ],
  },

  {
    title: "Design Systems",
    icon: "lucide:component",
    iconColor: "text-amber-400",
    gradient: "from-amber-500/20 to-orange-500/20",
    hoverGradient: "group-hover:from-amber-500/30 group-hover:to-orange-500/30",

    description:
      "Systèmes de design évolutifs garantissant cohérence et efficacité dans le développement produit à grande échelle.",

    features: [
      "Bibliothèques de composants",
      "Design tokens",
      "Documentation",
      "Stratégie d’adoption",
    ],
  },
];
</script>
