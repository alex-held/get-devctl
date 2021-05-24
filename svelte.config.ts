import preprocess from 'svelte-preprocess';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte'],

	kit: {
		target: '#svelte',
		hydrate: true,
		trailingSlash: 'ignore'
	}
};
export default  config
