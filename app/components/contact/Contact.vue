<template>
  <main>
    <section class="relative py-12 lg:py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-[1.5fr_0.8fr] gap-8">
          <div class="glass-card p-8 rounded-2xl">
            <h2 class="font-heading text-2xl font-semibold mb-8">
              Contactez-moi
            </h2>

            <form class="space-y-5" @submit.prevent="submitForm">
              <div class="grid md:grid-cols-2 gap-5">
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Nom"
                  class="contact-input"
                />

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  class="contact-input"
                />
              </div>

              <input
                v-model="form.subject"
                type="text"
                placeholder="Sujet de votre message"
                class="contact-input"
              />

              <div>
                <label class="block text-sm text-white/60 mb-3">
                  Type de demande
                </label>

                <div class="grid sm:grid-cols-2 gap-3">
                  <label
                    v-for="category in categories"
                    :key="category.value"
                    class="cursor-pointer"
                  >
                    <input
                      v-model="form.category"
                      :value="category.value"
                      type="radio"
                      class="sr-only"
                    />

                    <div
                      class="request-card"
                      :class="{
                        'request-card-active': form.category === category.value,
                      }"
                    >
                      <div>
                        <p class="font-medium">
                          {{ category.label }}
                        </p>

                        <p class="text-xs text-white/50 mt-1">
                          {{ category.description }}
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <textarea
                v-model="form.message"
                rows="6"
                placeholder="Décrivez votre projet..."
                class="contact-input resize-none"
              />

              <Transition name="fade">
                <div
                  v-if="isSuccess"
                  class="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4"
                >
                  <div class="flex items-center gap-3">
                    <Icon
                      name="lucide:circle-check-big"
                      class="w-5 h-5 text-emerald-400"
                    />

                    <div>
                      <p class="font-medium text-emerald-400">
                        Message envoyé avec succès
                      </p>

                      <p class="text-sm text-white/60">
                        Merci pour votre message. Je reviendrai vers vous dès
                        que possible.
                      </p>
                    </div>
                  </div>
                </div>
              </Transition>

              <Transition name="fade">
                <div
                  v-if="error"
                  class="rounded-xl border border-red-500/20 bg-red-500/10 p-4"
                >
                  <div class="flex items-center gap-3">
                    <Icon
                      name="lucide:circle-alert"
                      class="w-5 h-5 text-red-400"
                    />

                    <div>
                      <p class="font-medium text-red-400">
                        Impossible d'envoyer le message
                      </p>

                      <p class="text-sm text-white/60">
                        {{ error }}
                      </p>
                    </div>
                  </div>
                </div>
              </Transition>

              <button
                type="submit"
                :disabled="isLoading || !isFormValid"
                class="magnetic-btn magnetic-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <template v-if="isLoading">
                  <Icon
                    name="lucide:loader-circle"
                    class="w-4 h-4 animate-spin"
                  />
                  Envoi en cours...
                </template>

                <template v-else>
                  Envoyer le message
                  <Icon name="lucide:arrow-right" class="w-4 h-4" />
                </template>
              </button>
            </form>
          </div>

          <!-- INFO -->
          <div class="space-y-6">
            <div class="glass-card p-6 rounded-2xl">
              <div class="flex items-center gap-3 mb-4">
                <Icon name="lucide:mail" class="w-5 h-5 text-[#FF6F91]" />

                <h3 class="font-heading font-semibold">Email</h3>
              </div>

              <p class="text-white/70">graciaandriamihamina@gmail.com</p>
            </div>

            <div class="glass-card p-6 rounded-2xl">
              <div class="flex items-center gap-3 mb-4">
                <Icon name="lucide:clock-3" class="w-5 h-5 text-[#FFC75F]" />

                <h3 class="font-heading font-semibold">Délai de réponse</h3>
              </div>

              <p class="text-white/70">Généralement sous 24h</p>
            </div>

            <div class="glass-card p-6 rounded-2xl">
              <div class="flex items-center gap-3 mb-4">
                <Icon name="lucide:map-pin" class="w-5 h-5 text-[#FF9671]" />

                <h3 class="font-heading font-semibold">Basée à</h3>
              </div>

              <p class="text-white/70">
                Madagascar · Télétravail international
              </p>
            </div>

            <div class="glass-card p-6 rounded-2xl">
              <div class="flex items-center gap-3 mb-4">
                <Icon
                  name="lucide:badge-check"
                  class="w-5 h-5 text-emerald-400"
                />

                <h3 class="font-heading font-semibold">Disponibilité</h3>
              </div>

              <p class="text-emerald-400">
                Disponible pour de nouveaux projets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  category: "",
  subject: "",
  message: "",
});

const categories = [
  {
    value: "question",
    label: "Question rapide",
    description: "Besoin d'une information ou d'un conseil.",
    icon: "lucide:message-circle",
  },
  {
    value: "collaboration",
    label: "Collaboration",
    description: "Projet ou partenariat professionnel.",
    icon: "lucide:handshake",
  },
  {
    value: "recruitment",
    label: "Recrutement",
    description: "Opportunité de poste ou mission.",
    icon: "lucide:briefcase-business",
  },
  {
    value: "information",
    label: "Demande d'information",
    description: "En savoir plus sur mes services.",
    icon: "lucide:info",
  },
];

const isLoading = ref(false);
const isSuccess = ref(false);
const error = ref("");

const isFormValid = computed(() => {
  return (
    form.name.trim() &&
    form.email.trim() &&
    form.category &&
    form.subject.trim() &&
    form.message.trim()
  );
});

async function submitForm() {
  error.value = "";
  isSuccess.value = false;

  try {
    isLoading.value = true;

    await $fetch("/api/contact", {
      method: "POST",
      body: form,
    });

    isSuccess.value = true;

    Object.assign(form, {
      name: "",
      email: "",
      category: "",
      subject: "",
      message: "",
    });
  } catch (err: any) {
    error.value =
      err?.data?.message ||
      err?.statusMessage ||
      "Une erreur est survenue lors de l'envoi du message.";
  } finally {
    isLoading.value = false;
  }
}
</script>
