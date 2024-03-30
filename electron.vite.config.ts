import cp from "vite-plugin-cp";

const config = {
  main: {
    build: {
      outDir: "dist/main",
      emptyOutDir: true,
      lib: {
        formats: ["cjs"],
        entry: { main: "src/main/index.ts" },
      },
      rollupOptions: {
        input: "src/main/index.ts",
      },
    },
    resolve: {
      alias: {},
    },
    plugins: [
      cp({
        targets: [
          { src: "./manifest.json", dest: "dist" },
          { src: "./icon.png", dest: "dist" },
        ],
      }),
    ],
  },
  preload: {
    // vite config options
    build: {
      outDir: "dist/preload",
      emptyOutDir: true,
      lib: {
        formats: ["cjs"],
        entry: { preload: "src/preload.ts" },
      },
      rollupOptions: {
        // external: externalAll,
        input: "src/preload.ts",
      },
    },
    resolve: {},
  },
  renderer: {
    // vite config options
    build: {
      outDir: "dist/renderer",
      emptyOutDir: true,
      lib: {
        formats: ["es"],
        entry: { renderer: "src/renderer/index.ts" },
      },
      rollupOptions: {
        // external: externalAll,
        input: "src/renderer/index.ts",
      },
    },
    resolve: {},
  },
};

export default config;
