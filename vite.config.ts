import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'ViteVueTS',
      fileName: (format) => `vite-vue-ts.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // input: {
      //   'entry-point-a': path.resolve(__dirname, 'src/entry-point-a.tsx'),
      //   'entry-point-b': path.resolve(__dirname, 'src/entry-point-b.tsx'),
      // },
      // external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
          // vue: 'Vue'
        // }
      }
    }
  }
})
