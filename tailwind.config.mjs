/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dynatech-primary': '#2563eb',
				'dynatech-secondary': '#7c3aed',
				'dynatech-accent': '#ef4444',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #ff3366, #3366ff)',
				'gradient-secondary': 'linear-gradient(135deg, #3366ff, #8833ff)',
				'gradient-accent': 'linear-gradient(135deg, #ff3366, #8833ff)',
			},
		},
	},
	plugins: [],
	darkMode: ['class', '.darkmode'],
}