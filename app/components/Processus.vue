<template>
  <section class="relative bg-[#f1f1f1] px-6 md:p-28 py-12 overflow-hidden">
    <div class="relative z-10 mx-auto flex flex-col gap-20">
      <div class="flex flex-col gap-4 max-w-2xl">
        <p class="sous-titre">Approche / Méthodologie</p>

        <h1 class="heading">
          Construire des produits<br />
          clairs, fiables et évolutifs
        </h1>

        <p class="text-black/60 text-sm md:text-base leading-relaxed">
          Approche orientée produit, alliant structuration technique, expérience
          utilisateur et cohérence visuelle.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="group p-6 rounded-2xl bg-white border border-black/5 hover:shadow-lg transition duration-300 flex flex-col gap-4"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="flex items-center justify-between">
            <span class="text-xs text-black/30">0{{ i + 1 }}</span>
            <span
              class="w-2 h-2 rounded-full bg-[#9A0130] opacity-60 group-hover:opacity-100 transition"
            ></span>
          </div>

          <h3 class="text-lg font-semibold text-black">
            {{ step.title }}
          </h3>

          <p class="text-sm text-black/60 leading-relaxed">
            {{ step.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: "Compréhension du besoin",
    desc: "Analyse des objectifs, des utilisateurs et du contexte afin de définir clairement le problème à résoudre et les enjeux du produit.",
  },
  {
    title: "Structuration & cadrage",
    desc: "Décomposition du projet en fonctionnalités, définition des flux utilisateurs et identification des contraintes techniques.",
  },
  {
    title: "Conception du système",
    desc: "Définition de l’architecture, des modèles de données et de la logique métier pour construire une base solide et évolutive.",
  },
  {
    title: "Design & expérience utilisateur",
    desc: "Conception d’interfaces claires et cohérentes pour garantir une expérience fluide et compréhensible.",
  },
  {
    title: "Développement",
    desc: "Implémentation des fonctionnalités avec une attention portée à la qualité du code, à la maintenabilité et à la performance.",
  },
  {
    title: "Tests & validation",
    desc: "Vérification du bon fonctionnement du système, correction des anomalies et validation des parcours utilisateurs.",
  },
  {
    title: "Déploiement",
    desc: "Mise en production du système avec optimisation des performances, configuration des environnements et accessibilité.",
  },
  {
    title: "Maintenance & évolution",
    desc: "Amélioration continue du produit, ajout de fonctionnalités et adaptation aux besoins réels des utilisateurs.",
  },
];
</script>

<style scoped>
.group:hover {
  transform: translateY(-4px);
}
</style>
