import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL?.trim() || 'https://tomoroll.com';

export default defineConfig({
  output: 'static',
  site,
  vite: {
    plugins: [tailwindcss()],
  },
});
