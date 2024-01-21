/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#999",
        "gray-100": "#333",
        "primary-50": "#121212",
        "primary-100": "#66cc00",
        "primary-300": "#c2ed97",
        "secondary-50": "#fff",
        "secondary-100": "rgb(94, 69, 145);",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
