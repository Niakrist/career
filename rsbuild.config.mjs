import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    favicon: "./src/assets/icons/favicon.svg",
    title: "Career App",
  },
  source: {
    alias: {
      "@": "./src",
    },
  },
});
