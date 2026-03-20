import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";

export default defineConfig({
  root: "apps/frontend",
  plugins: [
    reactPlugin(),
  ],
});
