import type { APIRoute } from 'astro';
import { LOGO_LETTER, LOGO_COLOR } from '../../astro.config.mjs';

export const GET: APIRoute = () => {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="${LOGO_COLOR}"/>
  <text x="50" y="58" font-size="32" text-anchor="middle" fill="white" font-family="sans-serif">${LOGO_LETTER}</text>
</svg>
`;
	return new Response(svg, {
		headers: { 'Content-Type': 'image/svg+xml' },
	});
};
