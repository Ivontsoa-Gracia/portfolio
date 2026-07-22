<template>
  <section class="relative py-24 lg:py-32 bg-[#08080c]">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p
            class="text-sm small-text font-medium mb-2 tracking-wide uppercase text-white/60"
          >
            Valeurs
          </p>

          <h2
            class="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-6"
          >
            Ce qui guide mon travail
          </h2>

          <p class="text-white/40 leading-relaxed max-w-lg">
            Ces principes influencent ma manière de concevoir, de développer, de
            collaborer et de prendre des décisions à chaque étape d’un projet.
          </p>
        </div>

        <div class="grid gap-4">
          <div
            v-for="value in values"
            :key="value.title"
            class="glass-card p-5 rounded-xl flex items-start gap-4 hover:-translate-y-1 transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              :class="value.bg"
            >
              <Icon
                :name="value.icon"
                class="w-5 h-5"
                :class="value.iconColor"
              />
            </div>

            <div>
              <h3 class="font-heading font-semibold mb-1">
                {{ value.title }}
              </h3>

              <p class="text-sm text-white/40 leading-relaxed">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const values = [
  {
    title: "Exigence de qualité",
    description:
      "Je maintiens un haut niveau d’exigence et affine chaque détail jusqu’à obtenir un résultat juste et cohérent.",
    icon: "lucide:gem",
    bg: "bg-[#FF6F91]/10 ",
    iconColor: "text-[#FF6F91]",
  },
  {
    title: "Collaboration sincère",
    description:
      "Une communication claire, de la transparence et de la confiance permettent de construire de meilleurs produits et de meilleures relations.",
    icon: "lucide:handshake",
    bg: "bg-[#FF9671]/10",
    iconColor: "text-[#FF9671]",
  },
  {
    title: "Apprentissage continu",
    description:
      "La technologie évolue rapidement, et la curiosité est essentielle pour progresser de manière significative.",
    icon: "lucide:book-open",
    bg: "bg-[#ea5a7b]/10",
    iconColor: "text-[#ea5a7b]",
  },
  {
    title: "Impact significatif",
    description:
      "Je privilégie les projets qui créent de la valeur, résolvent de vrais problèmes et laissent une empreinte durable.",
    icon: "lucide:rocket",
    bg: "bg-[#FFC75F]/10",
    iconColor: "text-[#FFC75F]",
  },
];
</script>
