<template>
  <section class="relative py-24 lg:py-32 bg-[#08080c]">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-sm small-text font-medium mb-2">Processus</p>

        <h2 class="font-heading text-3xl lg:text-4xl font-bold tracking-tight">
           Comment j’aborde un projet
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="step in PROCESS"
          :key="step.number"
          class="glass-card p-6 rounded-xl text-center"
        >
          <div class="text-4xl font-heading font-bold gradient-text mb-4">
            {{ step.number }}
          </div>

          <h3 class="font-heading font-semibold mb-2">
            {{ step.title }}
          </h3>

          <p class="text-xs text-white/40 leading-relaxed">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROCESS } from "~/utils/process";
</script>
