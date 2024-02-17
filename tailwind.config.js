/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #042A67 25%, #042A67 25%, #4F23BA 70%, #3B5DBE 100%)',
      },
    },
  },
  plugins: [],
}

