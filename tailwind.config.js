/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: {
        300: "#C4C4CC",
        400: "#8D8D99",
        500: "#7C7C8A",
        600: "#323238",
        700: "#29292E",
        800: "#202024",
        900: "#121214",
      },
      green: {
        300: "#00B37E",
        500: "#00875F",
        700: "#015F43",
      },
      red: {
        300: "#F75A68",
        500: "#AB222E",
        700: "#7A1921",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
