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
      colors: {
        // ...require("tailwindcss/colors"),
      },
      width: {
        768: "768px",
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar-hide")],
};
