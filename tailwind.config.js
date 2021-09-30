module.exports = {
  purge: ["./src/**.html"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        // ...require("tailwindcss/colors"),
        bgGray: {
          DEFAULT: "#0b0b0c",
        },
      },
      borderRadius: {
        xl: "2rem",
      },
      width: {
        768: "768px",
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar-hide")],
};
