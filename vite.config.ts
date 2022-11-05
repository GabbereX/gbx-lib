import path from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'GBX-Lib',
      formats: ['es', 'umd'],
      fileName: (format) => `gbx-lib.${format}.js`,
    },
    rollupOptions: {
      external: [ 'react', 'react-dom', 'styled-components' ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
});
