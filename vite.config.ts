import { join, resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// @ts-ignore
import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, join('src', 'index.ts')),
      fileName: 'index',
      formats: ['es', 'cjs'],
      name: 'ui-kit',
    },
    minify: false,
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      rollupOptions: {
        external: [
          ...Object.keys(dependencies),
          ...Object.keys(devDependencies),
          'react/jsx-runtime',
        ],
        output: {
          dir: 'dist',
          entryFileNames: '[name].js',
          format: 'es',
        },
      },
    },
    target: 'esnext',
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }), // Output .d.ts files
  ],
})
