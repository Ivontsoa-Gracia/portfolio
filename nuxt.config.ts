export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  site: {
    url: "https://portfolio-andrianah.vercel.app/",
    name: "Gracia Portfolio",
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vite-pwa/nuxt'],
  css: ['@/assets/css/main.css'],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        {
          name: "google-site-verification",
          content: "8aBEGykV_15nMpqshHPhNY74v1wwCFASnDGRDduB8rg",
        },
      ],
      link: [
        {
          rel: "manifest",
          href: "/manifest.webmanifest",
        },
      ],
    },
  },
   vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    optimizeDeps: {
      include: []
    },
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
      '/api/**': {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }
    },
  },
  pwa: {
    registerType: "autoUpdate",

    devOptions: {
      enabled: true,
      type: "module"
    },

    manifest: {
      name: "Gracia Portfolio",
      short_name: "Gracia",
      description: "Portfolio de Gracia - Digital Designer & Full Stack Developer",

      theme_color: "#000000",

      icons: [
        {
          src: "/icon-192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icon-512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },

    workbox: {
      navigateFallback: '/',
    },
  },
  runtimeConfig: {
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY,
    public: {
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      firebaseVapidKey: process.env.NUXT_PUBLIC_FIREBASE_VAPID_KEY,

    }
  },
  
})

