/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0.2',
					},
					'100%': {
						opacity: '0.3',
					},
				},
				'fade-in-left': {
					'0%': {
						opacity: '0.4',
						transform: 'translateX(-4px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0px)',
					},
				},
			},
			animation: {
				'fade-in-right': 'fade-in-right 0.5s ease-in',
				'fade-in': 'fade-in 0.4s ease-in',
				'fade-in-left': 'fade-in-left 0.4s ease-in',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
