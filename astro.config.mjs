// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pedestrian-geospatial.github.io',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
