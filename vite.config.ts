import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import type { Connect } from 'vite';
import path from 'path';
import { defineConfig, type ViteDevServer } from 'vite';

const sitePath = '/bravi/concerts/26-winter-fki-tower';
const base = `${sitePath}/`;

function redirectRootToBase(): Connect.NextHandleFunction {
  return (req, res, next) => {
    const url = req.url?.split('?')[0] ?? '';
    if (url === '/' || url === '') {
      res.writeHead(302, { Location: base });
      res.end();
      return;
    }
    next();
  };
}

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'redirect-root-to-base',
      configureServer(server: ViteDevServer) {
        server.middlewares.use(redirectRootToBase());
      },
      configurePreviewServer(server) {
        server.middlewares.use(redirectRootToBase());
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
