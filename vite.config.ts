import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import nodeExternals from 'rollup-plugin-node-externals';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts'
    },
    rollupOptions: {
      output: [
        {
          dir: 'dist',
          entryFileNames: '[name].es.js',
          preserveModules: true
        },
        {
          dir: 'dist',
          format: 'cjs',
          entryFileNames: '[name].js'
        }
      ]
    }
  },
  server: {
    port: 3000,
    open: true
  },
  plugins: [
    react(),
    dts({ exclude: ['dev', 'src/*/*.test.*', 'vite.*.ts', 'vitest.*.ts'] }),
    nodeExternals()
  ]
});
