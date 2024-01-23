import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				colors: {
					'primary-100': 'rgba(155, 68, 192, 1)',
					'primary-200': 'rgba(140, 54, 180, 1)',
					'primary-300': 'rgba(125, 40, 168, 1)',
					'primary-400': 'rgba(110, 25, 156, 1)',
					'primary-500': 'rgba(95, 11, 144, 1)',

					warning: 'rgba(164, 22, 26, 1)',
					white: 'rgba(249, 249, 249, 1)',

					'light-100': 'rgba(207, 207, 210, 1)',
					'light-200': 'rgba(166, 165, 171, 1)',
					'light-300': 'rgba(124, 123, 131, 1)',
					'light-400': 'rgba(83, 81, 92, 1)',
					'light-500': 'rgba(41, 39, 53, 1)',

					'dark-100': 'rgba(41, 39, 53, 1)',
					'dark-200': 'rgba(35, 34, 46, 1)',
					'dark-300': 'rgba(27, 27, 27, 1)',
					'dark-400': 'rgba(22, 22, 22, 1)',
					'dark-500': 'rgba(15, 15, 15, 1)',
					'dark-600': 'rgba(8, 8, 8, 1)',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
