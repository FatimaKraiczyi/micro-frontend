import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "orchestrator",
      remotes: {
        segundoMFE: "http://localhost:3001/dist/assets/remoteEntry.js",
        primeiroMFE: "http://localhost:3002/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
});
