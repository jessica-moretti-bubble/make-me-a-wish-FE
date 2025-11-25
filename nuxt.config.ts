// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],

  scripts: {
    registry: {
      googleMaps: true,
    },
  },

  runtimeConfig: {
    public: {
      scripts: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
    B2_KEY_ID: process.env.B2_KEY_ID,
    B2_APP_KEY: process.env.B2_APP_KEY,
    B2_BUCKET: process.env.B2_BUCKET,
    B2_ENDPOINT: process.env.B2_ENDPOINT,
    B2_REGION: process.env.B2_REGION,
  },

  routeRules: {
    "/": {
      redirect: "/login",
    },
  },

  pinia: {
    storesDirs: ["./stores"],
  },

  css: ["~/assets/css/tailwind.css", "@/assets/css/global.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },

  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },

  googleFonts: {
    families: {
      Nunito: [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
});
