import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const APP_PORT = process.env.NODE_ENV === "development" ? 5173 : 80;

export default defineConfig({
  plugins: [react()],

  preview: {
    host: true,
    port: APP_PORT,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: APP_PORT,
  },
});
