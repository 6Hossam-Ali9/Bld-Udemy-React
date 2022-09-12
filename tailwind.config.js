/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        uxl: { max: "1180px" },
        ulg: { max: "1080px" },
        umd: { max: "920px" },
        usm: { max: "800px" },
      },
      colors: {
        wob: {
          bb: "rgba(28,29,31,0.9)",
          trans: "rgb(138,0,0,0)",
        },
      },
    },
  },
  plugins: [],
};
