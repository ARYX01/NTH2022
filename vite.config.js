import { sveltekit } from '@sveltejs/kit/vite';
import { plugin as markdown } from 'vite-plugin-markdown'

/** @type {import('vite').UserConfig} */
const config = {
	server:{ port:3000 },
	plugins: [sveltekit(), markdown({ mode: ['html', 'toc'] })]
};

export default config;
