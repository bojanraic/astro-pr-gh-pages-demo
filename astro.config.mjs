// @ts-check
import { defineConfig } from 'astro/config';

export const SITE_ROOT = '/astro-pr-gh-pages-demo/';
export const PREVIEW_SEGMENT = process.env.PREVIEW_SEGMENT ?? '_previews';

const prNumber = process.env.PR_NUMBER;
const base = prNumber ? `${SITE_ROOT}${PREVIEW_SEGMENT}/pr-${prNumber}/` : SITE_ROOT;

// https://astro.build/config
export default defineConfig({
  site: 'https://bojanraic.github.io',
  base,
});
