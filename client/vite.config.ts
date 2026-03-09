import { defineConfig } from "vite";
import legacyPlugin from "@vitejs/plugin-legacy";
import reactPlugin from "@vitejs/plugin-react";
import tailwindPlugin from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    legacyPlugin({
      targets: ["defaults", "not IE 11"],
    }),
    reactPlugin(),
    tailwindPlugin(),
  ],
});
