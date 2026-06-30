// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://6north6thstreet.com/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
