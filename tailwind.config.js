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
        poppins: ["Poppins", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
