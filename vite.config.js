import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: "src/index.html",
        search: "src/search/index.html",
        facility: "src/info/index.html",
        campsite: "src/campsite/campsite.html"
      },
    },
  },
});
