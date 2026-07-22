<template>
  <main>
    <div
      v-if="isLoading"
      class="pt-40 max-w-4xl mx-auto px-6 flex flex-col gap-6"
    >
      <div class="h-6 w-32 bg-white/10 animate-pulse rounded-full" />
      <div class="h-16 w-3/4 bg-white/10 animate-pulse rounded" />
      <div class="h-4 w-full bg-white/10 animate-pulse rounded" />
      <div class="h-4 w-2/3 bg-white/10 animate-pulse rounded" />
    </div>

    <div v-else-if="notFound" class="pt-40 text-center text-white/40">
      Projet introuvable.
    </div>

    <template v-else-if="project">
      <section class="relative pt-32 pb-20 lg:pt-40 overflow-hidden">
        <div class="aurora-bg">
          <div class="aurora-blob aurora-blob-1 opacity-15" />
          <div class="aurora-blob aurora-blob-2 opacity-10" />
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="d in project.domains"
                :key="d.domain.key"
                class="px-3 py-1 text-xs rounded-full border"
                :style="{
                  color: d.domain.color,
                  borderColor: d.domain.color,
                  backgroundColor: d.domain.color + '20',
                }"
              >
                {{ d.domain.label }}
              </span>
            </div>

            <h1
              class="font-heading text-5xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              {{ project.titre }}
            </h1>

            <!-- <p class="text-lg text-white/50 leading-relaxed max-w-3xl mb-10">
              {{ project.description }}
            </p> -->

            <div class="grid sm:grid-cols-3 gap-6 glass-card rounded-2xl p-6">
              <div>
                <p class="text-xs text-white/30 mb-1">Services</p>
                <p class="font-medium text-sm">
                  {{ project.services.map((s) => s.service.title).join(", ") }}
                </p>
              </div>
              <div>
                <p class="text-xs text-white/30 mb-1">Catégorie</p>
                <p class="font-medium text-sm capitalize">
                  {{ project.category }}
                </p>
              </div>
              <div>
                <p class="text-xs text-white/30 mb-1">Stack</p>
                <p class="font-medium text-sm">
                  {{ project.stacks.map((s) => s.stack.name).join(", ") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-24">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="glass-card overflow-hidden rounded-3xl">
            <img
              :src="project.images[0].url"
              :alt="project.titre"
              class="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="max-w-4xl mx-auto px-6">
          <p class="text-sm small-text mb-3">Aperçu</p>
          <h2 class="font-heading text-4xl font-bold mb-8">Présentation du projet</h2>

          <template v-for="(block, index) in contentDescription" :key="index">
            <h2
              v-if="block.type === 'heading'"
              v-html="block.text"
              class="text-white/60 leading-8 font-semibold mb-3 mt-3"
            ></h2>

            <p
              v-else-if="block.type === 'paragraph'"
              v-html="block.text"
              class="text-white/60 leading-8 mb-6 whitespace-pre-line"
            ></p>

            <ul
              v-else-if="block.type === 'list'"
              class="list-disc ml-6 space-y-2 text-white/60 mb-6"
            >
              <li v-for="(item, i) in block.items" :key="i" v-html="item"></li>
            </ul>

            <blockquote
              v-else-if="block.type === 'quote'"
              v-html="block.text"
              class="border-l-4 border-purple-500 pl-4 italic text-white/70"
            ></blockquote>

            <hr
              v-else-if="block.type === 'divider'"
              class="my-10 border-white/10"
            />
          </template>
        </div>
      </section>

      <section class="py-24 bg-[#08080c]">
        <div class="max-w-4xl mx-auto px-6">
          <p class="text-sm small-text mb-3">Défi</p>
          <h2 class="font-heading text-4xl font-bold mb-8">La problématique</h2>

          <template v-for="(block, index) in contentProblem" :key="index">
            <h2
              v-if="block.type === 'heading'"
              v-html="block.text"
              class="text-white/60 leading-8 font-semibold mb-3 mt-3"
            ></h2>

            <p
              v-else-if="block.type === 'paragraph'"
              v-html="block.text"
              class="text-white/60 leading-8 mb-6 whitespace-pre-line"
            ></p>

            <ul
              v-else-if="block.type === 'list'"
              class="list-disc ml-6 space-y-2 text-white/60 mb-6"
            >
              <li v-for="(item, i) in block.items" :key="i" v-html="item"></li>
            </ul>

            <blockquote
              v-else-if="block.type === 'quote'"
              v-html="block.text"
              class="border-l-4 border-purple-500 pl-4 italic text-white/70"
            ></blockquote>

            <hr
              v-else-if="block.type === 'divider'"
              class="my-10 border-white/10"
            />
          </template>
        </div>
      </section>

      <section class="py-24">
        <div class="max-w-4xl mx-auto px-6">
          <p class="text-sm small-text mb-3">Solution</p>
          <h2 class="font-heading text-4xl font-bold mb-8">Approche de conception</h2>

          <template v-for="(block, index) in contentSolution" :key="index">
            <h2
              v-if="block.type === 'heading'"
              v-html="block.text"
              class="text-white/60 leading-8 font-semibold mb-3 mt-3"
            ></h2>

            <p
              v-else-if="block.type === 'paragraph'"
              v-html="block.text"
              class="text-white/60 leading-8 mb-6 whitespace-pre-line"
            ></p>

            <ul
              v-else-if="block.type === 'list'"
              class="list-disc ml-6 space-y-2 text-white/60 mb-6"
            >
              <li v-for="(item, i) in block.items" :key="i" v-html="item"></li>
            </ul>

            <blockquote
              v-else-if="block.type === 'quote'"
              v-html="block.text"
              class="border-l-4 border-purple-500 pl-4 italic text-white/70"
            ></blockquote>

            <hr
              v-else-if="block.type === 'divider'"
              class="my-10 border-white/10"
            />
          </template>
        </div>
      </section>

      <section v-if="project.images.length > 1" class="py-24">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-for="image in project.images"
              :key="image.id"
              class="glass-card overflow-hidden rounded-2xl"
            >
              <img
                :src="image.url"
                :alt="project.titre"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-[#08080c]">
        <div class="max-w-4xl mx-auto px-6">
          <p class="text-sm small-text mb-3">Résultats</p>
          <h2 class="font-heading text-4xl font-bold mb-8">Résultats & Impact</h2>

          <template v-for="(block, index) in contentResult" :key="index">
            <h2
              v-if="block.type === 'heading'"
              v-html="block.text"
              class="text-white/60 leading-8 font-semibold mb-3 mt-3"
            ></h2>

            <p
              v-else-if="block.type === 'paragraph'"
              v-html="block.text"
              class="text-white/60 leading-8 mb-6 whitespace-pre-line"
            ></p>

            <ul
              v-else-if="block.type === 'list'"
              class="list-disc ml-6 space-y-2 text-white/60 mb-6"
            >
              <li v-for="(item, i) in block.items" :key="i" v-html="item"></li>
            </ul>

            <blockquote
              v-else-if="block.type === 'quote'"
              v-html="block.text"
              class="border-l-4 border-purple-500 pl-4 italic text-white/70"
            ></blockquote>

            <hr
              v-else-if="block.type === 'divider'"
              class="my-10 border-white/10"
            />
          </template>
        </div>
      </section>

      <section class="py-24">
        <div class="max-w-4xl mx-auto px-6">
          <p class="text-sm small-text mb-3">Technologies</p>
          <h2 class="font-heading text-4xl font-bold mb-8">Outils & Stack technique</h2>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="s in project.stacks"
              :key="s.stack.id"
              class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70"
            >
              {{ s.stack.name }}
            </span>
          </div>
        </div>
      </section>
      <ProjectRecommendations :recommendations="recommendations" />
    </template>
    <ProjectsCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

import { ref, onMounted, computed } from "vue";
import { onBeforeUnmount } from "vue";

import { useRoute } from "vue-router";
import ProjectRecommendations from "~/components/projects/ProjectRecommendations.vue";
import ProjectsCTA from "~/components/projects/ProjectsCTA.vue";
import Footer from "~/components/Footer.vue";

const route = useRoute();
const slug = route.params.slug as string;

const project = ref<any>(null);
const isLoading = ref(true);
const notFound = ref(false);

onMounted(async () => {
  try {
    const data = (await $fetch("/api/projects")) as any[];
    const found = data.find((p: any) => p.slug === slug);
    if (!found) {
      notFound.value = true;
    } else {
      project.value = found;
    }
  } catch (e) {
    console.error("❌", e);
    notFound.value = true;
  } finally {
    isLoading.value = false;
  }
});

const startTime = ref<number>(Date.now());

const visitorId = useCookie("visitorId");

if (!visitorId.value) {
  visitorId.value = crypto.randomUUID();
}

onBeforeUnmount(async () => {
  if (!project.value) return;

  const duration = Math.floor((Date.now() - startTime.value) / 1000);

  try {
    await $fetch("/api/visits/post", {
      method: "POST",
      body: {
        visitorId: visitorId.value,
        projectId: project.value.id,
        duration,
      },
    });
  } catch (e) {
    console.error("❌ visit error", e);
  }
});

const recommendations = ref<any[]>([]);

watch(project, async (newProject) => {
  if (!newProject?.id) return;

  const { data } = await useFetch("/api/recommendations/get", {
    query: {
      visitorId: visitorId.value,
      currentProjectId: newProject.id,
    },
  });

  recommendations.value = data.value || [];
});

const formatContent = (text: string) => {
  return text
    .split("\n")
    .filter(Boolean)
    .map((paragraph) => {
      // Liste après ":"
      if (paragraph.includes(":")) {
        const [title, ...rest] = paragraph.split(":");
        const items = rest
          .join(":")
          .split(";")
          .map((i) => i.trim())
          .filter(Boolean);

        return {
          type: "list",
          title,
          items,
        };
      }

      return {
        type: "paragraph",
        text: paragraph,
      };
    });
};

const overview = computed(() =>
  formatContent(project.value?.description || "")
);
const problem = computed(() => formatContent(project.value?.problem || ""));

type ContentBlock =
  | {
      type: "heading";
      level: number;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      ordered: boolean;
      items: string[];
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "divider";
    }
  | {
      type: "code";
      language: string;
      content: string;
    }
  | {
      type: "callout";
      variant: string;
      text: string;
    }
  | {
      type: "metric";
      value: string;
      label: string;
    }
  | {
      type: "gallery";
      images: string[];
    }
  | {
      type: "video";
      src: string;
    };

function parseInline(text: string) {
  return (
    text
      // Gras **texte**
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

      // Italique *texte*
      .replace(/\*(.*?)\*/g, "<em>$1</em>")

      // Code inline `code`
      .replace(/`(.*?)`/g, "<code>$1</code>")
  );
}

function parseMarkdown(markdown: string) {
  const lines = markdown.split("\n");
  const blocks: any[] = [];

  let paragraph: string[] = [];
  let list: string[] = [];
  let ordered = false;
  let code: string[] = [];
  let inCode = false;
  let codeLanguage = "";

  function flushParagraph() {
    if (paragraph.length) {
      blocks.push({
        type: "paragraph",
        text: parseInline(paragraph.join(" ")),
      });
      paragraph = [];
    }
  }

  function flushList() {
    if (list.length) {
      blocks.push({
        type: "list",
        ordered,
        items: list.map((item) => parseInline(item)),
      });
      list = [];
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]?.trim();

    if (line?.startsWith("```")) {
      flushParagraph();
      flushList();

      if (!inCode) {
        inCode = true;
        codeLanguage = line.replace("```", "");
      } else {
        blocks.push({
          type: "code",
          language: codeLanguage,
          content: code.join("\n"),
        });
        code = [];
        inCode = false;
      }
      continue;
    }

    if (inCode) {
      code.push(line);
      continue;
    }

    if (line?.startsWith("#")) {
      flushParagraph();
      flushList();

      const level = line.match(/^#+/)![0].length;

      blocks.push({
        type: "heading",
        level,
        text: parseInline(line.replace(/^#+/, "").trim()),
      });
      continue;
    }

    if (line?.match(/^!\[/)) {
      flushParagraph();

      const match = line.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        blocks.push({
          type: "image",
          alt: match[1],
          src: match[2],
        });
      }
      continue;
    }

    if (line?.match(/^\[/)) {
      const match = line.match(/\[(.*?)\]\((.*?)\)/);

      if (match) {
        blocks.push({
          type: "link",
          text: parseInline(match[1]),
          url: match[2],
        });
      }
      continue;
    }
    if (line?.startsWith(">")) {
      flushParagraph();

      blocks.push({
        type: "quote",
        text: parseInline(line.replace(">", "").trim()),
      });
      continue;
    }

    if (line === "---") {
      flushParagraph();
      flushList();

      blocks.push({
        type: "divider",
      });
      continue;
    }

    if (line?.startsWith("- ")) {
      flushParagraph();

      ordered = false;

      list.push(line.replace("- ", ""));

      continue;
    }

    if (line?.match(/^\d+\./)) {
      flushParagraph();

      ordered = true;
      list.push(line.replace(/^\d+\./, "").trim());
      continue;
    }

    flushList();

    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

const contentDescription = computed(() => {
  return parseMarkdown(project.value?.description || "");
});

const contentProblem = computed(() => {
  return parseMarkdown(project.value?.problem || "");
});

const contentSolution = computed(() => {
  return parseMarkdown(project.value?.solution || "");
});

const contentResult = computed(() => {
  return parseMarkdown(project.value?.result || "");
});

const components = {
  heading: "ContentHeading",
  paragraph: "ContentParagraph",
  list: "ContentList",
  image: "ContentImage",
  quote: "ContentQuote",
  code: "ContentCode",
  divider: "ContentDivider",
  callout: "ContentCallout",
  metric: "ContentMetric",
  gallery: "ContentGallery",
  video: "ContentVideo",
};

function getComponent(type: string) {
  return components[type];
}
</script>

<style scoped>
span {
  transition: all 0.2s ease;
}
span:hover {
  transform: scale(1.05);
  background-color: #8249CC/30;
}
button:focus {
  outline: none;
}
</style>
