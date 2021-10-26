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
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fadein: "fadein 1.5s ease-in-out",
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar-hide")],
};
