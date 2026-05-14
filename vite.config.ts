import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  // DIT IS DE NIEUWE REGEL VOOR GITHUB PAGES:
  base: "/physics-learning-havo-5/", 
  
  server: {
    port: 3000,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: true,
    hmr: {
      clientPort: 443,
      overlay: true, 
    },
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/.local/**',  
        '**/pnpm-store/**',
      ],
    },
  },
  preview: {
    port: 3000,
    host: "0.0.0.0",
    strictPort: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true, 
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      onwarn(warning, warn) {
        warn(warning);
      },
    },
    minify: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    dedupe: ["react", "react-dom", "react-router-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    force: true,
  },
  clearScreen: false,
  logLevel: "info",
}));
