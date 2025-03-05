import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist", // Output directory for production build
    emptyOutDir: true, // Clears the output folder before building
    sourcemap: false, // Disable sourcemaps in production for better performance
    // minify: "terser", // Minify JS using Terser
    minify: "esbuild", // Use esbuild (default) instead of terser
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
    cssCodeSplit: true, // Optimize CSS by splitting files
    // terserOptions: {
    //   compress: {
    //     drop_console: true, // Remove console logs in production
    //     drop_debugger: true, // Remove debugger statements
    //   },
    // },
  },
  base: "/",
});
