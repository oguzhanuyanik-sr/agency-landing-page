import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'yellow-100': '#FAD400',
      'red-100': '#FE7766',
      'white-100': '#FFFFFF',
      'grey-100': '#808397',
      'grey-200': '#A7AAAD',
      'grey-300': '#5B636D',
      'blue-100': '#24303E',
      'green-300': '#458D7E',
      'green-400': '#90D4C6',
    },
    fontFamily: {
      barlow: 'var(--font-barlow)',
      fraunces: 'var(--font-fraunces)',
    },
    boxShadow: {},
    backgroundImage: {},
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
};
export default config;
