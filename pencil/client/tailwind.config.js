/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
      Loto: ["Lato", "sans-serif"],
    },
    colors: {
      mustard: "#FFD05A",
      chinese_black: "#121212",
      brandeise_blue: "#0166ff",
      teal_green: "#0c817a",
      redical_red: "#f93062",
      royal_purple: "#7252a4",
      green: "#0fbf82",
      red: "#f91920",
      orange: "#fe753e",
      raisin_black: "#262626",
      quartz: "#4c4c4c",
      nickel: "#737373",
      white: "#ffffff",
      ghost_white1: "#f9fafc",
      ghost_white2: "#f5f9ff",
      dark_liver: "#4d4d4d",
    },
  },
  plugins: [],
};
