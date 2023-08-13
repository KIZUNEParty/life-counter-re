/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'white-overlay': 'rgba(245, 245, 245, 0.6)',
			'pastel-black': '#0A0A0A',
			'jet': '#2e2f2f',
			'whitesmoke': '#f5f5f5',
			'living-coral': '#fe6e61',
			'overlay': 'rgba(0,0,0,0.4)'
		},
		borderRadius: {
			DEFAULT: '1rem'
		},
		extend: {
			scale: {
				85: '.85'
			}
		}
	},
	plugins: []
}