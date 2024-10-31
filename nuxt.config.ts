// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
    'nuxt-og-image',
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
      Roboto: [400, 500, 600]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    base64: true,
    download: true,
    useStylesheet: false
  },
  site: {
    url: 'https://miempresa.com',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Mi Empresa de Desarrollo',
      titleTemplate: '%s | Mi Empresa de Desarrollo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: 'Empresa líder en desarrollo de software y soluciones digitales innovadoras' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Mi Empresa de Desarrollo' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://miempresa.com' }
      ]
    }
  },
  sitemap: {
    enabled: true,
    autoLastmod: true
  },
  ogImage: {
    defaults: {
      component: 'OgImage',
      width: 1200,
      height: 630
    }
  }
})