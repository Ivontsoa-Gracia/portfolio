<template>
  <section class="relative py-24 lg:py-32 bg-[#08080c]">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-sm text-violet-400 font-medium mb-2">
          Testimonials
        </p>

        <h2 class="font-heading text-3xl lg:text-4xl font-bold tracking-tight">
          What clients say
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="glass-card p-8 rounded-xl"
        >
          <div class="flex gap-1 mb-4">
            <Icon
              v-for="n in 5"
              :key="n"
              name="lucide:star"
              class="w-4 h-4 text-yellow-400 fill-yellow-400"
            />
          </div>

          <p class="text-sm text-white/50 leading-relaxed mb-6">
            "{{ testimonial.quote }}"
          </p>

          <div class="flex items-center gap-3">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-10 h-10 rounded-full object-cover"
            />

            <div>
              <div class="text-sm font-medium">
                {{ testimonial.name }}
              </div>

              <div class="text-xs text-white/30">
                {{ testimonial.role }} · {{ testimonial.company }}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: "Client Name",
    role: "Founder",
    company: "Company Name",
    avatar: "/images/testimonials/client-1.jpg",
    quote:
      "Gracia delivered exactly what we needed. The final product was fast, intuitive and beautifully designed.",
  },
  {
    name: "Client Name",
    role: "Project Manager",
    company: "Company Name",
    avatar: "/images/testimonials/client-2.jpg",
    quote:
      "Professional, responsive and highly skilled. Communication was smooth throughout the project.",
  },
  {
    name: "Client Name",
    role: "Business Owner",
    company: "Company Name",
    avatar: "/images/testimonials/client-3.jpg",
    quote:
      "The website exceeded our expectations and significantly improved our online presence.",
  },
];
</script>