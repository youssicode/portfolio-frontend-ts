/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hoverShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        simpleShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        navShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        primary: "hsl(213, 44%, 95%)",
        secondary: "#313bac",
        black: "#030303",
        whiteGray: "#fef4f5",
        lightGray: "#e4e4e4",
        lightGreen: "#9cff9240",
        mediumGray: "#cbcbcb",
        gray: "#6b7688",
        brown: "#46364a",
        white: "#ffffff",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
