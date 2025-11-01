import { defineConfig } from "vite"
import solidSwiftUIPlugin from "./vite-plugin-solid-swiftui"
import solid from "vite-plugin-solid"

export default defineConfig({
  plugins: [
    solid({
      solid: {
        moduleName: '@solid-swiftui/core',
        generate: 'universal',
        hydratable: false,
      }
    }),
    solidSwiftUIPlugin()
  ]
})