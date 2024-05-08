import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import nodeExternals from 'rollup-plugin-node-externals';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      formats: ['es', 'cjs'],
      entry: 'src/index.ts',
      fileName: '[name]'
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
