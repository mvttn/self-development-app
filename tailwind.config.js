/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#31d8a3",
        secondary: "#8b90e9",
        text: "#020d0a",
        light: { 100: "#000000", 200: "#000001" },
        dark: { 100: "#ffffff", 200: "#fffff1" },
        accent: "#8c58df",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Quicksand: "Quicksand",
      },
    },
  },
  plugins: [],
};
