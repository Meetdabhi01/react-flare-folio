import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// This config file remains but with minimal settings
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
