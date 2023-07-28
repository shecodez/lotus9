// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      storyblokAccessToken: process.env.STORYBLOK_ACCESS_TOKEN
    }
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    [
      '@storyblok/nuxt', { 
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: {
          region: 'us' // Set 'US" if your space is created in US region (EU default)
        } 
      }
    ]
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  vite: {
    optimizeDeps: { exclude: ["fsevents"] }
  },
  devtools: { enabled: true }
})
