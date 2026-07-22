<template>
  <section class="relative py-24 lg:py-32 bg-[#08080c]">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-sm small-text font-medium mb-2">Expertise</p>

        <h2 class="font-heading text-3xl lg:text-4xl font-bold tracking-tight">
          Technologies & Savoir-faire
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="item in expertise"
          :key="item.title"
          class="glass-card p-6 rounded-xl group transition-all duration-300"
          :class="item.hoverBorder"
        >
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors"
            :class="[item.bg, item.hoverBg]"
          >
            <Icon :name="item.icon" class="w-5 h-5" :class="item.iconColor" />
          </div>

          <h3 class="font-heading font-semibold mb-2">
            {{ item.title }}
          </h3>

          <p class="text-xs text-white/40 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const expertise = [
  {
    title: "Frontend",
    icon: "lucide:code-2",
    description: "Vue.js, Nuxt.js, JavaScript, TypeScript, Tailwind CSS, GSAP",
    bg: "bg-[#FF6F91]/10 ",
    hoverBg: "group-hover:bg-[#FF6F91]/20",
    iconColor: "text-[#FF6F91]",
    hoverBorder: "hover:border-[#FF6F91]/20",
  },

  {
    title: "Backend",
    icon: "lucide:server",
    description: "Django, Spring Boot, Laravel, REST APIs, MySQL, PostgreSQL",
    bg: "bg-[#FF9671]/10",
    hoverBg: "group-hover:bg-[#FF9671]/20",
    iconColor: "text-[#FF9671]",
    hoverBorder: "hover:border-[#FF9671]/20",
  },

  {
    title: "UI/UX Design",
    icon: "lucide:figma",
    description: "Figma, Design Systems, Wireframes, Prototyping, User Flows",
    bg: "bg-[#ea5a7b]/10",
    hoverBg: "group-hover:bg-[#ea5a7b]/20",
    iconColor: "text-[#ea5a7b]",
    hoverBorder: "hover:border-[#ea5a7b]/20",
  },

  {
    title: "Brand Design",
    icon: "lucide:palette",
    description: "Brand Identity, Visual Systems, Strategy, Print & Digital",
    bg: "bg-[#FFC75F]/10",
    hoverBg: "group-hover:bg-[#FFC75F]/20",
    iconColor: "text-[#FFC75F]",
    hoverBorder: "hover:border-[#FFC75F]/20",
  },
];
</script>
