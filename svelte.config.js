import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: '404.html' }),
    paths: {
      base: dev ? '' : '/monthly-charges-pwa',
    },
	},
};

export default config;
