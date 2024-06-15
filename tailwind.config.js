/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        fira: ['var(--font-fira-code)'],
        roboto: ['var(--font-roboto)'],
      },
    },
    screens: {
      xs: '340px',
      sm: '640px',
      md: '768px',
      xmd: '900px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
