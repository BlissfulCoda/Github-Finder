import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: "**/*.tsx" }), svgr()],
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 3000,
      protocol: "ws",
    },
    watch: { usePolling: true },
  },
});
