// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/i18n', {
      locales: [{ code: "fr", iso: "fr-FR", file: "fr.json" },{ code: "en", iso: "en-US", file: "en.json" }],
      defaultLocale: process.env.SITE_LOCALE || "en",
      strategy: "no_prefix",
      lazy: true,
      langDir: "locales",
      detectBrowserLanguage: false
    }]
  ]
})
