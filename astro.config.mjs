// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bojanraic.github.io',
  base: process.env.ASTRO_BASE ?? '/astro-pr-gh-pages-demo',
});
