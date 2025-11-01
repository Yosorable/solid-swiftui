import { UserConfig, type PluginOption } from "vite";

const plugin: PluginOption = {
  name: "solid-swiftui-plugin",
  config() {
    const newConfig: UserConfig = {
      build: {
        rollupOptions: {
          input: "src/index.tsx",
          output: {
            format: "iife",
            globals: {
              "@solid-swiftui/core": "SolidSwiftUICore",
              "solid-js": "SolidSwiftUICore"
            },
            entryFileNames: "[name].js",
            chunkFileNames: "[name].js",
            assetFileNames: "assets/[name].[ext]"
          },
          external: ["@solid-swiftui/core", "solid-js"],
        },
        minify: false
      }
    }

    return newConfig
  }
}

export default function solidSwiftUIPlugin(): PluginOption {
  return plugin;
}