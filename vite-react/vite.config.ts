import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, "src");

// Mirrors tsconfig.app.json paths so bundler matches TypeScript
const fsdAliases: Record<string, string> = {
  "@/pages": path.join(src, "pages"),
  "@/widgets": path.join(src, "widgets"),
  "@/stores": path.join(src, "stores"),
  "@/entities": path.join(src, "entities"),
  "@/features": path.join(src, "features"),
  "@/shared": path.join(src, "shared"),
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      ...Object.entries(fsdAliases).map(([find, replacement]) => ({
        find,
        replacement,
      })),
      { find: "@", replacement: src },
    ],
  },
});
