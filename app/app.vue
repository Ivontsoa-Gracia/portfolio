<template>
  <div v-if="loading" class="page-loader">
    <div class="loader-ring"></div>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"

const loading = ref(true)
const nuxtApp = useNuxtApp()

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: "ease-out-cubic",
    once: true,
    mirror: false,
  })

  setTimeout(() => {
    loading.value = false
  }, 600)
})

nuxtApp.hook("page:start", () => {
  loading.value = true
})

nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    loading.value = false
  }, 300)
})

useHead({
  title: "Gracia Andriamihamina - Digital Product Designer & Full-Stack Engineer",

  meta: [
    {
      name: "description",
      content:
        "Portfolio de Gracia Andriamihamina, Digital Product Designer et Full-Stack Engineer. Elle conçoit des produits digitaux, des interfaces UI/UX intuitives, des identités de marque et des applications web modernes.",
    },

    {
      name: "keywords",
      content:
        "Gracia Andriamihamina, portfolio développeur web, full-stack engineer, software engineer Madagascar, UI UX designer, product designer, brand designer, design digital, développement application web, Nuxt.js, Vue.js, Python, Java, architecture logicielle, identité visuelle",
    },

    {
      name: "author",
      content: "Gracia Andriamihamina",
    },

    {
      name: "robots",
      content: "index, follow",
    },

    {
      name: "googlebot",
      content: "index, follow",
    },

    {
      property: "og:title",
      content:
        "Gracia Andriamihamina - Digital Product Designer & Full-Stack Engineer",
    },

    {
      property: "og:description",
      content:
        "Découvrez le portfolio de Gracia Andriamihamina : conception de produits digitaux, développement full-stack, UI/UX design et création d'identités de marque.",
    },

    {
      property: "og:type",
      content: "website",
    },

    {
      property: "og:locale",
      content: "fr_FR",
    },

    {
      property: "og:url",
      content: "https://portfolio-andrianah.vercel.app/",
    },

    {
      property: "og:image",
      content: "https://portfolio-andrianah.vercel.app/logo.png",
    },

    {
      property: "og:image:alt",
      content:
        "Portfolio de Gracia Andriamihamina — Digital Design & Engineering",
    },

    {
      name: "twitter:card",
      content: "summary_large_image",
    },

    {
      name: "twitter:title",
      content:
        "Gracia Andriamihamina — Digital Design & Engineering",
    },

    {
      name: "twitter:description",
      content:
        "Full-Stack Engineer et Digital Product Designer spécialisée dans la création d'applications web, expériences UI/UX et identités visuelles.",
    },

    {
      name: "twitter:image",
      content: "https://portfolio-andrianah.vercel.app/logo.png",
    },
  ],

  link: [
  {
      rel: "canonical",
      href: "https://portfolio-andrianah.vercel.app/",
    },
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
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap'
    }
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
