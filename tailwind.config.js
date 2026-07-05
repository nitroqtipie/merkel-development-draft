/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0F0F0F",
        charcoal: "#2D2E2E",
        parchment: "#F9F7F2",
        champagne: "#C5A059",
      },

      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}