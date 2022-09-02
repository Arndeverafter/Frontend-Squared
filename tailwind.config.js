const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        // "footer-texture": "url('./public/Mass Circles.svg')",
      },
      height: {
        118: "30rem",
      },
    },
  },
};
