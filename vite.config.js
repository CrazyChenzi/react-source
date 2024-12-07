import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: path.posix.resolve('src/react'),
      shared: path.posix.resolve('src/shared'),
    },
  },
  optimizeDeps: {
    force: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Split node_modules into separate chunks
            const chunks = id.split('/node_modules/');
            if (chunks.length > 1) {
              return chunks[1].split('/')[0];
            }
          }
          return null;
        },
      },
    },
  },
});
