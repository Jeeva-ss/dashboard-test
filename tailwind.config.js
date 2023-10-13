/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-blue': '#1D396B',
        'gunmetal-black': '#2D3039',
        'alice-blue': '#F4F7FC',
        'light-orange': '#F5832B1F',
        'yankees-blue': '#242C46',
        'princeton-orange': '#F5832B'
      },
    },
  },
  plugins: [],
}

