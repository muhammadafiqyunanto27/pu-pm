import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://pu-pm.vercel.app',
	base: process.env.GITHUB_ACTIONS ? '/pu-pm' : '/',
	integrations: [react()],
});
