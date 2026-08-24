// @ts-check
import { defineConfig } from 'astro/config';

export const SITE_ROOT = '/';
export const PREVIEW_SEGMENT = process.env.PREVIEW_SEGMENT ?? '_previews';

const prNumber = process.env.PR_NUMBER;
const base = prNumber ? `${SITE_ROOT}${PREVIEW_SEGMENT}/pr-${prNumber}/` : SITE_ROOT;

const LOGO_COLORS = ['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#a855f7', '#06b6d4'];
export const LOGO_LETTER = prNumber ? String.fromCharCode(65 + (Number(prNumber) % 26)) : 'A';
export const LOGO_COLOR = prNumber ? LOGO_COLORS[Number(prNumber) % LOGO_COLORS.length] : LOGO_COLORS[0];

// https://astro.build/config
export default defineConfig({
  site: 'https://bojan.link',
  base,
});
