export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: "src",
  routeRules: {
    "/learn-app": { redirect: "/learn-app/tracker-setup" },
  },
  build: {
    transpile: ["gsap"],
  },

  components: {
    global: true,
    dirs: ["~/components"],
  },

  modules: [
    "@nuxt/ui",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
    "@vueuse/nuxt",
    "nuxt-swiper",
    "@nuxt/image",
  ],

  image: {},

  swiper: {
    modules: [
      "navigation",
      "pagination",
      "effect-creative",
      "autoplay",
      "scrollbar",
      "mousewheel",
      "free-mode",
      "effect-slide",
    ],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fa-IR",
        dir: "rtl",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "android-chrome",
          sizes: "192x192",
          href: "/android-chrome.png",
        },
        {
          rel: "splash-screen",
          sizes: "512x512",
          href: "/splash-screen.png",
        },
      ],
    },
  },

  runtimeConfig: {
    strapiURL: "https://cms.abrso.ir",
    previewSECRET: "",
    public: {
      strapiURL: "https://cms.abrso.ir",
    },
  },

  css: ["@/assets/css/main.css"],
  compatibilityDate: "2024-07-10",
});
