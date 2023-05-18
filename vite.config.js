import mkcert from 'vite-plugin-mkcert';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  server: { https: true },
  plugins: [mkcert()],
});
