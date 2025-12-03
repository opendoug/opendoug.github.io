import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Determine the base path from an environment variable, defaulting to '/' 
// which is correct for your opendoug.github.io User Site.
const BASE_PATH = process.env.VITE_BASE_PATH || '/';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Apply the variable base path here
  base: BASE_PATH, 
}));
