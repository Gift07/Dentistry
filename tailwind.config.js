// tailwind.config.js
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        radial:
          "radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%),",
      },
      fontFamily: {
        poppins: ["Priego", "Sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Priego",
          fontWheight: "300",
          src: "url(/src/fonts/Priego-light.ttf)",
        },
      });
    }),
  ],
};
