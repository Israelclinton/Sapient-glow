/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1": "repeat(1, minmax(0, 1fr))", // Explicitly add grid-cols-1
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
};
