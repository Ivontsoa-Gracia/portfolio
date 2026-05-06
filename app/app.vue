<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: "ease-out-cubic",
    once: true,
    mirror: false,
  });
});

useHead({
  title: "Ivo Andrianah - Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Ivo Andrianah est ingénieure logicielle, designer UI/UX et designer de marque. Elle conçoit des systèmes digitaux modernes, centrés utilisateur et orientés produit.",
    },
    {
      name: "keywords",
      content:
        "portfolio, ingénieure logicielle, développeuse web, UI UX designer, brand designer, design produit, développement web Madagascar, systèmes digitaux, interface utilisateur",
    },
    { name: "robots", content: "index, follow" },

    {
      property: "og:title",
      content: "Ivo Andrianah — Ingénieure Logicielle & UI/UX Designer",
    },
    {
      property: "og:description",
      content:
        "Portfolio d’Ivo Andrianah : conception et développement de systèmes digitaux, design UI/UX et création d’identités de marque.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://portfolio-andrianah.vercel.app/" },
    {
      property: "og:image",
      content: "https://portfolio-andrianah.vercel.app/logo.png",
    },

    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Ivo Andrianah — Portfolio Ingénierie & Design",
    },
    {
      name: "twitter:description",
      content:
        "Ingénieure logicielle et designer UI/UX, spécialisée dans les systèmes digitaux et les expériences produit.",
    },
    {
      name: "twitter:image",
      content: "https://portfolio-andrianah.vercel.app/logo.png",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.boxicons.com/fonts/basic/boxicons.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/Pirulen-regular.otf",
      type: "font/otf",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.cdnfonts.com/css/pirulen",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/HelveticaNeueRoman.otf",
      type: "font/otf",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.cdnfonts.com/css/helvetica-neue-55",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/Akrux-Light.otf",
      type: "font/otf",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/sc.otf",
      type: "font/otf",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/Poppins-Regular.ttf",
      type: "font/ttf",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/Birthstone-Casual-Regular.ttf",
      type: "font/ttf",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/AvenirLTProBlack.otf",
      type: "font/ttf",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/RemixaTest-Bold.otf",
      type: "font/otf",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/RemixaTest-Regular.otf",
      type: "font/otf",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/Gebuk-Regular.ttf",
      type: "font/otf",
      crossorigin: "anonymous",
    },
  ],
});
</script>

<style>
@font-face {
  font-family: "Pirulen";
  src: local("Pirulen"), url("/font/Pirulen-regular.otf") format("opentype"),
    url("/font/Pirulen-regular.woff2") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Helvetica";
  src: local("Helvetica Neue"),
    url("/font/HelveticaNeueRoman.otf") format("opentype"),
    url("https://fonts.cdnfonts.com/s/14760/HelveticaNeue.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Poppins";
  src: url("/font/Poppins-Regular.ttf") format("opentype");
}

@font-face {
  font-family: "Birthstone-Casual-Regular";
  src: url("/font/Birthstone-Casual-Regular.ttf") format("opentype");
}
@font-face {
  font-family: "AvenirLTProBlack";
  src: url("/font/AvenirLTProBlack.otf") format("opentype");
}
@font-face {
  font-family: "RemixaTest-Bold";
  src: url("/font/RemixaTest-Bold.otf") format("opentype");
}
@font-face {
  font-family: "RemixaTest-Regular";
  src: url("/font/RemixaTest-Regular.otf") format("opentype");
}
@font-face {
  font-family: "Gebuk";
  src: url("/font/Gebuk-Regular.ttf") format("opentype");
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-thumb {
  background-color: #e0e5ea;
  border-radius: 10px;
}
</style>
