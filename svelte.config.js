// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// adapter: adapter(),
		vite: {
			optimizeDeps: {
				entries: []
			}
		},
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs'
			// fallback: true
			// precompress: false
		}),
		// trailingSlash: 'always',
		prerender: {
			default: true
		},
		paths: {
			// YOUR github repository name
			base: dev ? '' : '/rick-and-morty-svelte-kit'
			// assets: dev ? '' : '/rick-and-morty-svelte-kit'
		}
	}
};

export default config;
