// tailwind.config.js
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Priego"],
        kumbh: ["Kumbh Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Priego",
          fontWheight: "100",
          src: "url(/src/fonts/Priego-thin.otf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWheight: "500",
          src: "url(/src/fonts/Priego-SemiBold.otf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWheight: "600",
          src: "url(/src/fonts/Priego-Bold.otf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWheight: "800",
          src: "url(/src/fonts/Priego-Black.otf)",
        },
      });
    }),
  ],
};
