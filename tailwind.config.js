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
        lightpriego: ["Priego-light"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Priego-light",
          fontWeight: "100",
          src: "url(/src/fonts/Priego-light.ttf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWeight: "200",
          src: "url(/src/fonts/priego-extralight.otf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWeight: "300",
          src: "url(/src/fonts/priego-light.otf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWeight: "400",
          src: "url(/src/fonts/priego-medium.otf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWeight: "500",
          src: "url(/src/fonts/priego-semibold.otf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWheight: "600",
          src: "url(/src/fonts/priego-bold.otf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWheight: "700",
          src: "url(/src/fonts/priego-extrabold.otf)",
        },
        "@font-face": {
          fontFamily: "Priego",
          fontWheight: "800",
          src: "url(/src/fonts/priego-black.otf)",
        },
      });
    }),
  ],
};
