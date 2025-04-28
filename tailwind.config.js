/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#d91bf2",
        secondary: "#f77d74",
        background: "#fef9ff",
        text: "#19021b",
        accent: "#ff4f29",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Quicksand: "Quicksand",
      },
    },
  },
  plugins: [],
};
