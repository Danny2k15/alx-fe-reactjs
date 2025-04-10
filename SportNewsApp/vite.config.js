// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Export config
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["react-router-dom", "axios"], // Exclude dependencies that are causing issues
  },
});
