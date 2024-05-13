/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-magenta': '#8C0375',
        'secondary-magenta': '#C004D9',
        'tertiary-magenta': '#9303A6',
        'primary-purple': '#5D04D9',
        'primary-blue': '#03318C',
      },
    },
  },
  plugins: [],
};
