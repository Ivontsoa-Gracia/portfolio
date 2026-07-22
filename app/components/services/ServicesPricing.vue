<template>
  <section class="relative py-24 lg:py-32">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-sm small-text font-medium mb-2">Investissement</p>

        <h2 class="font-heading text-3xl lg:text-4xl font-bold tracking-tight">
          Une tarification qui s’adapte à vos besoins
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="plan in PRICING"
          :key="plan.name"
          class="glass-card p-8 rounded-xl relative"
          :class="plan.featured ? '!border-[#FF9671]/30 !border' : ''"
        >
          <div
            v-if="plan.featured"
            class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF6F91] to-[#FF9671] text-xs font-medium"
          >
            {{ plan.badge }}
          </div>

          <h3 class="font-heading text-lg font-semibold mb-2">
            {{ plan.name }}
          </h3>

          <p class="text-sm text-white/40 mb-6">
            {{ plan.description }}
          </p>

          <div
            class="text-3xl font-heading font-bold mb-1"
            :class="{
              'gradient-text': plan.featured,
            }"
          >
            {{ plan.price }}
            <span
              class="text-lg text-white/30 font-normal"
              :class="{
                '!text-white/30': plan.featured,
              }"
            >
              +
            </span>
          </div>

          <p class="text-xs text-white/30 mb-6">Tarif de départ</p>

          <ul class="space-y-2 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center gap-2 text-sm text-white/50"
            >
              <Icon name="lucide:check" class="w-4 h-4 small-text" />

              {{ feature }}
            </li>
          </ul>

          <NuxtLink
            to="/contact"
            class="magnetic-btn magnetic-btn-secondary w-full justify-center text-sm"
          >
            {{ plan.cta }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PRICING } from "~/utils/pricing";
</script>
