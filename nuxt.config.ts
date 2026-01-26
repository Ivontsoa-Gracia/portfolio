export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { name: 'google-site-verification', content: '8aBEGykV_15nMpqshHPhNY74v1wwCFASnDGRDduB8rg' }
      ]
    }
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
    },
  },
  
})