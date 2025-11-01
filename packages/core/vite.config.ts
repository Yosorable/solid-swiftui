import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  plugins: [
    solid({
      solid: {
        moduleName: '@solid-swiftui/core',
        generate: 'universal',
        hydratable: false,
      }
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SolidSwiftUICore',
      fileName: "sdk",
      formats: ["es", "iife"],
    },
  },
})