/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'sunset-orange': {
					50: 'hsl(9, 100%, 97%)',
					100: 'hsl(7, 100%, 94%)',
					200: 'hsl(7, 100%, 89%)',
					300: 'hsl(7, 100%, 81%)',
					400: 'hsl(7, 100%, 70%)',
					500: 'hsl(7, 100%, 63%)',
					600: 'hsl(7, 86%, 51%)',
					700: 'hsl(7, 88%, 42%)',
					800: 'hsl(7, 83%, 35%)',
					900: 'hsl(7, 74%, 31%)',
					950: 'hsl(7, 90%, 15%)'
				}
			}
		}
	},
	plugins: []
};
