import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2E4A',
          50:  '#E8EDF3',
          100: '#C6D1DF',
          200: '#9AAFC5',
          300: '#6D8DAB',
          400: '#4D7096',
          500: '#2E5481',
          600: '#1A2E4A',
          700: '#142438',
          800: '#0E1A28',
          900: '#080F17',
        },
        green: {
          DEFAULT: '#2D6A3F',
          50:  '#E8F3EB',
          100: '#C4DFC9',
          200: '#9DCAA7',
          300: '#74B484',
          400: '#4E9F63',
          500: '#2D6A3F',
          600: '#245633',
          700: '#1A3F25',
          800: '#112918',
          900: '#08130B',
        },
        gold: {
          DEFAULT: '#E8A820',
          50:  '#FDF6E3',
          100: '#FAE9B8',
          200: '#F5D676',
          300: '#F0C440',
          400: '#E8A820',
          500: '#CC8F10',
          600: '#A8740B',
          700: '#835A08',
          800: '#5E4005',
          900: '#3A2703',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        inter:    ['Inter', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26,46,74,0.85) 0%, rgba(26,46,74,0.60) 50%, rgba(45,106,63,0.40) 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'count-up':   'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
