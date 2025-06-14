
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			screens: {
				'xs': '475px',
				'3xl': '1600px',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				luna: {
					primary: 'hsl(var(--luna-primary))',
					'primary-dark': 'hsl(var(--luna-primary-dark))',
					secondary: 'hsl(var(--luna-secondary))',
					accent: 'hsl(var(--luna-accent))',
					'tech-black': 'hsl(var(--luna-tech-black))',
					'deep-black': 'hsl(var(--luna-deep-black))',
					'light-gray': 'hsl(var(--luna-light-gray))',
					success: 'hsl(var(--luna-success))',
					warning: 'hsl(var(--luna-warning))',
					error: 'hsl(var(--luna-error))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%) scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0) scale(1)',
						opacity: '1'
					}
				},
				'bounce-subtle': {
					'0%, 100%': {
						transform: 'translateY(0) scale(1)'
					},
					'50%': {
						transform: 'translateY(-8px) scale(1.05)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)'
					}
				},
				'floating': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)'
					},
					'33%': { 
						transform: 'translateY(-15px) rotate(1deg)'
					},
					'66%': { 
						transform: 'translateY(-8px) rotate(-1deg)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'cta-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'floating': 'floating 6s ease-in-out infinite',
				'floating-delayed': 'floating 6s ease-in-out infinite 2s',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'cta-pulse': 'cta-pulse 2s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'2xs': '0.625rem',
				'3xs': '0.5rem',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			backdropBlur: {
				'xs': '2px',
			},
			boxShadow: {
				'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
				'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
				'neon': '0 0 5px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
				'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
				'cta-shadow': '0 8px 32px rgba(59, 130, 246, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'luna-gradient': 'linear-gradient(135deg, hsl(var(--luna-primary)) 0%, hsl(var(--luna-secondary)) 50%, hsl(var(--luna-accent)) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
