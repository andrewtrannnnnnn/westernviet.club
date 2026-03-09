import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import legacyPlugin from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    reactPlugin(),
    legacyPlugin({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
