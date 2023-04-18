import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import http from "http";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: "**/*.tsx" }), svgr()],
  server: {
    port: 3000,
    proxy: {
      "^/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
        ws: true,
        agent: new http.Agent(),
      },
    },
  },
});
