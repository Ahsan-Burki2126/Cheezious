/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#ffcb05',
        customRed: '#d90002',
        menuItemBG: '#e5e5e5',
        bodyBG: '#f8f9fb',
        FAQ: '#665102',
        customWhite: '#f5f5f5',
      },
    },
  },
  plugins: [],
}
