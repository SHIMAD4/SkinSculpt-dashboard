import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
    },
    define: {
      'process.env.AUTH_TOKEN_WILDBERRIES': JSON.stringify(env.AUTH_TOKEN_WILDBERRIES),
      'process.env.AUTH_TOKEN_OZON': JSON.stringify(env.AUTH_TOKEN_OZON),
      'process.env.AUTH_TOKEN_YAMARKET': JSON.stringify(env.AUTH_TOKEN_YAMARKET),
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/wb/api': {
          changeOrigin: true,
          target: 'https://statistics-api.wildberries.ru/api/',
          rewrite: (path) => path.replace(/^\/wb\/api/, ''),
        },
        '/ozon/api': {
          changeOrigin: true,
          target: 'https://api-seller.ozon.ru/',
        },
        '/yaMarket/api': {
          changeOrigin: true,
          target: 'https://api.partner.market.yandex.ru/',
          rewrite: (path) => path.replace(/^\/yaMarket\/api/, ''),
        },
      },
      cors: true,
    },
  };
});
