import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Load environment variables for development mode
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env": env, // Ensure Vite loads .env variables
    },
    plugins: [
      react({
        jsxRuntime: "automatic",
      }),
    ],
    resolve: {
      alias: {
        "@": "/src", // Common alias for cleaner imports
      },
    },
    server: {
      host: "0.0.0.0", // Allows access from Docker containers
      port: 3000, // Development port
      strictPort: true, // Fail if the port is in use
      watch: {
        usePolling: true, // Ensures file changes are detected inside Docker
        interval: 100,
      },
      proxy: {
        "/api": {
          target: "http://localhost:4000", // Redirect API calls to Express backend
          changeOrigin: true,
          secure: false,
        },
      },
      headers: {
        "Cross-Origin-Opener-Policy": "unsafe-none", // Disable COOP to allow OAuth
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Resource-Policy": "cross-origin",
        "Referrer-Policy": "no-referrer",
        "Permissions-Policy": "interest-cohort=()",
      },
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: true, // Enable sourcemaps for debugging
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
          },
        },
      },
      cssCodeSplit: true, // Keep CSS separate for easier debugging
      minify: false, // No minification in dev mode for better debugging
    },
    base: env.VITE_BASE_URL || "/", // Base path for assets
    css: {
      modules: {
        localsConvention: "camelCase",
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
        },
      },
    },
    esbuild: {
      target: "esnext",
    },
  };
});
