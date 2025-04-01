import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueTsSevenSegmentDisplay",
      fileName: "vue-ts-seven-segment-display",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
