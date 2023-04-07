import transformerDirective from "@unocss/transformer-directives";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/image-edge", "@vueuse/nuxt"],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`,
    typography: true,
    transformers: [transformerDirective({ enforce: "pre" })], // enabled `@unocss/transformer-directives`,
  },
  css: ["@unocss/reset/tailwind.css", "@/assets/main.css"],
});
