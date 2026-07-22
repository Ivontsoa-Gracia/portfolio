<template>
  <main>
    <section class="relative py-12 lg:py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-[1.5fr_0.8fr] gap-8">
          <div class="glass-card p-8 rounded-2xl">
            <h2 class="font-heading text-2xl font-semibold mb-8">
              Demande de projet
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

              <div class="grid sm:grid-cols-2 gap-3">
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="Entreprise"
                  class="contact-input"
                />

                <div class="space-y-2">
                  <div class="relative">
                    <select
                      v-model="form.projectType"
                      class="premium-select contact-input"
                    >
                      <option value="" disabled>
                        Choisir un type de projet
                      </option>

                      <option
                        v-for="category in categories"
                        :key="category.value"
                        :value="category.value"
                      >
                        {{ category.label }}
                      </option>
                    </select>

                    <Icon
                      name="lucide:chevron-down"
                      class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-3">
                <div class="relative">
                  <select
                    v-model="form.budget"
                    class="premium-select contact-input"
                  >
                    <option value="">Budget estimé</option>
                    <option>< 500€</option>
                    <option>500 - 1500€</option>
                    <option>1500 - 5000€</option>
                    <option>5000€+</option>
                  </select>
                  <Icon
                    name="lucide:chevron-down"
                    class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
                  />
                </div>
                <div class="relative">
                  <select
                    v-model="form.timeline"
                    class="premium-select contact-input"
                  >
                    <option value="">Délai souhaité</option>
                    <option>Urgent</option>
                    <option>1-2 mois</option>
                    <option>3-6 mois</option>
                    <option>Flexible</option>
                  </select>
                  <Icon
                    name="lucide:chevron-down"
                    class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
                  />
                </div>
              </div>

              <textarea
                v-model="form.description"
                rows="6"
                placeholder="Décrivez votre projet..."
                class="contact-input resize-none"
              />

              <div class="space-y-2">
                <label class="block text-sm text-white/60">
                  Document du projet (optionnel)
                </label>

                <label
                  class="upload-zone"
                  @dragover.prevent
                  @drop.prevent="onDropFile"
                >
                  <input
                    type="file"
                    class="hidden"
                    @change="handleFile"
                    accept=".pdf,.doc,.docx,.zip"
                  />

                  <div
                    class="flex flex-col items-center justify-center text-center gap-2"
                  >
                    <Icon
                      name="lucide:upload-cloud"
                      class="w-6 h-6 text-white/50"
                    />

                    <p class="text-sm text-white/70">
                      Glisse ton fichier ici ou clique pour importer
                    </p>

                    <p class="text-xs text-white/40">
                      PDF, DOC, DOCX ou ZIP (max 10MB)
                    </p>
                  </div>
                </label>

                <div v-if="file" class="file-preview">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <Icon
                        :name="file ? getFileIcon(file) : 'lucide:file'"
                        class="w-4 h-4 text-emerald-400"
                      />

                      <div>
                        <p class="text-sm text-white">
                          {{ file.name }}
                        </p>

                        <p class="text-xs text-white/40">
                          {{ (file.size / 1024 / 1024).toFixed(2) }} MB
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="text-white/40 hover:text-red-400 transition"
                      @click="file = null"
                    >
                      <Icon name="lucide:x" class="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

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
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
});

const file = ref<File | null>(null);

const categories = [
  {
    value: "website",
    label: "Site Web",
    description: "Site vitrine ou institutionnel",
  },
  {
    value: "webapp",
    label: "Application Web",
    description: "Plateforme ou SaaS",
  },
  {
    value: "ecommerce",
    label: "E-commerce",
    description: "Boutique en ligne",
  },
  {
    value: "branding",
    label: "Branding",
    description: "Logo et identité visuelle",
  },
];

function handleFile(e: Event) {
  const target = e.target as HTMLInputElement;
  file.value = target.files?.[0] || null;
}

function onDropFile(e: DragEvent) {
  const droppedFile = e.dataTransfer?.files?.[0];
  if (droppedFile) {
    file.value = droppedFile;
  }
}

function getFileIcon(file: File) {
  const ext = file.name.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "pdf":
      return "lucide:file-text";
    case "doc":
    case "docx":
      return "lucide:file-text";
    case "zip":
      return "lucide:folder-archive";
    case "png":
    case "jpg":
    case "jpeg":
    case "webp":
      return "lucide:image";
    default:
      return "lucide:file";
  }
}

const isLoading = ref(false);
const isSuccess = ref(false);
const error = ref("");

const isFormValid = computed(() => {
  return (
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.projectType.trim().length > 0 &&
    form.description.trim().length > 0 &&
    form.budget.trim().length > 0
  );
});

async function submitForm() {
  error.value = "";
  isSuccess.value = false;

  try {
    isLoading.value = true;

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("company", form.company);
    formData.append("projectType", form.projectType);
    formData.append("budget", form.budget);
    formData.append("timeline", form.timeline);
    formData.append("description", form.description);

    if (file.value) {
      formData.append("file", file.value);
    }

    await $fetch("/api/quotes", {
      method: "POST",
      body: formData,
    });

    isSuccess.value = true;

    Object.assign(form, {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    });

    file.value = null;
  } catch (err: any) {
    error.value = err?.data?.message || "Erreur lors de l'envoi du devis.";
  } finally {
    isLoading.value = false;
  }
}
</script>

