// const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: false,
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        github: "#333333",
        twitter: "#1da1f2",
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
