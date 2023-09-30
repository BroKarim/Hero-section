/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Croissant One', 'sans'], // Add the custom font family
        fredoka: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}