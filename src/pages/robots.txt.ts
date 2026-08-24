import type { APIRoute } from 'astro';
import { SITE_ROOT, PREVIEW_SEGMENT } from '../../astro.config.mjs';

export const GET: APIRoute = () => {
	return new Response(`User-agent: *\nDisallow: ${SITE_ROOT}${PREVIEW_SEGMENT}/\n`, {
		headers: { 'Content-Type': 'text/plain' },
	});
};
