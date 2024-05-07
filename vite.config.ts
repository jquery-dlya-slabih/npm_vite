import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import nodeExternals from 'rollup-plugin-node-externals';

export default defineConfig({
  build: {
    lib: {
      formats: ['es', 'cjs'],
      entry: 'src/index.ts',
      fileName: '[name]'
    }
  },
  server: {
    port: 3000
  },
  plugins: [react(), nodeExternals()]
})