import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF9F5',
        ink: '#1A1A1A',
        olive: {
          50: '#F3F4EE',
          100: '#E4E6D9',
          300: '#B9BEA0',
          500: '#8A9270',
          700: '#5E6650',
          900: '#3A3F32',
        },
        clay: {
          50: '#F7EEE7',
          100: '#EEDCCC',
          300: '#D9AE8C',
          500: '#BE8560',
          700: '#8C5F40',
          900: '#4F3527',
        },
        border: {
          DEFAULT: 'rgba(26, 26, 26, 0.1)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
