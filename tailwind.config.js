/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff007f",
        darkbg: "#0b0b0c",
        darkcard: "#141416"
      }
    },
  },
  plugins: [],
};
