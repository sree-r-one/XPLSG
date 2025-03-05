import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env": env, // Ensure Vite loads .env variables
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: false, // Disable sourcemaps in production for better performance
      minify: "esbuild", // Minify using esbuild (faster)
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
          },
        },
      },
      cssCodeSplit: true, // Optimize CSS by splitting files
    },
    base: env.VITE_BASE_URL || "/", // Ensure assets have correct base path
  };
});
