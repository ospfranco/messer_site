var colors = require("tailwindcss/colors");

delete colors.lightBlue;

module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors,
      width: {
        768: "768px",
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar-hide")],
};
