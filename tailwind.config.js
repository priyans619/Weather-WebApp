/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #042A67 10%, #042A67 0%, #4F23BA 75%, #3B5DBE 100%)',
      },
    },
  },
  plugins: [],
}

