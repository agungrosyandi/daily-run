/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // responsive mode format

    screens: {
      tabletMinWidth: "640px", // (min-width: 640px)
      laptopMinWidth: "1024px", // (min-width: 1024px)
      desktopMinWidth: "1280px", // (min-width: 1280px)
      fullHdMinWidth: "1440px", // (min-width: 1440px)
    },

    extend: {
      // font family
      // syntax example: font-NelaSlabLight or font-NewEleganceSansCondensed

      fontFamily: {
        RobotoBold: ["Roboto", "sans-serif"],
        PoppinsFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
