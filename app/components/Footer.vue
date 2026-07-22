<template>
  <footer class="relative py-16 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div
        class="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
      />

      <div class="flex justify-center gap-3 order-1 md:order-2">
        <a
          href="https://www.instagram.com/ivo_andrianah/"
          target="_blank"
          class="group"
        >
          <div
            class="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:border-[#FF6F91]/30 hover:bg-[#FF6F91]/10"
          >
            <Icon
              name="lucide:instagram"
              class="w-4 h-4 text-white/60 group-hover:text-[#FF6F91]"
            />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/ivontsoa-gracia-andriamihamina-31294133a/"
          target="_blank"
          class="group"
        >
          <div
            class="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:border-[#FF9671]/30 hover:bg-[#FF9671]/10"
          >
            <Icon
              name="lucide:linkedin"
              class="w-4 h-4 text-white/60 group-hover:text-[#FF9671]"
            />
          </div>
        </a>

        <a
          href="https://github.com/Ivontsoa-Gracia"
          target="_blank"
          class="group"
        >
          <div
            class="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:border-[#ea5a7b]/30 hover:bg-[#ea5a7b]/10"
          >
            <Icon
              name="lucide:github"
              class="w-4 h-4 text-white/60 group-hover:text-[#ea5a7b]"
            />
          </div>
        </a>

        <a href="mailto:contact@ivoandrianah.com" class="group">
          <div
            class="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:border-[#FFC75F]/30 hover:bg-[#FFC75F]/10"
          >
            <Icon
              name="lucide:message-circle"
              class="w-4 h-4 text-white/60 group-hover:text-[#FFC75F]"
            />
          </div>
        </a>
      </div>

      <div class="mt-12 text-center text-sm text-white/40 tracking-wide">
        © {{ new Date().getFullYear() }}
        <span class="text-white/70">Gracia Andriamihamina</span>
        · Design et développement
      </div>
    </div>
  </footer>
</template>
