<template>
    <section class="relative py-24 lg:py-32">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
  
        <div class="text-center mb-16">
          <p class="text-sm small-text font-medium mb-2">
            FAQ
          </p>
  
          <h2
            class="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Frequently Asked Questions
          </h2>
  
          <p class="text-white/40 max-w-2xl mx-auto">
            Everything you need to know about working together, timelines,
            pricing, and project expectations.
          </p>
        </div>
  
        <div class="space-y-4">
          <div
            v-for="(item, index) in faqs"
            :key="item.question"
            class="glass-card rounded-2xl overflow-hidden"
          >
            <button
              class="w-full flex items-center justify-between p-6 text-left"
              @click="toggle(index)"
            >
              <h3 class="font-heading text-lg font-semibold">
                {{ item.question }}
              </h3>
  
              <Icon
                :name="openIndex === index
                  ? 'lucide:minus'
                  : 'lucide:plus'"
                class="w-5 h-5 text-violet-400"
              />
            </button>
  
            <Transition
              enter-active-class="transition-all duration-300"
              leave-active-class="transition-all duration-300"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div
                v-if="openIndex === index"
                class="px-6 pb-6 text-white/50 leading-relaxed"
              >
                {{ item.answer }}
              </div>
            </Transition>
          </div>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const openIndex = ref(0)
  
  const toggle = (index: number) => {
    openIndex.value =
      openIndex.value === index
        ? -1
        : index
  }
  
  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'I specialize in full stack development, UI/UX design, branding, product design, and design systems. Depending on the project, I can handle both strategy and execution.'
    },
  
    {
      question: 'How much does a project cost?',
      answer:
        'Every project is different. Pricing depends on scope, complexity, timeline, and requirements. Most engagements start at a few thousand dollars and scale from there.'
    },
  
    {
      question: 'How long does a project take?',
      answer:
        'Small projects typically take 2–4 weeks, while larger products and branding engagements can take several months depending on complexity.'
    },
  
    {
      question: 'Do you work with international clients?',
      answer:
        'Yes. I work remotely with clients worldwide and adapt communication and collaboration workflows to different time zones.'
    },
  
    {
      question: 'Can you help after launch?',
      answer:
        'Absolutely. I provide ongoing support, maintenance, improvements, and strategic guidance after launch when needed.'
    },
  
    {
      question: 'What is your design process?',
      answer:
        'My process generally follows four stages: Discover, Define, Design & Build, and Deliver. Each stage is focused on reducing risk and ensuring the final result aligns with business goals.'
    },
  
    {
      question: 'Do you build custom solutions?',
      answer:
        'Yes. Every project is tailored to the client’s goals. I do not rely on generic templates or one-size-fits-all approaches.'
    },
  
    {
      question: 'How do we get started?',
      answer:
        'Simply reach out through the contact page or request a quote. We will discuss your goals, scope, timeline, and determine the best approach for your project.'
    }
  ]
  </script>