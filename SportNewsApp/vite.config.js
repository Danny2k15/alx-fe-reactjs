import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/react-vite-deploy",
  optimizeDeps: {
  include: ['react-router-dom', 'axios', 'react-router'],
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
