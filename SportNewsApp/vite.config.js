import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "./",
  optimizeDeps: {
    include: ["react-router-dom", "axios", "react-router"],
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
});
