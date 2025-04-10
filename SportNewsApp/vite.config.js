// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Export config
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/react-vite-deploy", 
  optimizeDeps: {
    exclude: ["react-router-dom", "axios"],
  },
});
